"use client";
import { motion } from "framer-motion";
import AudienceCard from "./audience-card";
import twoProfile from "@/public/images/twoProfile.svg";

export default function Audience() {
    const text = "READY TO KICK OFF A PROJECT?";
    const words = text.split(" ");

    const fadeInVariants = {
        initial: {
            opacity: 0,
            y: 50
        },
        animate: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 * index,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    };

    return (
        <section className="bg-orange-red px-4 py-40 md:py-56">
            <div className="container mx-auto">
                <div className="max-w-[818px] mx-auto !leading-[120px] relative">
                    <h1 className="text-5xl md:text-8xl xl:text-[120px] font-black text-center text-white uppercase tracking-wider">
                        {words.map((word, i) => (
                            <span key={i} className="inline-block overflow-hidden pb-1">
                                <motion.span
                                    variants={fadeInVariants}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    custom={i}
                                    className="mr-2 xl:mr-4 inline-block"
                                >
                                    {word}
                                </motion.span>
                            </span>
                        ))}
                    </h1>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                    >
                        <AudienceCard
                            className="w-fit absolute md:-bottom-6  -right-2 xl:-right-32"
                            text="Get in Touch -> "
                            icon={twoProfile} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}