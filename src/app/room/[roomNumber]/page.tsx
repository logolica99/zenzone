"use client";
import React from "react";

import ItemLayout from "./components/ItemLayout";
import PomodoroComponent from "./components/Pomodoro";
import MediaComponent from "./components/MediaComponent";
import FilesComponent from "./components/FilesComponent";


export default function Rooms({ params: { roomNumber } }: { params: { roomNumber: string } }) {
    console.log(roomNumber)

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-zinc-900">
      <ItemLayout title={"timer"} resizable={false}>
        <PomodoroComponent />
      </ItemLayout>

      <ItemLayout title={"media"} resizable={true}>
        <MediaComponent />
      </ItemLayout>
      <ItemLayout title={"notes"} resizable={false}>
        <div className="my-3 flex h-[300px] w-[300px]  flex-col items-center justify-center rounded-md border border-zinc-700 text-primary">
          <p>Coming soon!</p>
        </div>
      </ItemLayout>
      <ItemLayout title={"todo"} resizable={false}>
        <div className="my-3 flex h-[300px] w-[300px]  flex-col items-center justify-center rounded-md border border-zinc-700 text-primary">
          <p>Coming soon!</p>
        </div>
      </ItemLayout>
      <ItemLayout title={"calendar"} resizable={false}>
        <div className="my-3 flex h-[300px] w-[300px]  flex-col items-center justify-center rounded-md border border-zinc-700 text-primary">
          <p>Coming soon!</p>
        </div>
      </ItemLayout>
      <ItemLayout title={"files"} resizable={true}>
        <FilesComponent />
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
