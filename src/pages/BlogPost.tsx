import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export function BlogPost() {
  const { id } = useParams();

  // This would typically come from an API or CMS
  const post = {
    id: 'introducing-mira',
    title: 'Introducing MiRA: The Future of Personal AI Assistance',
    content: `
      <p>Today, we're thrilled to announce MiRA, an innovative AI assistant that represents a significant leap forward in personal development technology. MiRA is designed to understand, adapt, and grow with you, creating a truly personalized experience that helps you navigate life's complexities with confidence.</p>

      <h2>Why MiRA?</h2>
      <p>In today's fast-paced world, we all face unique challenges that require personalized solutions. Traditional one-size-fits-all approaches often fall short of meeting individual needs. MiRA changes this paradigm by combining advanced AI with collective intelligence to provide tailored guidance and support.</p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Predictive Intelligence:</strong> MiRA learns from your patterns and preferences to provide proactive insights and recommendations.</li>
        <li><strong>Adaptive Interface:</strong> An intuitive interface that adjusts to your cognitive state and usage patterns.</li>
        <li><strong>Community Insights:</strong> Leverage collective wisdom while maintaining privacy and security.</li>
      </ul>

      <h2>Join the Journey</h2>
      <p>We're currently in the final stages of development and will be launching our beta program soon. Join our waitlist to be among the first to experience the future of personal AI assistance.</p>
    `,
    date: '2024-03-15',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
    category: 'Announcement'
  };

  return (
    <article className="container mx-auto px-6 py-16">
      <Link to="/blog" className="inline-flex items-center text-zinc-400 hover:text-violet-400 transition-colors mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Blog
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-sm font-medium text-violet-400">{post.category}</span>
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-200 mt-2 mb-6">{post.title}</h1>
        
        <div className="flex items-center text-sm text-zinc-500 mb-8">
          <Calendar className="w-4 h-4 mr-2" />
          {new Date(post.date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}
          <span className="mx-3">•</span>
          <Clock className="w-4 h-4 mr-2" />
          {post.readTime}
        </div>

        <div className="relative mb-12 rounded-2xl overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full aspect-[2/1] object-cover"
          />
        </div>

        <div 
          className="prose prose-invert prose-violet max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </motion.div>
    </article>
  );
}