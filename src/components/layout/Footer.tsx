import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container mx-auto px-6 py-12 border-t border-zinc-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-zinc-200 font-semibold mb-4">Product</h3>
          <div className="flex flex-col space-y-2 text-zinc-500">
            <Link to="/features" className="hover:text-zinc-300 transition-colors">Features</Link>
            <Link to="/about" className="hover:text-zinc-300 transition-colors">About</Link>
            <Link to="/blog" className="hover:text-zinc-300 transition-colors">Blog</Link>
          </div>
        </div>
        <div>
          <h3 className="text-zinc-200 font-semibold mb-4">Company</h3>
          <div className="flex flex-col space-y-2 text-zinc-500">
            <Link to="/about" className="hover:text-zinc-300 transition-colors">About Us</Link>
            <Link to="/blog" className="hover:text-zinc-300 transition-colors">Blog</Link>
            <Link to="/waitlist" className="hover:text-zinc-300 transition-colors">Join Waitlist</Link>
          </div>
        </div>
        <div>
          <h3 className="text-zinc-200 font-semibold mb-4">Legal</h3>
          <div className="flex flex-col space-y-2 text-zinc-500">
            <Link to="/privacy" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-zinc-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
        <div>
          <h3 className="text-zinc-200 font-semibold mb-4">Newsletter</h3>
          <p className="text-zinc-500 mb-4">Stay updated with our latest features and releases.</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-zinc-300 flex-1 focus:outline-none focus:border-violet-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-violet-500 hover:bg-violet-600 rounded-lg text-zinc-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center text-zinc-700 pt-8 border-t border-zinc-800">
        <p>© {currentYear} MiRA. All rights reserved.</p>
      </div>
    </footer>
  );
}