"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "E-commerce Platform",
    title: "FINANCE UI/UX DASHBOARD",
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    ctaText: "View Project",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          A comprehensive grocery shopping application that revolutionized the user experience 
          with intuitive navigation and seamless checkout processes. The app features real-time 
          inventory tracking, personalized recommendations, and a streamlined interface that 
          increased user engagement by 75%. <br /> <br /> Built with modern technologies 
          including React Native, Node.js, and MongoDB, the application serves thousands of 
          users daily and has become a leading platform in the grocery delivery space.
        </p>
      );
    },
  },
  {
    description: "UI/UX PRODUCT DESIGN MOBILE APP",
    title: "Groceria App",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    ctaText: "View Project",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          CreatiFlow designed a smooth and intuitive grocery shopping experience for Groceria — including real-time cart syncing, smart search, and one-tap reorder. The clean UI and frictionless checkout flow led to significant user growth and increased daily sessions.
        </p>
      );
    },
  },
  {
    description: " ILLUSTRATIONS BRANDING ",
    title: "FitTrack Wellness",
    src: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=300&fit=crop",
    ctaText: "View Project",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          A comprehensive fitness tracking application that combines workout planning, nutrition 
          monitoring, and social features to create an engaging wellness ecosystem. The app 
          features AI-powered workout recommendations, progress tracking, and community challenges. 
          <br /> <br /> Developed for both iOS and Android platforms using React Native and 
          Firebase, the application has garnered over 100,000 downloads and maintains a 4.8-star 
          rating across app stores.
        </p>
      );
    },
  },
  {
    description: "E-COMMERCE PRODUCT STRATEGY",
    title: "EcoLiving Campaign",
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=300&fit=crop",
    ctaText: "View Project",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          A comprehensive digital marketing campaign for an eco-friendly lifestyle brand that 
          increased online engagement by 300% and drove significant sales growth. The campaign 
          included social media strategy, content creation, influencer partnerships, and 
          targeted advertising. <br /> <br /> Through strategic storytelling and authentic 
          brand messaging, we helped the client establish themselves as a thought leader in 
          sustainable living while achieving a 150% ROI on marketing spend.
        </p>
      );
    },
  },
];

export default function Project() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <section className="bg-orange-red pb-11 pt-10 xl:pb-[92px] xl:pt-20">
      <div className="container mx-auto px-4 lg:px-10">
        <h1 className="text-5xl font-medium text-white xl:text-9xl mb-10">
          PROJECT'S
        </h1>
        
        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-md h-full w-full z-10"
            />
          )}
        </AnimatePresence>
        
        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0 grid place-items-center z-[100]">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl sm:rounded-3xl overflow-hidden"
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <img
                    width={200}
                    height={200}
                    src={active.src}
                    alt={active.title}
                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                  />
                </motion.div>

                <div className="bg-white/5 backdrop-blur-sm">
                  <div className="flex justify-between items-start p-4">
                    <div className="">
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-white"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-white/80"
                      >
                        {active.description}
                      </motion.p>
                    </div>

                    <motion.a
                      layoutId={`button-${active.title}-${id}`}
                      href={active.ctaLink}
                      target="_blank"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-300"
                    >
                      {active.ctaText}
                    </motion.a>
                  </div>
                  <div className="pt-4 relative px-4">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-white/90 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                    >
                      {typeof active.content === "function"
                        ? active.content()
                        : active.content}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
        
        <ul className="max-w-4xl mx-auto w-full gap-4">
          {cards.map((card, index) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-white/10 rounded-xl cursor-pointer mb-4"
            >
              <div className="flex gap-4 flex-col md:flex-row ">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <img
                    width={100}
                    height={100}
                    src={card.src}
                    alt={card.title}
                    className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                  />
                </motion.div>
                <div className="">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium text-white text-center md:text-left"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-white/80 text-center md:text-left"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
              <motion.button
                layoutId={`button-${card.title}-${id}`}
                className="px-4 py-2 text-sm rounded-full font-bold bg-white/20 hover:bg-white hover:text-black text-white mt-4 md:mt-0 transition-colors"
              >
                {card.ctaText}
              </motion.button>
            </motion.div>
          ))}
        </ul>
      </div>
    </section>
  );
}
