"use client";
import React, { useState, Fragment, useEffect } from "react";

import Link from "next/link";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "@/app/firebase.config";
import { db } from "@/app/firebase.config";
import {
  collection,
  addDoc,
  doc,
  setDoc,
  query,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { Dialog, Transition, Menu } from "@headlessui/react";
import { Loader2, MoreVertical, Trash2 } from "lucide-react";
import ZoneCardSkeleton from "../components/ZoneCardSkeleton";

const roomThumbnails = [
  "/assets/zone-thumbnails/ante-hamersmit-qg6MDcCWBfM-unsplash.jpg",
  "/assets/zone-thumbnails/christin-hume-Hcfwew744z4-unsplash.jpg",
  "/assets/zone-thumbnails/ian-dooley-DJ7bWa-Gwks-unsplash.jpg",
  "/assets/zone-thumbnails/jaida-stewart-nXVP9MmUFVA-unsplash.jpg",
  "/assets/zone-thumbnails/kelly-sikkema-v9FQR4tbIq8-unsplash.jpg",
  "/assets/zone-thumbnails/sage-friedman-HS5CLnQbCOc-unsplash.jpg",
  "/assets/zone-thumbnails/samantha-gades-BlIhVfXbi9s-unsplash.jpg",
  "/assets/zone-thumbnails/thomas-rey-Oadvsf3xH9E-unsplash.jpg",
];

export default function RoomsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [zoneName, setZoneName] = useState("");
  const [selectedImage, setSelectedImage] = useState(roomThumbnails[0]);
  const [isCreating, setIsCreating] = useState(false);
  const [zones, setZones] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!currentUser) return;
    fetchZones();
  }, [currentUser]);

  const fetchZones = async () => {
    if (!currentUser) return;

    try {
      const zonesRef = collection(db, "zones", currentUser.uid, "userZones");
      const zonesSnapshot = await getDocs(zonesRef);
      const zonesData = zonesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setZones(zonesData);
    } catch (error) {
      console.error("Error fetching zones:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Redirect will happen automatically due to auth state change
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleCreateZone = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!zoneName.trim() || !auth.currentUser || isCreating) return;

    try {
      setIsCreating(true);
      const zoneId = uuidv4();
      const userZonesRef = doc(
        db,
        "zones",
        auth.currentUser.uid,
        "userZones",
        zoneId
      );

      await setDoc(userZonesRef, {
        title: zoneName.trim(),
        createdAt: new Date().toISOString(),
        id: zoneId,
        thumbnail: selectedImage,
      });

      setIsOpen(false);
      setZoneName("");
      router.push(`/zone/${zoneId}`);
    } catch (error) {
      console.error("Error creating zone:", error);
    } finally {
      setIsCreating(false);
    }
  };

  const handleDeleteZone = async (zoneId: string) => {
    if (!currentUser) return;

    try {
      const zoneRef = doc(db, "zones", currentUser.uid, "userZones", zoneId);
      await deleteDoc(zoneRef);
      // Refresh the zones list
      setZones(zones.filter((zone) => zone.id !== zoneId));
    } catch (error) {
      console.error("Error deleting zone:", error);
    }
  };

  function closeModal() {
    setIsOpen(false);
    setZoneName("");
  }

  return (
    <div className="flex min-h-screen bg-zinc-900">
      {/* Sidebar */}
      <div className="flex  flex-[1] items-center justify-center">
        <div className="relative h-[95%] w-[90%] rounded-lg border-r border-zinc-800  bg-zinc-800 p-4 pt-8 ">
          <Link href="/zones">
            <div className="flex cursor-pointer items-center justify-center gap-2 border-b border-zinc-700 pb-8 active:opacity-60">
              <svg
                width="32"
                height="32"
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
                className={`bg-gradient-to-r from-secondary to-primary bg-clip-text text-2xl font-extrabold text-transparent`}
              >
                Zenzone{" "}
              </p>
            </div>
          </Link>

          <nav className="mt-8 space-y-2">
            <Link
              href="/zones"
              className="flex items-center gap-2 rounded-md border border-primary/20 bg-primary/10 px-4 py-2 text-primary"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              My zones
            </Link>

            <button
              onClick={() => setIsOpen(true)}
              className="flex w-full items-center gap-2 rounded-md border border-primary/20 px-4 py-2 text-primary transition-colors duration-200 hover:bg-primary/10"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 4v16m8-8H4" />
              </svg>
              Create Zone
            </button>

            {/* <Link 
              href="/zenzones" 
              className="flex items-center gap-2 rounded-md px-4 py-2 text-zinc-400 hover:bg-zinc-800"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Zenzones
            </Link> */}
          </nav>
          <div className="absolute bottom-8 left-0 flex w-full items-center justify-center  ">
            <div className="w-[80%] border-t border-zinc-700 pt-8">
              <button
                onClick={handleSignOut}
                className=" mx-auto flex  w-full items-center justify-center gap-2 rounded-md border   border-zinc-700 py-2 text-zinc-400 hover:bg-red-500/30 hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="h-[100vh] flex-[3] overflow-y-auto p-8 md:flex-[4]">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-primary">My zones</h1>
          <p className="text-zinc-400">
            Here are all the zones that you created
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {isLoading ? (
            Array(6)
              .fill(0)
              .map((_, i) => <ZoneCardSkeleton key={i} />)
          ) : zones.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-16">
              <svg
                className="h-48 w-48 text-zinc-700"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-pulse"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-pulse"
                  style={{ animationDelay: "150ms" }}
                />
              </svg>
              <h3 className="mt-4 text-xl font-medium text-zinc-400">
                No Zones Yet
              </h3>
              <p className="mt-2 text-center text-zinc-500">
                Create your first zone to start organizing your thoughts and
                ideas
              </p>
              <button
                onClick={() => setIsOpen(true)}
                className="mt-6 flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-white transition-all hover:bg-primary/90 active:scale-95"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 4v16m8-8H4" />
                </svg>
                Create Your First Zone
              </button>
            </div>
          ) : (
            zones.map((zone) => (
              <div key={zone.id} className="group relative">
                <Link href={`/zone/${zone.id}`}>
                  <div className="cursor-pointer overflow-hidden rounded-lg border border-zinc-700 bg-zinc-800 transition-all hover:border-primary">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={zone.thumbnail}
                        alt={zone.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-primary">
                        {zone.title}
                      </h3>
                    </div>
                  </div>
                </Link>

                {/* Three-dot menu */}
                <div className="absolute right-2 top-2">
                  <Menu as="div" className="relative">
                    <Menu.Button className="flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70">
                      <MoreVertical className="h-4 w-4" />
                    </Menu.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-1 w-48 origin-top-right rounded-md bg-zinc-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => handleDeleteZone(zone.id)}
                                className={`${
                                  active
                                    ? "bg-zinc-700 text-white"
                                    : "text-zinc-200"
                                } flex w-full items-center gap-2 px-4 py-2 text-sm`}
                              >
                                <Trash2 className="h-4 w-4 text-red-400" />
                                Delete Zone
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* HeadlessUI Dialog */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-95 translate-y-4"
                enterTo="opacity-100 scale-100 translate-y-0"
                leave="ease-in duration-150"
                leaveFrom="opacity-100 scale-100 translate-y-0"
                leaveTo="opacity-0 scale-95 translate-y-4"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-zinc-800/95 p-6 text-left align-middle shadow-xl backdrop-blur-sm transition-all">
                  <Dialog.Title as="h3" className="text-xl  text-primary">
                    Create New Zone
                  </Dialog.Title>

                  <form onSubmit={handleCreateZone} className="mt-4">
                    <input
                      type="text"
                      value={zoneName}
                      onChange={(e) => setZoneName(e.target.value)}
                      placeholder="Enter zone name"
                      className="w-full rounded-md border border-zinc-700 bg-zinc-900/90 px-4 py-2 text-white transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      autoFocus
                    />

                    <div className="mt-4">
                      <label className="text-sm text-zinc-400">
                        Select Thumbnail
                      </label>
                      <div className="mt-2 grid grid-cols-3 gap-2">
                        {roomThumbnails.map((thumbnail, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => setSelectedImage(thumbnail)}
                            className={`relative aspect-video overflow-hidden rounded-md border-2 transition-all ${
                              selectedImage === thumbnail
                                ? "border-primary"
                                : "border-transparent"
                            }`}
                          >
                            <img
                              src={thumbnail}
                              alt={`Thumbnail ${index + 1}`}
                              className="h-full w-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={closeModal}
                        className="rounded-md px-4 py-2 text-zinc-400 transition-all duration-200 hover:bg-zinc-700 active:scale-95"
                        disabled={isCreating}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-white transition-all duration-200 hover:bg-primary/90 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
                        disabled={isCreating || !zoneName.trim()}
                      >
                        {isCreating ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Creating...
                          </>
                        ) : (
                          "Create"
                        )}
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
