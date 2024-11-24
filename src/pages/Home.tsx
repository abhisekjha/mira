import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';

export function Home() {
  const [prompt, setPrompt] = useState('');

  const suggestions = [
    {
      icon: <Brain className="w-5 h-5" />,
      text: "Help me plan my day efficiently",
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      text: "Generate creative project ideas",
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      text: "Get personalized advice",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      {/* Gradient Orb */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-violet-500/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <main className="flex-grow flex flex-col items-center justify-center px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl w-full text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent mb-4">
            How can MiRA assist you today?
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl">
            Your AI companion for personal growth and productivity
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="w-full max-w-2xl"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Type your request..."
                className="w-full px-6 py-4 bg-zinc-900/90 border border-zinc-800 rounded-lg focus:outline-none focus:border-violet-500 text-zinc-200 text-lg placeholder-zinc-500"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 hover:bg-zinc-800 rounded-lg transition-colors">
                <ArrowRight className="w-6 h-6 text-violet-400" />
              </button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {suggestions.map((suggestion, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                onClick={() => setPrompt(suggestion.text)}
                className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-violet-500/50 hover:bg-zinc-900 transition-all group text-left"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-violet-500/10 rounded-lg text-violet-400 group-hover:scale-110 transition-transform">
                    {suggestion.icon}
                  </div>
                  <span className="text-zinc-300 group-hover:text-zinc-100 transition-colors">
                    {suggestion.text}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="absolute bottom-8 text-center text-zinc-500 text-sm"
        >
          <p>MiRA learns from each interaction to provide better assistance</p>
        </motion.div>
      </main>
    </div>
  );
}