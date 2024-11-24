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
    console.log('Submitted:', { name, email });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto text-center"
        >
          <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-violet-400" />
          </div>
          <h2 className="text-2xl font-bold text-zinc-200 mb-4">You're on the list!</h2>
          <p className="text-zinc-500">
            Thank you for joining our waitlist. We'll notify you as soon as MiRA is ready for early access.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <PageHeader
        title="Join the Waitlist"
        description="Be among the first to experience MiRA and help shape the future of personal AI assistance."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg focus:outline-none focus:border-violet-500 text-zinc-300"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg focus:outline-none focus:border-violet-500 text-zinc-300"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 rounded-lg text-zinc-100 font-semibold shadow-lg shadow-violet-500/25 transition-all"
          >
            Join Waitlist
          </button>

          <p className="text-sm text-zinc-500 text-center">
            By joining, you agree to receive updates about MiRA. You can unsubscribe at any time.
          </p>
        </form>
      </motion.div>
    </div>
  );
}