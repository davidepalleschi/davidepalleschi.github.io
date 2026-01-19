"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";

export function Contact() {
    return (
        <section id="contact" className="container py-12 md:py-24 lg:py-32 max-w-screen-xl px-4 md:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                        Interested in collaborating on AI projects or have a question?
                        Feel free to reach out.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-4 min-[400px]:flex-row pt-8"
                >
                    <Button size="lg" className="px-8" asChild>
                        <Link href="mailto:davidepalleschi96@gmail.com">
                            <Icons.mail className="mr-2 h-4 w-4" /> Email Me
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" className="px-8" asChild>
                        <Link href="https://linkedin.com/in/davide-palleschi" target="_blank">
                            <Icons.linkedIn className="mr-2 h-4 w-4" /> LinkedIn
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
