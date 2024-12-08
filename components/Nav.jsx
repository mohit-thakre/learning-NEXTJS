"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export default function Nav() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="flex justify-center items-center w-full  py-4">
      {/* <span className=" font-extrabold text-3xl text-gray-200 ">BLOGGIFY</span>
      <span className=" font-extrabold text-3xl text-gray-200 "> */}
      <FloatingNav navItems={navItems} />
      {/* </span> */}
    </div>
  );
}
