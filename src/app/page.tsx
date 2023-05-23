import { useContext } from "react";
import ItemLayout from "./components/ItemLayout";
import PomodoroComponent from "./components/Pomodoro";

export default function Home() {
  return (
    <main className="flex relative min-h-screen items-center justify-center bg-zinc-900">
      <ItemLayout title={"timer"} resizable={false}>
        <PomodoroComponent />
      </ItemLayout>
      <ItemLayout title={"media"} resizable={true} >
        <div></div>
      </ItemLayout>
      <ItemLayout title={"todo"} resizable={true} >
        <div></div>
      </ItemLayout>
      <div className="absolute bottom-0 left-0 right-0 text-zinc-400 text-center p-4">
        Made with 💖 by{" "}
        <a
          href="https://github.com/logolica99"
          className=" text-primary"
        >
          Jubaer Jami
        </a>
      </div>
    </main>
  );
}
