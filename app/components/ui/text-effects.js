"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function GradientText({ children, className = "" }) {
    return (
        <span className={`bg-gradient-to-r from-[var(--matrix-green)] via-[var(--cyber-blue)] to-[var(--terminal-amber)] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] ${className}`}>
            {children}
        </span>
    );
}

export function GlowText({ children, className = "" }) {
    return (
        <span className={`relative inline-block ${className}`}>
            <span className="relative z-10">{children}</span>
            <span className="absolute inset-0 blur-xl opacity-50 bg-gradient-to-r from-[var(--matrix-green)] to-[var(--cyber-blue)]" aria-hidden="true">
                {children}
            </span>
        </span>
    );
}

export function TypewriterText({ text, delay = 0, className = "" }) {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 50 + delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text, delay]);

    return (
        <span className={className}>
            {displayText}
            {currentIndex < text.length && (
                <span className="inline-block w-[2px] h-[1em] bg-[var(--matrix-green)] ml-1 animate-pulse"></span>
            )}
        </span>
    );
}
