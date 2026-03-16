'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Shield } from 'lucide-react';
import { projectCard, projectCardHover, cardFadeUp, viewportConfig } from '../utils/animations';

export default function ProjectCard({ project, index = 0, showDetails = false, variant = 'default' }) {

  if (variant === 'compact') {
    const cyberColors = ['var(--matrix-green)', 'var(--cyber-blue)', 'var(--terminal-amber)', 'var(--neon-purple)', 'var(--neon-red)'];
    const cyberColor = cyberColors[index % cyberColors.length];

    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={cardFadeUp}
        transition={{ delay: index * 0.1 }}
        whileHover={projectCardHover}
        className="group relative terminal-window overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col h-full"
      >
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="flex gap-2">
            <span className="terminal-dot red"></span>
            <span className="terminal-dot amber"></span>
            <span className="terminal-dot green"></span>
          </div>
          <span className="text-xs terminal-text font-mono ml-2">project@{project.id}:~$</span>
        </div>

        <div className="relative h-40 overflow-hidden flex-shrink-0 bg-black/50">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-[var(--matrix-green)]/20 text-6xl font-bold font-mono">
                {project.title.charAt(0)}
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold font-mono text-[var(--matrix-green)] mb-1.5 group-hover:text-[var(--cyber-blue)] transition-colors">
            &gt; {project.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3 mb-3 flex-grow font-mono" dangerouslySetInnerHTML={{ __html: project.description }} />

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tags?.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-[var(--matrix-green)]/10 text-[var(--matrix-green)] rounded-md text-xs font-mono border border-[var(--matrix-green)]/30"
              >
                {tech}
              </span>
            ))}
            {project.tags?.length > 3 && (
              <span className="px-2 py-1 text-muted-foreground text-xs font-mono">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  // Featured/default variant
  const cyberColors = ['var(--matrix-green)', 'var(--cyber-blue)', 'var(--terminal-amber)', 'var(--neon-purple)', 'var(--neon-red)'];
  const cyberColor = cyberColors[index % cyberColors.length];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={projectCard}
      transition={{ delay: index * 0.1 }}
      className="group relative terminal-window overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col h-full"
    >
      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="flex gap-2">
          <span className="terminal-dot red"></span>
          <span className="terminal-dot amber"></span>
          <span className="terminal-dot green"></span>
        </div>
        <span className="text-xs terminal-text font-mono ml-2">project@{project.id}:~$ cat README.md</span>
      </div>

      {/* Image */}
      <div className="relative h-48 overflow-hidden flex-shrink-0 bg-black/50">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-[var(--matrix-green)]/20 text-8xl font-bold font-mono">
              {project.title.charAt(0)}
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

        {project.featured && (
          <div
            className="absolute top-4 right-4 text-black px-3 py-1 rounded-md text-xs font-mono font-bold border flex items-center gap-1"
            style={{
              backgroundColor: cyberColor,
              borderColor: cyberColor,
              boxShadow: `0 0 10px ${cyberColor}`
            }}
          >
            <Shield size={12} />
            FEATURED
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold font-mono text-[var(--matrix-green)] mb-2 group-hover:text-[var(--cyber-blue)] transition-colors">
          <span className="text-[var(--matrix-green)]">&gt;</span> {project.title}
        </h3>
        <p className="text-muted-foreground mb-3 leading-relaxed line-clamp-3 flex-grow font-mono text-sm" dangerouslySetInnerHTML={{ __html: project.description }} />

        {showDetails && project.details && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold font-mono text-[var(--matrix-green)] mb-2">$ ls features/</h4>
            <ul className="space-y-1">
              {project.details.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2 font-mono">
                  <span className="text-[var(--matrix-green)] mt-1">&gt;</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags?.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-[var(--matrix-green)]/10 text-[var(--matrix-green)] rounded-md text-sm font-mono hover:bg-[var(--matrix-green)]/20 transition-colors border border-[var(--matrix-green)]/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-transparent border border-[var(--matrix-green)]/30 text-[var(--matrix-green)] rounded-md text-sm font-mono hover:bg-[var(--matrix-green)]/10 transition-colors"
            >
              <Github size={16} />
              code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-black rounded-md text-sm font-mono font-bold hover:opacity-90 transition-opacity"
              style={{
                backgroundColor: cyberColor,
                boxShadow: `0 0 15px ${cyberColor}40`
              }}
            >
              <ExternalLink size={16} />
              demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
