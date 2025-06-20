"use client";

import { createContext, useState } from "react";

export const TabContext = createContext({
  tab: "rec",
  setTab: (tab: "rec" | "fol") => {},
});

export default function TabProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tab, setTab] = useState("rec");

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}
