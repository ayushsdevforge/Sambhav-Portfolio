"use client";

import { motion } from "framer-motion";
import { personalInfo } from "../data/personal";
import { MapPin, Briefcase, Code2, Heart } from "lucide-react";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function About() {
    return (
        <div className="relative min-h-screen bg-background pt-32 pb-20 px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">

                {/* Unique Header - Underline Style */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="mb-16"
                >
                    <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-2 inline-block">
                        About Me
                    </h1>
                    <div className="h-1 w-32 bg-gradient-to-r from-[var(--matrix-green)] via-[var(--cyber-blue)] to-transparent mb-6"></div>
                    <p className="text-xl text-foreground/60">
                        Building secure digital experiences with passion and precision
                    </p>
                </motion.div>

                {/* Bio Section */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ delay: 0.2 }}
                    className="space-y-6 mb-16"
                >
                    {personalInfo.bio.map((paragraph, index) => (
                        <p key={index} className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </motion.div>

                {/* Info Cards */}
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        transition={{ delay: 0.3 }}
                        className="p-8 rounded-2xl border border-white/10 bg-white/5"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 rounded-xl bg-[var(--matrix-green)]/10 border border-[var(--matrix-green)]/30">
                                <Briefcase className="text-[var(--matrix-green)]" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">Currently</h3>
                        </div>
                        <p className="text-foreground/70">
                            {personalInfo.title} at <span className="text-[var(--matrix-green)] font-semibold">{personalInfo.workingAt}</span>
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        transition={{ delay: 0.4 }}
                        className="p-8 rounded-2xl border border-white/10 bg-white/5"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 rounded-xl bg-[var(--cyber-blue)]/10 border border-[var(--cyber-blue)]/30">
                                <MapPin className="text-[var(--cyber-blue)]" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">Location</h3>
                        </div>
                        <p className="text-foreground/70">
                            {personalInfo.location.city}, {personalInfo.location.state}, {personalInfo.location.country}
                        </p>
                    </motion.div>
                </div>

                {/* Skills & Interests */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ delay: 0.5 }}
                    className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-xl bg-[var(--terminal-amber)]/10 border border-[var(--terminal-amber)]/30">
                            <Heart className="text-[var(--terminal-amber)]" size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">What Drives Me</h3>
                    </div>
                    <p className="text-lg text-foreground/70 leading-relaxed">
                        {personalInfo.summary}
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
