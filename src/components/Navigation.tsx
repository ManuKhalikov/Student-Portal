import React from 'react';
import { Wallet, GraduationCap } from 'lucide-react';
import { DynamicWidget } from '@dynamic-labs/sdk-react-core';


interface NavigationProps {
  onConnectWallet: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onConnectWallet }) => (
  <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center">
          <GraduationCap className="h-8 w-8 text-primary-coral" />
          <span className="ml-2 text-xl font-bold text-primary-navy">
            EduChain
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <button className="text-primary-navy hover:text-primary-coral transition-colors">
            Explore
          </button>
          <button className="text-primary-navy hover:text-primary-coral transition-colors">
            How it Works
          </button>
          <DynamicWidget />
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;