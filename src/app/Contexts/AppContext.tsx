"use client";
import React, { useState, createContext } from "react";

export type IApps = {
  timer: number;
  media: number;
  files: number;
  todo: number;
  notes: number;
  calender: number;
};

type IAppContext = [IApps, React.Dispatch<React.SetStateAction<IApps>>];
export const AppContext = createContext<IAppContext>([
  { timer: 6, media: 7, files: 8, todo: 9, notes: 10, calender: 11 },
  () => null,
]);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [apps, setApps] = useState({
    timer: 6,
    media: 7,
    files: 8,
    todo: 9,
    notes: 10,
    calender: 11,
  });

  return (
    <AppContext.Provider value={[apps, setApps]}>
      {children}
    </AppContext.Provider>
  );
};
