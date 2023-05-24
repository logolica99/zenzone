"use client";
import { useContext } from "react";
import ItemLayout from "./components/ItemLayout";
import PomodoroComponent from "./components/Pomodoro";
import { AppContext } from "./Contexts/AppContext";

export default function Home() {
  const { appState } = useContext(AppContext);
  const [appActiveState, setAppActiveState] = appState;
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-zinc-900">
      <ItemLayout
        title={"timer"}
        resizable={false}
        hidden={!appActiveState.timer}
      >
        <PomodoroComponent />
      </ItemLayout>

      <ItemLayout
        title={"media"}
        resizable={true}
        hidden={!appActiveState.media}
      >
        <div></div>
      </ItemLayout>
      <ItemLayout
        title={"notes"}
        resizable={true}
        hidden={!appActiveState.notes}
      >
        <div></div>
      </ItemLayout>
      <ItemLayout title={"todo"} resizable={true} hidden={!appActiveState.todo}>
        <div></div>
      </ItemLayout>
      <ItemLayout
        title={"files"}
        resizable={true}
        hidden={!appActiveState.files}
      >
        <div></div>
      </ItemLayout>

      <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-zinc-400">
        Made with 💖 by{" "}
        <a
          href="https://github.com/logolica99"
          target="_blank"
          className=" text-primary"
        >
          Jubaer Jami
        </a>
      </div>
    </main>
  );
}
