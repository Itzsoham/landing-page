import clsx from "clsx";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landing Page for Project 1",
  description: "Landing pages for a SaaS products. Project 1",
};

export default function Project1Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={clsx(dmSans.className, "bg-[#EAEEFE] antialiased")}>
      {children}
    </main>
  );
}
