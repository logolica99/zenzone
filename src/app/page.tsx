"use client";
import React from "react";
import Nav from "./components/Nav";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen bg-zinc-900  md:items-center  ">
      <Nav />
      <div className=" mx-auto mt-44 flex flex-col items-center gap-12 text-center md:mt-0 md:justify-center md:gap-8">
        <h1 className="text-4xl font-semibold text-primary md:text-5xl lg:text-6xl">
          Unlock focused and productive <br className="hidden md:block" />{" "}
          collaborations
        </h1>
        <div className="flex flex-col items-center justify-center gap-2 md:gap-3">
          <h2 className="mx-auto w-[80%] text-base font-medium text-zinc-400 md:w-full lg:text-2xl">
            {" "}
            Embrace the power of synced and decluttered workspaces
          </h2>
          <h3 className="text-base text-primary">Unleash Your Zen Mode!</h3>
        </div>
        <Link
          href="/auth/login"
          className="rounded-md bg-primary px-8  py-2 text-lg  font-bold text-zinc-900 transition duration-150 ease-in-out hover:bg-primary/80"
        >
          Get Started
        </Link>
      </div>
      <div className="absolute bottom-16 left-0 right-0 p-4 text-center text-zinc-400 md:bottom-0">
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
