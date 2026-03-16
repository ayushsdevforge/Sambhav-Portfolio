"use client";

import { cn } from "@/lib/utils";

export default function TerminalWindow({
    children,
    title = "terminal@portfolio:~$",
    className = "",
    showDots = true
}) {
    return (
        <div className={cn("terminal-window", className)}>
            {/* Terminal Header */}
            <div className="terminal-header">
                {showDots && (
                    <div className="flex gap-2">
                        <span className="terminal-dot red"></span>
                        <span className="terminal-dot amber"></span>
                        <span className="terminal-dot green"></span>
                    </div>
                )}
                <span className="text-xs terminal-text font-mono ml-2">{title}</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6">
                {children}
            </div>
        </div>
    );
}
