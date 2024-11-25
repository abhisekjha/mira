import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PageHeader } from '../components/shared/PageHeader';

export function Waitlist() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this to your backend
    setSubmitted(true);
    
    // Store in localStorage
    const waitlist = JSON.parse(localStorage.getItem('waitlist') || '[]');
    waitlist.push({ name, email, date: new Date().toISOString() });
    localStorage.setItem('waitlist', JSON.stringify(waitlist));
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] bg-zinc-950 flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto text-center"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-violet-400" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent mb-4">
            You're on the list!
          </h2>
          <p className="text-zinc-400 text-lg">
            Thank you for joining our waitlist. We'll notify you as soon as MiRA is ready for early access.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] bg-zinc-950 flex flex-col items-center justify-center px-6">
      {/* Gradient Orb */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-violet-500/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative max-w-md w-full mx-auto text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent mb-4">
          Join the Waitlist
        </h1>
        <p className="text-zinc-400 text-lg">
          Be among the first to experience MiRA and help shape the future of personal AI assistance.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative w-full max-w-md mx-auto"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="relative w-full px-6 py-4 bg-zinc-900/90 border border-zinc-800 rounded-lg focus:outline-none focus:border-violet-500 text-zinc-200 text-lg placeholder-zinc-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="relative w-full px-6 py-4 bg-zinc-900/90 border border-zinc-800 rounded-lg focus:outline-none focus:border-violet-500 text-zinc-200 text-lg placeholder-zinc-500"
              placeholder="Enter your email"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 rounded-lg text-zinc-100 font-semibold text-lg shadow-lg shadow-violet-500/25 transition-all"
          >
            Join Waitlist
          </motion.button>

          <p className="text-sm text-zinc-500 text-center">
            By joining, you agree to receive updates about MiRA. You can unsubscribe at any time.
          </p>
        </form>
      </motion.div>
    </div>
  );
}