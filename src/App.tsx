import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { About } from './pages/About';
import Blog from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Waitlist } from './pages/Waitlist';
import Announcement from './components/Announcement';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-900 flex flex-col">
        <Announcement 
          message="MiRA is now in beta! Join our waitlist to get early access." 
          link={{ text: "Join Now", url: "/waitlist" }} 
        />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/waitlist" element={<Waitlist />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;