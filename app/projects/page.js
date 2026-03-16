"use client";

import { motion } from "framer-motion";
import { projects } from "../data/projects";
import Image from "next/image";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Projects() {
    return (
        <div className="relative min-h-screen bg-background pt-32 pb-20 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Unique Header - Split Style */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="mb-20"
                >
                    <div className="flex items-center gap-6 mb-4">
                        <div className="h-1 w-16 bg-gradient-to-r from-[var(--matrix-green)] to-transparent"></div>
                        <span className="text-[var(--matrix-green)] text-xl font-mono">02.</span>
                    </div>
                    <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-4">
                        Featured Work
                    </h1>
                    <p className="text-xl text-foreground/60 max-w-3xl">
                        A showcase of projects highlighting security, innovation, and technical excellence
                    </p>
                </motion.div>

                {/* Projects - Alternating Layout */}
                <div className="space-y-24">
                    {projects.map((project, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={project.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                                transition={{ delay: 0.2 }}
                                className={`grid lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
                            >
                                {/* Image */}
                                <div className={`relative group ${!isEven ? 'lg:col-start-2' : ''}`}>
                                    {project.image ? (
                                        <div className="relative h-80 rounded-2xl overflow-hidden border border-white/10">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                                        </div>
                                    ) : (
                                        <div className="h-80 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                                            <span className="text-foreground/40">No preview available</span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                                    <div className="space-y-4">
                                        {project.featured && (
                                            <span className="inline-block px-3 py-1 rounded-full bg-[var(--matrix-green)]/10 border border-[var(--matrix-green)]/30 text-[var(--matrix-green)] text-xs font-semibold">
                                                FEATURED PROJECT
                                            </span>
                                        )}

                                        <h2 className="text-4xl font-bold text-foreground group-hover:text-[var(--matrix-green)] transition-colors">
                                            {project.title}
                                        </h2>

                                        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                            <p className="text-foreground/70 leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Details */}
                                        {project.details && (
                                            <ul className="space-y-2">
                                                {project.details.map((detail, idx) => (
                                                    <li key={idx} className="text-sm text-foreground/60 flex items-start gap-2">
                                                        <ArrowUpRight size={16} className="text-[var(--matrix-green)] mt-0.5 flex-shrink-0" />
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags?.map((tag) => (
                                                <span key={tag} className="px-3 py-1 rounded-md bg-white/5 text-xs text-foreground/70">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        <div className="flex gap-4 pt-2">
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-foreground/70 hover:text-[var(--matrix-green)] transition-colors"
                                                >
                                                    <Github size={20} />
                                                    <span className="text-sm font-medium">View Code</span>
                                                </a>
                                            )}
                                            {project.demo && (
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-foreground/70 hover:text-[var(--cyber-blue)] transition-colors"
                                                >
                                                    <ExternalLink size={20} />
                                                    <span className="text-sm font-medium">Live Demo</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
