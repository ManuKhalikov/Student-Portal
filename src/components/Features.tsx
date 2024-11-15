import React from 'react';
import { Wallet, BookOpen, Award } from 'lucide-react';
import type { FeatureCard } from '../types';

const features: FeatureCard[] = [
  {
    icon: Wallet,
    title: 'Web3 Integration',
    description: 'Seamlessly connect your wallet and manage your credentials on-chain'
  },
  {
    icon: BookOpen,
    title: 'Quality Education',
    description: 'Access premium courses from verified institutions and instructors'
  },
  {
    icon: Award,
    title: 'NFT Certificates',
    description: 'Earn verifiable NFT certificates upon course completion'
  }
];

const Features: React.FC = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-radial from-primary-sky to-white opacity-50"></div>
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-16 text-primary-navy">Why Choose EduChain?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-primary-mint p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
              <feature.icon className="h-8 w-8 text-primary-navy" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary-navy">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;