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
                    I am an AI Engineer currently working at <span className="text-foreground font-medium">DeepPlants</span>,
                    with a specific focus on <span className="text-foreground font-medium">Generative AI</span> and
                    <span className="text-foreground font-medium"> Large Language Models (LLMs)</span>.
                    My professional approach covers the entire lifecycle of AI development: from the research-heavy side of
                    Fine-Tuning models to the architectural challenge of building autonomous Agentic Systems.
                </p>
                <p>
                    I hold a Master’s Degree in <span className="text-foreground font-medium">Artificial Intelligence and Robotics</span>,
                    with a thesis titled &quot;Privacy-oriented Object Detection: Detecting People and Actions in Low-Resolution Images&quot;.
                    While my academic roots are in Computer Vision and YOLOv8, I have successfully transitioned my engineering mindset to NLP,
                    applying rigorous testing to model reasoning.
                </p>
                <p>
                    My technical expertise centers on <span className="text-foreground font-medium">Python</span>,
                    <span className="text-foreground font-medium"> PyTorch</span>, and <span className="text-foreground font-medium">Hugging Face</span>.
                    I specialize in optimizing models using LoRA/PEFT techniques and orchestrating complex, tool-using agents with
                    LangGraph and LangChain. I excel in creating evaluation pipelines to measure model reliability and ensure robust performance.
                </p>
                <p>
                    Beyond professional work, I am interested in IoT and smart home technologies, exploring how AI can interact with the physical world.
                </p>
            </motion.div>
        </section>
    );
}
