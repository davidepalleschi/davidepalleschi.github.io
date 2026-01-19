"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Projects() {
    const sortedProjects = [...projects].sort((a, b) =>
        new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    );

    return (
        <section id="projects" className="container py-12 md:py-24 lg:py-32 max-w-7xl px-4 md:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    A collection of my work in AI, IoT, and Full Stack Development.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {sortedProjects.map((project, index) => (
                    <motion.div
                        key={project.slug}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <Link href={`/projects/${project.slug}`} className="block relative aspect-video overflow-hidden group-hover:shadow-md transition-all cursor-pointer">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                />
                                <div className="absolute top-3 left-3">
                                    <Badge variant="secondary" className="bg-black/70 hover:bg-black/80 text-white backdrop-blur-md border-0">{project.category}</Badge>
                                </div>
                            </Link>
                            <CardHeader className="p-4 pb-2">
                                <div className="flex justify-between items-start gap-2">
                                    <CardTitle className="line-clamp-1 text-lg mt-2">{project.title}</CardTitle>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                                    <Icons.calendar className="h-3 w-3" />
                                    <span>{project.startDate} - {project.endDate}</span>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col justify-between p-4 pt-0">
                                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <Badge key={tag} variant="outline" className="text-[10px] px-2 py-0 h-5">
                                            {tag}
                                        </Badge>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <Badge variant="outline" className="text-[10px] px-2 py-0 h-5">+{project.tags.length - 3}</Badge>
                                    )}
                                </div>

                                <div className="flex gap-2 w-full mt-auto">
                                    <Button variant="default" className="w-full text-xs h-8" asChild>
                                        <Link href={`/projects/${project.slug}`}>View Details</Link>
                                    </Button>
                                    {project.links?.demo && (
                                        <Button variant="ghost" size="icon" asChild title="View Demo">
                                            <Link href={project.links.demo} target="_blank">
                                                <Icons.externalLink className="h-4 w-4" />
                                            </Link>
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
