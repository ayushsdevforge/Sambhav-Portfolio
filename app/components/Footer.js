import Link from 'next/link';
import { Github, Linkedin, Mail, Terminal, Shield } from 'lucide-react';
import { personalInfo } from '../data/personal';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const uptime = Math.floor((Date.now() - new Date('2024-01-01').getTime()) / 1000 / 60 / 60 / 24);

  return (
    <footer className="bg-card border-t border-[var(--matrix-green)]/20 relative overflow-hidden">
      {/* Scan lines effect */}
      <div className="absolute inset-0 scan-lines opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Terminal Window Style */}
        <div className="terminal-window mb-8">
          <div className="terminal-header">
            <div className="flex gap-2">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot amber"></span>
              <span className="terminal-dot green"></span>
            </div>
            <span className="text-xs terminal-text font-mono ml-2">footer@portfolio:~$ cat system_info.txt</span>
          </div>

          <div className="p-6">
            <div className="grid md:grid-cols-4 gap-8">
              {/* System Info */}
              <div className="md:col-span-2">
                <div className="mb-4">
                  <span className="text-[var(--matrix-green)] font-mono text-sm">$</span>
                  <span className="text-foreground font-mono text-xl font-bold ml-2">
                    {personalInfo.name.split(' ')[0]}
                    <span className="text-[var(--cyber-blue)]">{personalInfo.name.split(' ')[1]}</span>
                  </span>
                </div>
                <p className="text-muted-foreground mb-4 font-mono text-sm">
                  <span className="text-[var(--matrix-green)]">&gt;</span> {personalInfo.title} | Security-focused developer building secure, scalable web applications.
                </p>

                {/* System Status */}
                <div className="space-y-2 mb-4 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <Shield size={14} className="text-[var(--matrix-green)]" />
                    <span className="text-muted-foreground">STATUS:</span>
                    <span className="text-[var(--matrix-green)]">ONLINE</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Terminal size={14} className="text-[var(--cyber-blue)]" />
                    <span className="text-muted-foreground">UPTIME:</span>
                    <span className="text-[var(--cyber-blue)]">{uptime} DAYS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--terminal-amber)]">⚡</span>
                    <span className="text-muted-foreground">VERSION:</span>
                    <span className="text-[var(--terminal-amber)]">2.0.0</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  <a
                    href={personalInfo.social.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-[var(--matrix-green)] transition-colors"
                    title="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={personalInfo.social.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-[var(--cyber-blue)] transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-muted-foreground hover:text-[var(--terminal-amber)] transition-colors"
                    title="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>

              {/* Navigation Links */}
              <div>
                <h3 className="font-semibold text-[var(--matrix-green)] mb-4 font-mono text-sm">
                  $ ls navigation/
                </h3>
                <ul className="space-y-2 font-mono text-sm">
                  <li>
                    <Link
                      href="/"
                      className="text-muted-foreground hover:text-[var(--matrix-green)] transition-colors flex items-center gap-2"
                    >
                      <span className="text-[var(--matrix-green)]">&gt;</span> home.sh
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-muted-foreground hover:text-[var(--matrix-green)] transition-colors flex items-center gap-2"
                    >
                      <span className="text-[var(--matrix-green)]">&gt;</span> about.sh
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects"
                      className="text-muted-foreground hover:text-[var(--matrix-green)] transition-colors flex items-center gap-2"
                    >
                      <span className="text-[var(--matrix-green)]">&gt;</span> projects.sh
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/experience"
                      className="text-muted-foreground hover:text-[var(--matrix-green)] transition-colors flex items-center gap-2"
                    >
                      <span className="text-[var(--matrix-green)]">&gt;</span> experience.sh
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-semibold text-[var(--cyber-blue)] mb-4 font-mono text-sm">
                  $ cat contact.txt
                </h3>
                <ul className="space-y-2 font-mono text-sm">
                  <li>
                    <Link
                      href="/contact"
                      className="text-muted-foreground hover:text-[var(--cyber-blue)] transition-colors flex items-center gap-2"
                    >
                      <span className="text-[var(--cyber-blue)]">&gt;</span> send_message
                    </Link>
                  </li>
                  <li>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-muted-foreground hover:text-[var(--cyber-blue)] transition-colors text-xs break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[var(--matrix-green)]/20 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-xs">
          <p className="text-muted-foreground">
            <span className="text-[var(--matrix-green)]">©</span> {currentYear} {personalInfo.name}
            <span className="text-[var(--matrix-green)] mx-2">|</span>
            <span className="text-muted-foreground/70">All rights reserved</span>
          </p>
          <p className="text-muted-foreground flex items-center gap-2">
            <span className="text-[var(--matrix-green)]">&gt;</span>
            Built with
            <span className="text-[var(--neon-red)]">❤</span>
            and
            <span className="text-[var(--matrix-green)]">Next.js</span>
          </p>
        </div>

        {/* Terminal Cursor */}
        <div className="mt-4 flex items-center gap-2 font-mono text-xs text-[var(--matrix-green)]">
          <span>portfolio@{currentYear}:~$</span>
          <span className="terminal-cursor"></span>
        </div>
      </div>
    </footer>
  );
}
