"use client";

import Link from "next/link";
import React, { useContext, useState, useEffect } from "react";
import { FullScreenHandle } from "react-full-screen";
import { Menu } from "@headlessui/react";
import { signOut, onAuthStateChanged, User } from "firebase/auth";
import { auth, db } from "@/app/firebase.config";
import { AppContext } from "@/app/Contexts/AppContext";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useParams } from "next/navigation";

export default function Nav({ handle }: { handle: FullScreenHandle }) {
  const [zoneName, setZoneName] = useState("");
  const [roomNameChangeActive, setRoomNameChangeActive] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const params = useParams();
  const zoneId = params.roomNumber as string;

  const { collapsedState } = useContext(AppContext);
  const [isCollapsed, setIsCollapsed] = collapsedState;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!currentUser) return;
    fetchZoneName();
  }, [currentUser]);

  const fetchZoneName = async () => {
    if (!currentUser) return;

    try {
      const zoneRef = doc(db, "zones", currentUser.uid, "userZones", zoneId);
      const zoneSnap = await getDoc(zoneRef);

      if (zoneSnap.exists()) {
        setZoneName(zoneSnap.data().title);
      }
    } catch (error) {
      console.error("Error fetching zone name:", error);
    }
  };

  const handleUpdateZoneName = async (newName: string) => {
    if (!currentUser || isUpdating) {
      setRoomNameChangeActive(false);

      return;
    }

    try {
      setIsUpdating(true);
      const zoneRef = doc(db, "zones", currentUser.uid, "userZones", zoneId);
      await updateDoc(zoneRef, {
        title: newName.trim(),
      });
      setZoneName(newName.trim());
    } catch (error) {
      console.error("Error updating zone name:", error);
      setZoneName(zoneName);
    } finally {
      setIsUpdating(false);
      setRoomNameChangeActive(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div
      className={`absolute ${
        isCollapsed
          ? "left-auto right-4 translate-x-0"
          : "left-1/2 -translate-x-1/2"
      } top-4 flex h-12 items-center justify-between rounded-lg border border-zinc-700/30 bg-zinc-800/50 px-6 text-zinc-400 backdrop-blur-lg`}
      style={{ zIndex: 9999, width: isCollapsed ? "auto" : "min(90%, 800px)" }}
    >
      {/* logo */}
      <Link href="/">
        <div className="flex cursor-pointer items-center gap-2 active:opacity-60">
          <svg
            width="24"
            height="24"
            viewBox="0 0 87 87"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43.3125 86.625C67.2333 86.625 86.625 67.2333 86.625 43.3125C86.625 19.3917 67.2333 0 43.3125 0C19.3917 0 0 19.3917 0 43.3125C0 67.2333 19.3917 86.625 43.3125 86.625Z"
              fill="#6CBAE5"
            />
            <path
              d="M43.3125 78.375C62.677 78.375 78.375 62.677 78.375 43.3125C78.375 23.948 62.677 8.25 43.3125 8.25C23.948 8.25 8.25 23.948 8.25 43.3125C8.25 62.677 23.948 78.375 43.3125 78.375Z"
              fill="#B8EAEE"
            />
            <path
              d="M59.8124 66.5117C59.383 66.5118 58.9642 66.3779 58.6145 66.1286C58.2648 65.8793 58.0016 65.527 57.8617 65.121C57.7218 64.7149 57.7122 64.2754 57.8341 63.8636C57.9561 63.4518 58.2035 63.0883 58.5419 62.8239C59.9396 61.731 61.2167 60.492 62.3514 59.1279C62.7042 58.7183 63.2038 58.4637 63.7426 58.4188C64.2814 58.3739 64.8162 58.5423 65.2321 58.8878C65.6479 59.2333 65.9114 59.7283 65.9659 60.2662C66.0204 60.8041 65.8615 61.3419 65.5235 61.7638C64.2009 63.3539 62.7123 64.7983 61.0829 66.0723C60.7204 66.3566 60.2731 66.5112 59.8124 66.5117ZM19.5174 33.0002C19.1632 32.9995 18.8152 32.9077 18.5069 32.7335C18.1985 32.5593 17.9402 32.3087 17.7568 32.0057C17.5734 31.7028 17.4711 31.3577 17.4598 31.0037C17.4485 30.6498 17.5284 30.2989 17.692 29.9848C18.5079 28.4201 19.4647 26.9331 20.5507 25.5422C20.7174 25.3286 20.9245 25.15 21.1603 25.0164C21.396 24.8829 21.6558 24.7972 21.9247 24.764C22.1935 24.7309 22.4663 24.751 22.7274 24.8233C22.9885 24.8956 23.2329 25.0186 23.4464 25.1853C23.66 25.3521 23.8386 25.5592 23.9721 25.7949C24.1057 26.0307 24.1914 26.2904 24.2246 26.5593C24.2577 26.8282 24.2375 27.101 24.1652 27.3621C24.093 27.6232 23.9699 27.8675 23.8032 28.0811C22.8708 29.2735 22.0493 30.5486 21.3489 31.8905C21.1744 32.2254 20.9114 32.506 20.5884 32.7017C20.2654 32.8973 19.895 33.0006 19.5174 33.0002Z"
              fill="#A8D6DA"
            />
            <path
              d="M65.9525 4.3173C66.9265 2.3243 65.4755 0 63.2572 0H37.724C36.2054 0 34.9263 1.13478 34.7454 2.64256L29.2779 48.2051C29.0636 49.9908 30.458 51.5625 32.2565 51.5625H39.4077C41.3788 51.5625 42.8142 53.4309 42.3064 55.3355L39.7422 64.951C38.8678 68.23 43.2547 70.2117 45.1371 67.3881L60.8281 43.8516C62.1572 41.8579 60.728 39.1875 58.3319 39.1875H53.7155C51.4972 39.1875 50.0461 36.8632 51.0201 34.8702L65.9525 4.3173Z"
              fill="url(#paint0_linear_0_1)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_1"
                x1="48.4688"
                y1="0"
                x2="48.4688"
                y2="82.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FCD635" />
                <stop offset="1" stopColor="#F7A928" />
              </linearGradient>
            </defs>
          </svg>
          <p
            className={`${
              isCollapsed ? "hidden" : ""
            } bg-gradient-to-r from-secondary to-primary bg-clip-text text-xl font-extrabold text-transparent`}
          >
            Zenzone{" "}
          </p>
        </div>
      </Link>

      {/* room name */}
      <div className={`${isCollapsed ? "ml-4" : ""} hidden md:block`}>
        {roomNameChangeActive ? (
          <input
            value={zoneName}
            minLength={2}
            onChange={(e) => setZoneName(e.target.value)}
            onBlur={(e) => handleUpdateZoneName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleUpdateZoneName(e.currentTarget.value);
              } else if (e.key === "Escape") {
                setRoomNameChangeActive(false);
                setZoneName(zoneName); // Revert changes
              }
            }}
            className="w-48 rounded bg-transparent px-2 py-1 text-center text-sm text-primary outline-none ring-1 ring-primary/20"
            placeholder="Enter zone name"
            autoFocus
          />
        ) : (
          <p
            className="cursor-pointer text-sm text-primary transition-colors hover:text-primary/80"
            onClick={() => setRoomNameChangeActive(true)}
          >
            {isUpdating ? "Saving..." : zoneName}
          </p>
        )}
      </div>

      {/* user buttons */}

      <div className="flex items-center gap-3">
        {!isCollapsed && (
          <div
            className="cursor-pointer rounded px-2 py-1 transition duration-150 ease-in-out hover:bg-zinc-200/20 active:opacity-60"
            title="Share link"
          >
            <svg
              width="21"
              height="23"
              viewBox="0 0 21 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.75 14.9996C15.55 14.9996 14.475 15.5746 13.8 16.4496L7.725 12.9246C8.1 11.9996 8.1 10.9746 7.725 10.0496L13.8 6.52461C14.475 7.39961 15.55 7.97461 16.75 7.97461C18.825 7.97461 20.5 6.29961 20.5 4.22461C20.5 2.14961 18.825 0.474609 16.75 0.474609C14.675 0.474609 13 2.14961 13 4.22461C13 4.72461 13.1 5.22461 13.275 5.64961L7.2 9.19961C6.5 8.32461 5.45 7.74961 4.25 7.74961C2.175 7.74961 0.5 9.42461 0.5 11.4996C0.5 13.5746 2.175 15.2496 4.25 15.2496C5.45 15.2496 6.525 14.6746 7.2 13.7996L13.275 17.3246C13.1 17.7496 13 18.2496 13 18.7496C13 20.8246 14.675 22.4996 16.75 22.4996C18.825 22.4996 20.5 20.8246 20.5 18.7496C20.5 16.6746 18.825 14.9996 16.75 14.9996Z"
                fill="#F7A928"
              />
            </svg>
          </div>
        )}

        {handle.active ? (
          <div
            className={`cursor-pointer rounded px-2 py-1 transition duration-150 ease-in-out hover:bg-zinc-200/20  active:opacity-60 ${
              isCollapsed && "ml-4"
            }`}
            title="Exit fullscreen"
            onClick={handle.exit}
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.39195 18.0379H0.482422V12.1514"
                stroke="#F7A928"
                strokeMiterlimit="10"
              />
              <path
                d="M0.48584 18.0312L9.67334 8.84375L0.48584 18.0312Z"
                fill="#010101"
              />
              <path
                d="M0.48584 18.0312L9.67334 8.84375"
                stroke="#F7A928"
                strokeMiterlimit="10"
              />
              <path
                d="M11.6548 0.961914H17.5643V6.8452"
                stroke="#F7A928"
                strokeMiterlimit="10"
              />
              <path
                d="M17.561 0.96875L9.68604 8.84375L17.561 0.96875Z"
                fill="#010101"
              />
              <path
                d="M17.561 0.96875L9.68604 8.84375"
                stroke="#F7A928"
                strokeMiterlimit="10"
              />
            </svg>
          </div>
        ) : (
          <div
            className={`cursor-pointer rounded px-2 py-1 transition duration-150 ease-in-out hover:bg-zinc-200/20  active:opacity-60 ${
              isCollapsed && "ml-4"
            }`}
            title="Go fullscreen"
            onClick={handle.enter}
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.39195 18.0379H0.482422V12.1514"
                stroke="#F7A928"
                strokeMiterlimit="10"
              />
              <path
                d="M0.48584 18.0312L9.67334 8.84375L0.48584 18.0312Z"
                fill="#010101"
              />
              <path
                d="M0.48584 18.0312L9.67334 8.84375"
                stroke="#F7A928"
                strokeMiterlimit="10"
              />
              <path
                d="M11.6548 0.961914H17.5643V6.8452"
                stroke="#F7A928"
                strokeMiterlimit="10"
              />
              <path
                d="M17.561 0.96875L9.68604 8.84375L17.561 0.96875Z"
                fill="#010101"
              />
              <path
                d="M17.561 0.96875L9.68604 8.84375"
                stroke="#F7A928"
                strokeMiterlimit="10"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
