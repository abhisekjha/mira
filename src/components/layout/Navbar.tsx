import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative">
      <Link to="/" className="flex items-center space-x-2">
        <Brain className="w-8 h-8 text-violet-400" />
        <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
          MiRA
        </span>
      </Link>
      <div className="hidden md:flex items-center space-x-8 text-zinc-400">
        <Link to="/features" className="hover:text-zinc-200 transition-colors">Features</Link>
        <Link to="/about" className="hover:text-zinc-200 transition-colors">About</Link>
        <Link to="/blog" className="hover:text-zinc-200 transition-colors">Blog</Link>
      </div>
      <Link 
        to="/waitlist" 
        className="px-6 py-2 rounded-full bg-violet-500 hover:bg-violet-600 transition-all font-medium text-zinc-100"
      >
        Join Waitlist
      </Link>
    </nav>
  );
}