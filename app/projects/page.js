"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { projects } from "../data/projects";
import Image from "next/image";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Projects() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div ref={containerRef} className="relative min-h-screen bg-background pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto relative">

                {/* Animated Road Line (No Predefined Track) */}
                <motion.div 
                    className="absolute left-1/2 top-[150px] bottom-0 w-1.5 -translate-x-1/2 bg-gradient-to-b from-[var(--matrix-green)] via-[var(--cyber-blue)] to-[var(--matrix-green)] hidden lg:block rounded-full origin-top z-0 shadow-[0_0_15px_var(--matrix-green)]"
                    style={{ scaleY }}
                />

                {/* Unique Header - Split Style */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="mb-32 relative z-10 text-center lg:text-left"
                >
                    <div className="flex justify-center flex-col lg:flex-row lg:justify-start items-center gap-6 mb-4">
                        <div className="hidden lg:block h-1 w-16 bg-gradient-to-r from-[var(--matrix-green)] to-transparent"></div>
                        <span className="text-[var(--matrix-green)] text-xl font-mono tracking-widest">02.</span>
                    </div>
                    <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
                        Featured Work
                    </h1>
                    <p className="text-xl text-foreground/60 max-w-3xl mx-auto lg:mx-0">
                        A showcase of projects highlighting security, innovation, and technical excellence.
                    </p>
                </motion.div>

                {/* Projects - Alternating Layout with Nodes */}
                <div className="space-y-40 relative z-10">
                    {projects.map((project, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={project.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeIn}
                                className={`relative grid lg:grid-cols-2 gap-16 lg:gap-24 items-center group ${!isEven ? 'lg:grid-flow-dense' : ''}`}
                            >
                                {/* Road Node (Dot) */}
                                <div className="absolute left-1/2 top-1/2 w-6 h-6 -translate-y-1/2 -translate-x-1/2 rounded-full border-4 border-background bg-[var(--matrix-green)] hidden lg:block z-20 shadow-[0_0_15px_var(--matrix-green)] group-hover:scale-150 transition-transform duration-500"></div>

                                {/* Connecting Line (Horizontal) */}
                                <div className={`absolute top-1/2 h-1 bg-[var(--matrix-green)]/30 hidden lg:block z-10 transition-all duration-700 w-0 group-hover:w-24 ${isEven ? 'left-1/2 origin-left' : 'right-1/2 origin-right'}`}></div>

                                {/* Image */}
                                <div className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}>
                                    {project.image ? (
                                        <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group-hover:shadow-[var(--matrix-green)]/20 transition-all duration-500">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
                                        </div>
                                    ) : (
                                        <div className="h-[400px] rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                                            <span className="text-foreground/40 font-mono">No preview available</span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className={!isEven ? 'lg:col-start-1 lg:row-start-1 lg:text-right' : ''}>
                                    <div className={`space-y-6 ${!isEven ? 'flex flex-col items-end' : ''}`}>
                                        {project.featured && (
                                            <motion.span 
                                                whileHover={{ scale: 1.05 }}
                                                className="inline-block px-4 py-1.5 rounded-full bg-[var(--matrix-green)]/10 border border-[var(--matrix-green)]/30 text-[var(--matrix-green)] text-xs font-bold tracking-widest shadow-[0_0_10px_rgba(0,255,0,0.2)]"
                                            >
                                                FEATURED PROJECT
                                            </motion.span>
                                        )}

                                        <h2 className="text-4xl lg:text-5xl font-bold text-foreground group-hover:text-[var(--matrix-green)] transition-colors duration-300">
                                            {project.title}
                                        </h2>

                                        <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm relative z-20 group-hover:bg-white/10 transition-colors">
                                            <p className="text-foreground/80 leading-relaxed text-lg">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Details */}
                                        {project.details && (
                                            <ul className="space-y-3">
                                                {project.details.map((detail, idx) => (
                                                    <li key={idx} className={`text-sm text-foreground/70 flex items-start gap-3 ${!isEven ? 'flex-row-reverse text-right' : ''}`}>
                                                        <ArrowUpRight size={18} className="text-[var(--matrix-green)] mt-0.5 flex-shrink-0" />
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {/* Tags */}
                                        <div className={`flex flex-wrap gap-2 ${!isEven ? 'justify-end' : ''}`}>
                                            {project.tags?.map((tag) => (
                                                <span key={tag} className="px-3 py-1.5 rounded-lg bg-[var(--cyber-blue)]/10 border border-[var(--cyber-blue)]/20 text-xs text-[var(--cyber-blue)] font-mono hover:bg-[var(--cyber-blue)]/20 transition-colors">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        <div className={`flex gap-6 pt-4 ${!isEven ? 'justify-end' : ''}`}>
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group/link inline-flex items-center gap-2 text-foreground/70 hover:text-[var(--matrix-green)] transition-all"
                                                >
                                                    <Github size={22} className="group-hover/link:scale-110 transition-transform" />
                                                    <span className="text-sm font-semibold tracking-wide">View Code</span>
                                                </a>
                                            )}
                                            {project.demo && (
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group/link inline-flex items-center gap-2 text-foreground/70 hover:text-[var(--cyber-blue)] transition-all"
                                                >
                                                    <ExternalLink size={22} className="group-hover/link:scale-110 transition-transform" />
                                                    <span className="text-sm font-semibold tracking-wide">Live Demo</span>
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
