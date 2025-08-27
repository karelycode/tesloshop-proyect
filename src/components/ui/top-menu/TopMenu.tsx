"use client";
import React from "react";
import Link from "next/link";

import { titleFont } from "@/config/fonts";

export const TopMenu = () => {
  return (
    <nav className="bg-yellow-400 flex px-5 justify-between items-center w-full">
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
      <div>
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
          href="/category/kids"
        >
          Niños
        </Link>
      </div>
    </nav>
  );
};
