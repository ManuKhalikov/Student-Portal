import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => (
  <section className="relative overflow-hidden bg-primary-sky">
    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-coral rounded-full opacity-20 transform translate-x-32 -translate-y-32"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-navy rounded-full opacity-10 transform -translate-x-48 translate-y-48"></div>
    
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold text-primary-navy mb-6 leading-tight">
            Quality <span className="text-primary-coral">Mentorship</span> & Courses
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Connect your wallet, enroll in courses, and receive NFT certificates 
            for your achievements in our Web3 learning platform.
          </p>
          <div className="flex gap-4">
            <button className="bg-primary-coral text-white px-8 py-4 rounded-full hover:bg-primary-navy transition-colors flex items-center gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </button>
            <button className="border-2 border-primary-navy text-primary-navy px-8 py-4 rounded-full hover:bg-primary-navy hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <div className="hidden md:block relative">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Students collaborating"
            className="rounded-3xl shadow-xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
            <div className="flex items-center gap-3">
              <div className="bg-primary-mint p-2 rounded-full">
                <svg className="h-6 w-6 text-primary-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-navy">1,000+</p>
                <p className="text-xs text-gray-500">NFT Certificates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;