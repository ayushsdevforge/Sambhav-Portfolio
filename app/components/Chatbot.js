'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Welcome to Sambhav's portfolio, I'm Sharva! Ask me anything about his projects, skills, or how to contact him." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowTooltip(true);
    }, 1500);
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages.slice(1).map(m => ({ role: m.role, content: m.content })), userMessage] })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response');
      }

      setMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: `Error: ${error.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Tooltip */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            className="fixed bottom-24 right-6 md:bottom-8 md:right-24 max-w-[240px] bg-white/10 backdrop-blur-xl border border-[var(--matrix-green)]/30 p-4 rounded-2xl md:rounded-br-sm shadow-2xl z-40 text-sm font-medium text-foreground cursor-pointer shadow-[var(--matrix-green)]/10"
            onClick={() => { setIsOpen(true); setShowTooltip(false); }}
          >
            Welcome to the Sambhav's portfolio I'm Sharva 👋
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => { setIsOpen(true); setShowTooltip(false); }}
        className={`fixed bottom-6 right-6 p-4 rounded-full bg-gradient-to-r from-[var(--matrix-green)] to-[var(--cyber-blue)] text-black shadow-lg z-50 hover:scale-110 transition-transform ${isOpen ? 'hidden' : 'block'}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Bot size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-80 md:w-[400px] h-[500px] bg-background border border-white/10 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-white/5 border-b border-white/10 flex justify-between items-center bg-gradient-to-r from-[var(--matrix-green)]/10 to-[var(--cyber-blue)]/10">
              <div className="flex items-center gap-2">
                <Bot className="text-[var(--matrix-green)]" size={20} />
                <span className="font-semibold text-foreground text-sm">AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-foreground/60 hover:text-foreground transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm whitespace-pre-wrap ${msg.role === 'user'
                      ? 'bg-[var(--matrix-green)] text-black rounded-br-none'
                      : 'bg-white/10 text-foreground rounded-bl-none'
                    }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 text-foreground p-3 rounded-2xl text-sm rounded-bl-none flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-foreground/60 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-foreground/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-1.5 h-1.5 bg-foreground/60 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-white/10 bg-white/5">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask something..."
                  className="w-full bg-black/20 border border-white/10 rounded-xl py-2 pl-4 pr-10 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-[var(--matrix-green)]/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 p-1.5 bg-[var(--matrix-green)] text-black rounded-lg disabled:opacity-50 hover:bg-[var(--matrix-green)]/80 transition-colors"
                >
                  <Send size={14} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
