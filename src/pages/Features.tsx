import React from 'react';
import { Brain, Sparkles, Users, Shield, Zap, Globe } from 'lucide-react';
import { PageHeader } from '../components/shared/PageHeader';
import { FeatureCard } from '../components/shared/FeatureCard';
import { Button } from '../components/shared/Button';

export function Features() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-violet-400" />,
      title: "Predictive Intelligence",
      description: "Advanced AI that learns from your patterns and provides personalized insights for better decision-making."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-violet-400" />,
      title: "Adaptive Interface",
      description: "A beautiful, intuitive interface that adjusts to your preferences and needs in real-time."
    },
    {
      icon: <Users className="w-6 h-6 text-violet-400" />,
      title: "Community Insights",
      description: "Learn from collective experiences while maintaining privacy and security."
    },
    {
      icon: <Shield className="w-6 h-6 text-violet-400" />,
      title: "Privacy First",
      description: "Your data is encrypted and secure. You're always in control of your information."
    },
    {
      icon: <Zap className="w-6 h-6 text-violet-400" />,
      title: "Real-time Sync",
      description: "Seamlessly sync your data across all devices with instant updates and backups."
    },
    {
      icon: <Globe className="w-6 h-6 text-violet-400" />,
      title: "Global Network",
      description: "Connect with a worldwide community of users sharing insights and experiences."
    }
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <PageHeader
        title="Powerful Features"
        description="Discover how MiRA's innovative features can transform your daily life and enhance your personal growth journey."
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

      <div className="text-center">
        <Button to="/waitlist" icon>Get Early Access</Button>
      </div>
    </div>
  );
}