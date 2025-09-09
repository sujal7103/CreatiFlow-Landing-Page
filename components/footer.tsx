"use client";
import { format } from "date-fns";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="bg-black py-10 xl:py-20">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="flex flex-wrap justify-between gap-10 text-white">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                width={40}
                height={40}
                className="h-10 w-10"
                alt="CreatiFlow Logo"
              />
              <h2 className="text-2xl font-bold text-white">CreatiFlow</h2>
            </div>
            <h1 className="max-w-[511px] text-xl font-light md:text-2xl">
            Let's collaborate on something bold, strategic, and unforgettable. Share your ideas — we'll turn them into a digital masterpiece <span className="underline">Book now</span>
            </h1>
          </div>
          <div className="flex gap-6">
            <ul className="flex flex-col gap-3 xl:w-[140px]">
              <h1 className="cursor-pointer">MENU</h1>
              <div className="relative w-fit cursor-pointer">
                <li className="text-gainsboro under">Home</li>
              </div>
              <div className="relative w-fit cursor-pointer">
                <li className="text-gainsboro under">About</li>
              </div>
            </ul>
            <ul className="flex flex-col gap-3 xl:w-[140px]">
              <h1 className="cursor-pointer">SOCIALS</h1>
              <div className="relative w-fit cursor-pointer flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gainsboro">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <li className="text-gainsboro under cursor-pointer">Mail</li>
              </div>
              <div className="relative w-fit cursor-pointer flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gainsboro">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
                <li className="text-gainsboro under">Twitter</li>
              </div>
            </ul>
          </div>
        </div>
        <article className="mt-10 border-b border-t border-[#989898] xl:mt-[100px]">
          <h1 className="py-10 text-center text-5xl font-normal text-white md:text-9xl xl:py-20 xl:text-[252px]">
          CreatiFlow
          </h1>
        </article>
        <section className="mt-8 flex items-center justify-between gap-6">
          <div>
            <small className="text-base text-white">Terms</small>
          </div>
          
          <small className="text-base text-white text-center">
            &copy; {format(new Date(), "yyy")} CreatiFlow All rights reserved
          </small>

          <div>
            <small className="text-base text-white">Privacy</small>
          </div>
        </section>
      </div>
    </section>
  );
}
