import React from 'react';
import { Wallet, GraduationCap } from 'lucide-react';

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
          <button 
            onClick={onConnectWallet}
            className="flex items-center gap-2 bg-primary-coral text-white px-6 py-2 rounded-full hover:bg-primary-navy transition-colors"
          >
            <Wallet className="h-4 w-4" />
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;