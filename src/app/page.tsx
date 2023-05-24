"use client";
import React from "react";

import ItemLayout from "./components/ItemLayout";
import PomodoroComponent from "./components/Pomodoro";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-zinc-900">
      <ItemLayout title={"timer"} resizable={false}>
        <PomodoroComponent />
      </ItemLayout>

      <ItemLayout title={"media"} resizable={true}>
        <div></div>
      </ItemLayout>
      <ItemLayout title={"notes"} resizable={true}>
        <div></div>
      </ItemLayout>
      <ItemLayout title={"todo"} resizable={true}>
        <div></div>
      </ItemLayout>
      <ItemLayout title={"files"} resizable={true}>
        <div></div>
      </ItemLayout>

      <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-zinc-400">
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
