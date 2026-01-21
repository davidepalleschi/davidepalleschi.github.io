"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="container py-12 md:py-24 lg:py-32 max-w-screen-2xl px-4 md:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mx-auto flex max-w-7xl flex-col items-center space-y-4 text-center"
            >
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
                    About Me
                </h2>
                {/* <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    AI Engineer & Full Stack Developer with a passion for building intelligent systems.
                </p> */}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mx-auto mt-16 max-w-7xl text-lg text-muted-foreground leading-relaxed space-y-6"
            >
                <p>
                    I am an <span className="text-foreground font-medium">Applied AI Engineer</span> driven by the challenge of making intelligent systems reliable, scalable, and autonomous.
                    My work sits at the intersection of <span className="text-foreground font-medium">Generative AI</span> and <span className="text-foreground font-medium">Real-World Application</span>,
                    where I focus on building tools that don't just "think" but "act" to solve complex problems.
                </p>
                <p>
                    What really excites me is the potential of <span className="text-foreground font-medium">Multi-Agent Systems</span> and <span className="text-foreground font-medium">IoT</span>.
                    I love designing architectures where AI agents can autonomously reason, plan, and interact with the physical world—whether it's optimizing flows in a smart home or orchestrating complex data pipelines.
                    I believe the future of AI isn't just in better models, but in how we integrate them into the fabric of our daily lives.
                </p>
                <p>
                    My projects reflect this philosophy: from researching <span className="text-foreground font-medium">Privacy-Oriented Object Detection</span> to ensure surveillance respects personal identity,
                    to engineering robust <span className="text-foreground font-medium">RAG</span> systems that turn chaotic data into actionable insights.
                    I bring a rigorous engineering mindset to every challenge, ensuring that even the most experimental AI concepts are grounded in solid, production-ready code.
                </p>
            </motion.div>
        </section>
    );
}
