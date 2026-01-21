"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Icons } from "@/components/icons";

const skillCategories = [
    {
        category: "AI & ML",
        icon: "brain",
        items: ["Python", "PyTorch", "Hugging Face", "LLMs", "RAG", "LangChain", "Fine-Tuning", "LoRA/PEFT", "YOLO", "Computer Vision"],
        color: "group-hover:text-purple-500",
        border: "hover:border-purple-500/50",
        bg: "hover:bg-purple-500/5",
        badge: "group-hover:border-purple-500/20 group-hover:bg-purple-500/10 group-hover:text-purple-500"
    },
    {
        category: "Full Stack",
        icon: "code",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Framer Motion"],
        color: "group-hover:text-blue-500",
        border: "hover:border-blue-500/50",
        bg: "hover:bg-blue-500/5",
        badge: "group-hover:border-blue-500/20 group-hover:bg-blue-500/10 group-hover:text-blue-500"
    },
    {
        category: "DevOps & Tools",
        icon: "terminal",
        items: ["Docker", "Git", "Linux", "AWS", "CI/CD", "VS Code"],
        color: "group-hover:text-orange-500",
        border: "hover:border-orange-500/50",
        bg: "hover:bg-orange-500/5",
        badge: "group-hover:border-orange-500/20 group-hover:bg-orange-500/10 group-hover:text-orange-500"
    },
    {
        category: "Embedded & IoT",
        icon: "cpu",
        items: ["C++", "Arduino", "ESP32", "Home Assistant", "MQTT", "PCB Design"],
        color: "group-hover:text-emerald-500",
        border: "hover:border-emerald-500/50",
        bg: "hover:bg-emerald-500/5",
        badge: "group-hover:border-emerald-500/20 group-hover:bg-emerald-500/10 group-hover:text-emerald-500"
    }
] as const;

export function Skills() {
    return (
        <section id="skills" className="container py-12 md:py-24 lg:py-32 max-w-screen-xl px-4 md:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Technical Arsenal</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                    A comprehensive toolkit for building intelligent, scalable systems.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillCategories.map((group, index) => {
                    // Dynamic icon lookup
                    const IconComponent = Icons[group.icon as keyof typeof Icons];

                    return (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <Card className={`group h-full border border-primary/10 bg-primary/5 backdrop-blur-sm transition-all duration-300 rounded-2xl overflow-hidden ${group.border} ${group.bg}`}>
                                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                    <div className={`p-2 rounded-lg bg-primary/10 text-primary transition-colors duration-300 ${group.color.replace('text', 'bg').replace('group-hover:', 'group-hover:')}/10`}>
                                        {IconComponent && <IconComponent className={`h-6 w-6 transition-colors duration-300 ${group.color}`} />}
                                    </div>
                                    <CardTitle className={`text-xl font-bold transition-colors duration-300 ${group.color}`}>{group.category}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {group.items.map((skill) => (
                                            <Badge
                                                key={skill}
                                                variant="secondary"
                                                className={`px-3 py-1 text-sm bg-background/50 transition-colors duration-300 border border-primary/5 ${group.badge}`}
                                            >
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
