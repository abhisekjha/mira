import React from 'react';
import { PageHeader } from '../components/shared/PageHeader';
import { motion } from 'framer-motion';

export function About() {
  const team = [
    {
      name: "Abhisek Kumar Jha",
      role: "CEO & Founder",
      image:"img/absec.jpg",
      bio: "Former Cybersecurity and AI researcher at UTA, passionate about using technology to enhance human potential."
    }
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <PageHeader
        title="Our Mission"
        description="We're on a mission to empower individuals to achieve their full potential through intelligent, adaptive technology."
      />

      <div className="max-w-3xl mx-auto mb-16">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg text-zinc-400 mb-6"
        >
          At MiRA, we believe that everyone deserves a personal AI assistant that understands their unique needs and helps them navigate life's complexities. Our team of experts in AI, psychology, and human-computer interaction works tirelessly to create technology that adapts to you, not the other way around.
        </motion.p>
      </div>

      <h2 className="text-3xl font-bold text-zinc-200 mb-8 text-center">Meet Our Team</h2>
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-zinc-200 mb-1">{member.name}</h3>
            <p className="text-violet-400 mb-2">{member.role}</p>
            <p className="text-zinc-500">{member.bio}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}