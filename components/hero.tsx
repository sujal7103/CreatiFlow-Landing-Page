"use client";

import { menu } from "@/utils/constant";
import { useState } from "react";
import Image from "next/image";
import { TextRoll } from "@/components/text-roll";

export default function Hero() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <header
      className="relative h-screen w-full bg-[url(/images/hero.webp)] bg-cover bg-center">
      <div className="container mx-auto px-4 lg:px-10">
        <nav className="flex items-center justify-between py-5">
          <div className="flex cursor-pointer gap-3">
            <figure>
              <Image
                src="/images/logo.png"
                width={300}
                height={300}
                className="h-6 w-6"
                alt="Logo"
              />
            </figure>
            <p className="text-base font-medium text-white">CreatiFlow</p>
          </div>
          <div>
            <ul
              className="hidden w-full flex-col justify-end gap-6 lg:flex lg:flex-row lg:gap-12 lg:text-base">
              {menu.map((menu) => (
                <div
                  className="relative flex cursor-pointer items-center text-sm font-normal text-white"
                  key={menu.id}
                  onClick={() => setShowMenu(false)}
                >
                  <p className="under text-base font-medium">{menu.name}</p>
                </div>
              ))}
            </ul>
          </div>
          {/* Mobile Navigation Menu */}
          <ul
            className={`${
              showMenu ? "flex" : "hidden"
            } font-outfit absolute left-0 top-24 z-20 h-svh w-full flex-col gap-10 bg-[#444444] px-4 py-[61px] md:top-36 lg:hidden`}
          >
            {menu.map((menu) => (
              <div
                className="relative flex w-fit cursor-pointer items-center gap-2 text-white"
                key={menu.id}
                onClick={() => setShowMenu(false)}
              >
                <p className="under">{menu.name}</p>
              </div>
            ))}
            <button
              className="rounded-lg bg-orange-red px-4 py-[10px] text-white">
              Contact Us
            </button>
          </ul>
          <div
            className="flex shrink-0 cursor-pointer lg:hidden"
            onClick={() => setShowMenu(!showMenu)}
          >
            <div
              className="relative flex h-1 w-8 flex-col items-center justify-center">
              <span
                className={`block h-1 w-8 bg-white transition-transform ${
                  showMenu ? "translate-y-0 rotate-45" : "-translate-y-[5px]"
                }`}
              />
              <span
                className={`block h-1 w-8 bg-white transition-transform ${
                  showMenu ? "translate-y-0 -rotate-45" : "translate-y-[5px]"
                }`}
              />
            </div>
          </div>
          <button
            className="hidden rounded-lg bg-orange-red px-3 py-2 text-sm text-white lg:block">
            Contact Us
          </button>
        </nav>
        <div className="text-center mt-28 xl:mt-40">
          <ul className="flex min-h-full w-full flex-1 flex-col items-center justify-center gap-1.5 rounded-2xl px-7 py-3">
            <li className="relative flex cursor-pointer flex-col items-center overflow-visible">
              <div className="relative flex items-start">
                <TextRoll
                  center
                  className="text-4xl font-extrabold uppercase leading-[0.8] tracking-[-0.03em] transition-colors lg:text-6xl xl:text-8xl text-white"
                >
                  Create
                </TextRoll>
              </div>
            </li>
            <li className="relative flex cursor-pointer flex-col items-center overflow-visible">
              <div className="relative flex items-start">
                <TextRoll
                  center
                  className="text-4xl font-extrabold uppercase leading-[0.8] tracking-[-0.03em] transition-colors lg:text-6xl xl:text-8xl text-white"
                >
                  Innovate
                </TextRoll>
              </div>
            </li>
            <li className="relative flex cursor-pointer flex-col items-center overflow-visible">
              <div className="relative flex items-start">
                <TextRoll
                  center
                  className="text-4xl font-extrabold uppercase leading-[0.8] tracking-[-0.03em] transition-colors lg:text-6xl xl:text-8xl text-white"
                >
                  Connect
                </TextRoll>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
