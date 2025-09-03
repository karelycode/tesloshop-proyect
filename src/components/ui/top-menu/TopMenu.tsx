"use client";
import React from "react";
import Link from "next/link";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";

import { titleFont } from "@/config/fonts";
import { useUIStore } from "@/store/ui/ui-store";

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);
  return (
    <nav className="bg-white flex px-5 justify-between items-center w-full">
      <div className="text-lg font-bold">
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo
          </span>
          <span className={`${titleFont.className} antialiased font-bold`}>
            | Shop
          </span>
        </Link>
      </div>
      {/* Add your menu items here */}
      <div className="hidden md:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-200"
          href="/category/men"
        >
          Hombres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-200"
          href="/category/women"
        >
          Mujeres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-200"
          href="/category/kid"
        >
          Niños
        </Link>
      </div>

      <div className="flex items-center">
        <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>
        <Link href="/cart" className="mx-2">
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 bg-blue-700 text-white">
              3
            </span>
            <IoCartOutline className="w-5 h-5 " />
          </div>
        </Link>
        <button
          onClick={openSideMenu}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-200"
        >
          Menu
        </button>
      </div>
    </nav>
  );
};
