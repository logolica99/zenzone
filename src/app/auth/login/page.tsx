"use client";
import React from "react";
import Link from "next/link";

import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const { data: session } = useSession();
const something =true
  if (something) {
    
    redirect("/room/test_room/");
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center gap-8 bg-zinc-900 pt-40 md:pt-52">
      <Link href="/">
        <div className="flex cursor-pointer flex-col items-center gap-4 active:opacity-60">
          <svg
            width="84"
            height="84"
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
          <p className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-4xl font-extrabold text-transparent">
            Zenzone{" "}
          </p>
        </div>
      </Link>

      {session?.user && "logged in "}
      <div
        className="rounded-lg border border-zinc-700 bg-zinc-800 p-6 text-center text-zinc-400 shadow"
        onClick={() => {
          signIn("google");
        }}
      >
        <p>Sign in with</p>
        <div className="my-6 flex flex-1 cursor-pointer items-center justify-center gap-3 rounded-md border border-zinc-700 py-3 transition duration-150 ease-in-out hover:bg-zinc-200/20">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.14 8.92263C17.14 13.8972 13.7366 17.4374 8.71049 17.4374C3.89162 17.4374 0 13.5421 0 8.71872C0 3.8953 3.89162 0 8.71049 0C11.0567 0 13.0306 0.861326 14.5514 2.28163L12.1806 4.56327C9.07928 1.56796 3.31209 3.81796 3.31209 8.71872C3.31209 11.7597 5.73909 14.2242 8.71049 14.2242C12.1596 14.2242 13.4521 11.7492 13.6558 10.466H8.71049V7.46716H17.003C17.0838 7.91365 17.14 8.34255 17.14 8.92263Z"
              fill="#9ca3af"
            />
          </svg>
          <p className="font-bold">Google</p>
        </div>
        <p className="text-sm text-zinc-500">
          By signing in, you agree to our{" "}
          <span className="cursor-pointer text-primary">Terms of Service </span>{" "}
          <br /> and Privacy Policy.
        </p>
      </div>

      <div className="absolute bottom-16 left-0 right-0 p-4 text-center  text-zinc-400 md:bottom-0">
        Made with 💖 by{" "}
        <a
          href="https://github.com/logolica99"
          target="_blank"
          rel="noreferrer"
          className=" text-primary"
        >
          Jubaer Jami
        </a>
      </div>
    </main>
  );
}
