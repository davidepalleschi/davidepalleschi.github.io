"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { HeroBackground } from "@/components/hero-background";

export function Hero() {
    return (
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden py-12 text-center md:py-24 lg:py-32 w-full">

            {/* WebGL Background */}
            <HeroBackground />

            {/* Fade Mask at Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

            <div className="container relative px-4 md:px-6 flex flex-col items-center gap-6 z-20 pointer-events-none">
                {/* Content - Pointer events auto to allow clicking buttons */}
                <div className="pointer-events-auto flex flex-col items-center gap-6">

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-foreground"
                    >
                        Davide Palleschi
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="max-w-[700px] text-lg text-muted-foreground md:text-xl font-light"
                    >
                        Applied AI Engineer.<br />
                        Building intelligent systems that bridge the gap between research and reality.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-col gap-4 sm:flex-row mt-8"
                    >
                        <Link href="#projects">
                            <Button size="lg" className="gap-2">
                                View Projects <Icons.code className="h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="#contact">
                            <Button variant="outline" size="lg">
                                Contact Me
                            </Button>
                        </Link>
                        <Link href="/assets/docs/CV_Palleschi.pdf" target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary" size="lg" className="gap-2">
                                Download CV <Icons.download className="h-4 w-4" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
