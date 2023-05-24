"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Nav() {
  const [roomName, setRoomName] = useState("Jane's Room");
  const [roomNameChangeActive, setRoomNameChangeActive] = useState(false);

  return (
    <div
      className="absolute flex h-[6vh] w-full  items-center justify-between border border-zinc-700 bg-zinc-800 px-6  text-zinc-400"
      style={{ zIndex: 9999 }}
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
                <stop stop-color="#FCD635" />
                <stop offset="1" stop-color="#F7A928" />
              </linearGradient>
            </defs>
          </svg>
          <p className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-xl font-extrabold text-transparent">
            Zenzone{" "}
          </p>
        </div>
      </Link>

      {/* room name */}
      <div className="hidden md:block">
        {roomNameChangeActive ? (
          <input
            value={roomName}
            minLength={2}
            onChange={(e) => {
              if (e.target.value.length > 1) {
                setRoomName(e.target.value);
              }
            }}
            onBlur={() => setRoomNameChangeActive(false)}
            className="bg-transparent text-center  text-primary outline-none "
            placeholder="Enter room name"
            autoFocus
          />
        ) : (
          <div className="flex items-center gap-3">
            <p
              className="text-primary"
              onClick={() => setRoomNameChangeActive(true)}
            >
              {roomName}
            </p>

            <button
              title="Share link"
              className="rounded bg-primary px-4 text-zinc-800 ring-zinc-700 transition  duration-150 ease-in-out focus:ring active:opacity-60"
            >
              Share
            </button>
            <div className="border-l-2 border-zinc-700 pl-3">
              <div
                className="cursor-pointer rounded px-2 py-1 transition duration-150 ease-in-out  hover:bg-zinc-200/20 active:opacity-60"
                title="Start a video call"
              >
                <svg
                  width="23"
                  height="15"
                  viewBox="0 0 23 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.621 0.656039L16.72 3.81704V2.86004C16.72 1.58404 15.676 0.540039 14.4 0.540039H2.79998C1.52398 0.540039 0.47998 1.58404 0.47998 2.86004V12.14C0.47998 13.416 1.52398 14.46 2.79998 14.46H14.4C15.676 14.46 16.72 13.416 16.72 12.14V11.183L21.621 14.344C22.172 14.634 22.52 14.141 22.52 13.851V1.12004C22.52 0.830039 22.201 0.308039 21.621 0.656039ZM15.56 12.14C15.56 12.778 15.038 13.3 14.4 13.3H2.79998C2.16198 13.3 1.63998 12.778 1.63998 12.14V2.86004C1.63998 2.22204 2.16198 1.70004 2.79998 1.70004H14.4C15.038 1.70004 15.56 2.22204 15.56 2.86004V12.14ZM21.36 12.807L16.72 9.82004V5.18004L21.36 2.19304V12.807Z"
                    fill="#F7A928"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* user buttons */}
      <div className="flex items-center gap-3">
        <div
          className=" cursor-pointer rounded px-2 py-1 transition duration-150 ease-in-out hover:bg-zinc-200/20  active:opacity-60"
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
              d="M16.75 14.9996C15.55 14.9996 14.475 15.5746 13.8 16.4496L7.725 12.9246C8.1 11.9996 8.1 10.9746 7.725 10.0496L13.8 6.52461C14.475 7.39961 15.55 7.97461 16.75 7.97461C18.825 7.97461 20.5 6.29961 20.5 4.22461C20.5 2.14961 18.825 0.474609 16.75 0.474609C14.675 0.474609 13 2.14961 13 4.22461C13 4.72461 13.1 5.22461 13.275 5.64961L7.2 9.19961C6.5 8.32461 5.45 7.74961 4.25 7.74961C2.175 7.74961 0.5 9.42461 0.5 11.4996C0.5 13.5746 2.175 15.2496 4.25 15.2496C5.45 15.2496 6.525 14.6746 7.2 13.7996L13.275 17.3246C13.1 17.7496 13 18.2496 13 18.7496C13 20.8246 14.675 22.4996 16.75 22.4996C18.825 22.4996 20.5 20.8246 20.5 18.7496C20.5 16.6746 18.825 14.9996 16.75 14.9996ZM16.75 1.49961C18.275 1.49961 19.5 2.72461 19.5 4.24961C19.5 5.77461 18.275 6.99961 16.75 6.99961C15.225 6.99961 14 5.77461 14 4.24961C14 2.72461 15.225 1.49961 16.75 1.49961ZM4.25 14.2496C2.725 14.2496 1.5 13.0246 1.5 11.4996C1.5 9.97461 2.725 8.74961 4.25 8.74961C5.775 8.74961 7 9.97461 7 11.4996C7 13.0246 5.775 14.2496 4.25 14.2496ZM16.75 21.4996C15.225 21.4996 14 20.2746 14 18.7496C14 17.2246 15.225 15.9996 16.75 15.9996C18.275 15.9996 19.5 17.2246 19.5 18.7496C19.5 20.2746 18.275 21.4996 16.75 21.4996Z"
              fill="#F7A928"
            />
          </svg>
        </div>
        <div
          className="cursor-pointer rounded px-2 py-1 transition duration-150 ease-in-out hover:bg-zinc-200/20  active:opacity-60"
          title={
            document.fullscreenElement === null
              ? "Go fullscreen"
              : "Exit fullscreen"
          }
          onClick={() => {
            if (document.fullscreenElement === null) {
              document.body.requestFullscreen();
            } else {
              document?.exitFullscreen();
            }
          }}
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
              stroke-miterlimit="10"
            />
            <path
              d="M0.48584 18.0312L9.67334 8.84375L0.48584 18.0312Z"
              fill="#010101"
            />
            <path
              d="M0.48584 18.0312L9.67334 8.84375"
              stroke="#F7A928"
              stroke-miterlimit="10"
            />
            <path
              d="M11.6548 0.961914H17.5643V6.8452"
              stroke="#F7A928"
              stroke-miterlimit="10"
            />
            <path
              d="M17.561 0.96875L9.68604 8.84375L17.561 0.96875Z"
              fill="#010101"
            />
            <path
              d="M17.561 0.96875L9.68604 8.84375"
              stroke="#F7A928"
              stroke-miterlimit="10"
            />
          </svg>
        </div>
        <div className="border-l-2 border-zinc-700 pl-3">
          <div className=" cursor-pointer rounded px-2 py-1 transition duration-150 ease-in-out hover:bg-zinc-200/20  active:opacity-60">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.47339 10.5689C12.1734 10.5689 14.3387 8.37687 14.3387 5.7036C14.3387 3.03034 12.1734 0.811523 9.47339 0.811523C6.77339 0.811523 4.60804 3.0036 4.60804 5.67687C4.60804 8.35014 6.77339 10.5689 9.47339 10.5689ZM9.47339 2.09469C11.4516 2.09469 13.0556 3.69865 13.0556 5.67687C13.0556 7.65509 11.4516 9.25905 9.47339 9.25905C7.49517 9.25905 5.89121 7.68182 5.89121 5.7036C5.89121 3.72538 7.49517 2.09469 9.47339 2.09469ZM1.02586 18.1878H17.9744C18.3219 18.1878 18.616 17.8937 18.616 17.5462C18.616 14.1779 15.8625 11.4244 12.4942 11.4244H6.50606C3.13774 11.4244 0.384277 14.1779 0.384277 17.5462C0.384277 17.8937 0.678337 18.1878 1.02586 18.1878ZM6.50606 12.7076H12.4942C14.9536 12.7076 16.9585 14.5254 17.2793 16.9046H1.72091C2.0417 14.5254 4.04665 12.7076 6.50606 12.7076Z"
                fill="#F7A928"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
