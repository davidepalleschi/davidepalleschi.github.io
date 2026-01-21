import fs from "fs";
import path from "path";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

// For static export
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    // Read content from markdown file
    const contentPath = path.join(process.cwd(), "src/content/projects", `${slug}.md`);
    let content = "";

    try {
        content = fs.readFileSync(contentPath, "utf8");
    } catch (e) {
        console.error(`Error reading markdown for ${slug}:`, e);
        content = "Content not found.";
    }

    return (
        <main className="min-h-screen py-24 bg-background">
            <div className="container px-4 md:px-8 max-w-screen-lg mx-auto">
                <Button variant="ghost" className="mb-8 group" asChild>
                    <Link href="/#projects">
                        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Projects
                    </Link>
                </Button>

                <div className="space-y-8">
                    {/* Header */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 flex-wrap">
                            <Badge variant="secondary" className="text-sm">{project.category}</Badge>
                            <span className="text-muted-foreground text-sm hidden sm:inline">•</span>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Icons.calendar className="h-3 w-3" />
                                <span>{project.startDate} - {project.endDate}</span>
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{project.title}</h1>
                        <p className="text-xl text-muted-foreground">{project.description}</p>
                        <div className="flex gap-2 flex-wrap">
                            {project.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Image or Video */}
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl border bg-muted">
                        {project.video ? (
                            <video
                                src={project.video}
                                className="w-full h-full object-cover"
                                controls
                                title={project.title}
                            />
                        ) : (
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        )}
                    </div>

                    {/* Links */}
                    {project.links && (
                        <div className="flex gap-4">
                            {project.links.demo && (
                                <Button asChild>
                                    <Link href={project.links.demo} target="_blank">
                                        <Icons.externalLink className="mr-2 h-4 w-4" />
                                        Live Demo
                                    </Link>
                                </Button>
                            )}
                            {project.links.repo && (
                                <Button variant="outline" asChild>
                                    <Link href={project.links.repo} target="_blank">
                                        <Icons.gitHub className="mr-2 h-4 w-4" />
                                        View Code
                                    </Link>
                                </Button>
                            )}
                        </div>
                    )}

                    {/* Content */}
                    <article className="prose prose-zinc dark:prose-invert max-w-none text-foreground prose-headings:text-foreground prose-strong:text-foreground prose-a:text-primary">
                        <ReactMarkdown
                            rehypePlugins={[rehypeRaw]}
                            components={{
                                img: ({ ...props }) => (
                                    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
                                    <img
                                        {...props}
                                        className={`rounded-xl w-full h-auto block ${props.className || ''}`}
                                    />
                                )
                            }}
                        >
                            {content}
                        </ReactMarkdown>
                    </article>
                </div>
            </div>
        </main>
    );
}
