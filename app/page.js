"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Shield, Lock, Server, Database, Zap, Terminal, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { personalInfo } from "./data/personal";
import { projects } from "./data/projects";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div className="relative min-h-screen">

      {/* Hero Section - Asymmetric Layout */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-5 gap-12 items-center">

            {/* Left Column - Text Content (60%) */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="space-y-8 lg:col-span-3"
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--matrix-green)]/30 bg-[var(--matrix-green)]/5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--matrix-green)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--matrix-green)]"></span>
                </span>
                <span className="text-xs font-medium text-[var(--matrix-green)]">Open to Work</span>
              </motion.div>

              <motion.div variants={fadeIn}>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6">
                  <span className="block mb-2">I'm</span>
                  <span className="block bg-gradient-to-r from-[var(--matrix-green)] via-[var(--cyber-blue)] to-[var(--terminal-amber)] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    Sambhav Mehra
                  </span>
                </h1>

                <div className="space-y-3 text-xl md:text-2xl text-foreground/70">
                  <p className="flex items-center gap-3">
                    <Shield className="text-[var(--matrix-green)]" size={24} />
                    Cybersecurity Enthusiast
                  </p>
                  <p className="flex items-center gap-3">
                    <Code2 className="text-[var(--cyber-blue)]" size={24} />
                   Ethical Hacker 
                  </p>
                </div>
              </motion.div>

              <motion.p variants={fadeIn} className="text-lg text-foreground/60 max-w-xl leading-relaxed">
                To begin my career in cybersecurity with a forward-thinking organization, utilizing my skills
                in ethical hacking and vulnerability assessment to learn, grow, and protect critical infrastructure
                from evolving threats.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 rounded-xl font-semibold overflow-hidden bg-gradient-to-r from-[var(--matrix-green)] to-[var(--cyber-blue)] hover:shadow-lg hover:shadow-[var(--matrix-green)]/20 transition-all"
                >
                  <span className="relative flex items-center gap-2 text-black">
                    Let's Connect
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link
                  href="/projects"
                  className="px-8 py-4 rounded-xl font-semibold border-2 border-white/20 text-foreground hover:bg-white/5 hover:border-[var(--matrix-green)]/50 transition-all inline-flex items-center gap-2"
                >
                  <Code2 size={20} />
                  View Work
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={fadeIn} className="flex items-center gap-4 pt-4">
                <a href={personalInfo.social.github.url} target="_blank" rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-white/10 hover:border-[var(--matrix-green)]/50 hover:bg-white/5 transition-all">
                  <Github size={20} />
                </a>
                <a href={personalInfo.social.linkedin.url} target="_blank" rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-white/10 hover:border-[var(--cyber-blue)]/50 hover:bg-white/5 transition-all">
                  <Linkedin size={20} />
                </a>
                <a href={`mailto:${personalInfo.email}`}
                  className="p-3 rounded-lg border border-white/10 hover:border-[var(--terminal-amber)]/50 hover:bg-white/5 transition-all">
                  <Mail size={20} />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Code Visualization (40%) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block lg:col-span-2"
            >
              <div className="relative w-full aspect-square">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--matrix-green)]/20 to-[var(--cyber-blue)]/20 rounded-3xl blur-3xl"></div>

                <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <div className="space-y-4">
                    {/* Code Block Simulation */}
                    <div className="font-mono text-sm space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[var(--matrix-green)]">const</span>
                        <span className="text-[var(--cyber-blue)]">developer</span>
                        <span className="text-foreground/60">=</span>
                        <span className="text-foreground/60">{'{'}</span>
                      </div>
                      <div className="pl-6 space-y-1">
                        <div><span className="text-[var(--terminal-amber)]">name:</span> <span className="text-green-400">"Sambhav Mehra"</span>,</div>
                        <div><span className="text-[var(--terminal-amber)]">role:</span> <span className="text-green-400">"Cybersecurity"</span>,</div>
                        <div><span className="text-[var(--terminal-amber)]">focus:</span> <span className="text-green-400">"Ethical Hacking"</span>,</div>
                        <div><span className="text-[var(--terminal-amber)]">passion:</span> <span className="text-green-400">"Security"</span></div>
                      </div>
                      <div className="text-foreground/60">{'}'}</div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                      <div className="text-center p-4 rounded-xl bg-white/5">
                        <div className="text-3xl font-bold text-[var(--matrix-green)]">3+</div>
                        <div className="text-sm text-foreground/60">Years Study</div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-white/5">
                        <div className="text-3xl font-bold text-[var(--cyber-blue)]">5+</div>
                        <div className="text-sm text-foreground/60">Projects</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What I Do Section - Bento Grid Layout */}
      <section className="relative py-32 px-6 lg:px-8 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--matrix-green)]"></div>
              <span className="text-[var(--matrix-green)] text-sm font-mono uppercase tracking-wider">Expertise</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--matrix-green)]"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
              <span className="text-foreground">What I </span>
              <span className="bg-gradient-to-r from-[var(--matrix-green)] via-[var(--cyber-blue)] to-[var(--terminal-amber)] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Specialize In
              </span>
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto text-center">
              Building secure, scalable solutions with cutting-edge technologies
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-6 gap-6">
            {/* Large Card - Secure Frontend */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="md:col-span-4 md:row-span-2 group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-[var(--matrix-green)]/50 transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--matrix-green)]/10 rounded-full blur-3xl group-hover:bg-[var(--matrix-green)]/20 transition-all"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--matrix-green)] to-[var(--cyber-blue)] p-[2px] mb-6">
                  <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                    <Shield size={32} className="text-[var(--matrix-green)]" />
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Ethical Hacking & Penetration Testing
                </h3>
                <p className="text-lg text-foreground/60 leading-relaxed mb-6">
                  Ethical Hackerwith expertise in vulnerability assessment, penetration testing,
                  and security auditing. Proficient in using industry-standard tools to identify and mitigate security threats.
                </p>

                <div className="flex flex-wrap gap-2">
                  {['Nmap', 'Metasploit', 'BurpSuite', 'Wireshark', 'OWASP Top 10', 'Linux'].map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Medium Card - Backend */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-[var(--cyber-blue)]/50 transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--cyber-blue)]/10 rounded-full blur-3xl group-hover:bg-[var(--cyber-blue)]/20 transition-all"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--cyber-blue)] to-[var(--terminal-amber)] p-[2px] mb-4">
                  <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                    <Lock size={28} className="text-[var(--cyber-blue)]" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Network Security
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  CCNA certified with strong knowledge of TCP/IP, DHCP, Firewalls, and network infrastructure security.
                </p>
              </div>
            </motion.div>

            {/* Medium Card - DevOps */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="md:col-span-2 group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-[var(--terminal-amber)]/50 transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--terminal-amber)]/10 rounded-full blur-3xl group-hover:bg-[var(--terminal-amber)]/20 transition-all"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--terminal-amber)] to-[var(--matrix-green)] p-[2px] mb-4">
                  <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                    <Server size={28} className="text-[var(--terminal-amber)]" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">
                  SIEM & Monitoring
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  Experience with Sentinel SIEM and KQL for threat detection and security monitoring.
                </p>
              </div>
            </motion.div>

            {/* Wide Card - Database */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.3 }}
              className="md:col-span-3 group relative p-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-[var(--matrix-green)]/50 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--matrix-green)] to-[var(--cyber-blue)] p-[2px] flex-shrink-0">
                  <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                    <Server size={24} className="text-[var(--matrix-green)]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Web Development</h3>
                  <p className="text-sm text-foreground/60">HTML, CSS, JavaScript, React, Flask</p>
                </div>
              </div>
            </motion.div>

            {/* Wide Card - Performance */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.4 }}
              className="md:col-span-3 group relative p-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-[var(--cyber-blue)]/50 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--cyber-blue)] to-[var(--terminal-amber)] p-[2px] flex-shrink-0">
                  <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                    <Database size={24} className="text-[var(--cyber-blue)]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Programming & Databases</h3>
                  <p className="text-sm text-foreground/60">Python, C++, C, SQL, KQL, Git & GitHub</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects - Card Grid */}
      <section className="relative py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex justify-between items-end mb-16"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
                Featured Work
              </h2>
              <p className="text-xl text-foreground/60">
                Projects that showcase security and innovation
              </p>
            </div>
            <Link href="/projects" className="hidden md:flex items-center gap-2 text-[var(--matrix-green)] hover:gap-3 transition-all">
              View All <ArrowRight size={20} />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <Link href="/projects" passHref key={project.id}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="group h-full relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-[var(--matrix-green)]/50 transition-all cursor-pointer block"
              >
                {/* Image */}
                {project.image && (
                  <div className="relative h-48 overflow-hidden bg-black/50">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-[var(--matrix-green)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags?.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-[var(--matrix-green)] hover:gap-3 transition-all"
                      >
                        Live Demo <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
