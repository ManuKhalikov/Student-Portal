import React, { useState } from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import Features from './Features';
import FeaturedCourse from './FeaturedCourse';
import Footer from './Footer';
import { ChevronRight } from 'lucide-react';
import type { Course } from '../types';

const featuredCourses: Course[] = [
  {
    id: '1',
    title: 'Blockchain Fundamentals',
    instructor: 'Dr. Sarah Chen',
    students: '1,234',
    rating: '4.8',
    imageUrl: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Smart Contract Development',
    instructor: 'Alex Johnson',
    students: '987',
    rating: '4.9',
    imageUrl: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Web3 Architecture',
    instructor: 'Mike Williams',
    students: '756',
    rating: '4.7',
    imageUrl: 'https://images.unsplash.com/photo-1639322537674-e8f5f08c4d89?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const HomePage: React.FC = () => {
  const [isWalletModalOpen, setWalletModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation onConnectWallet={() => setWalletModalOpen(true)} />
      <Hero />
      <Features />
      
      {/* Featured Courses */}
      <section className="py-24 bg-gradient-to-b from-white to-primary-sky">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy">Featured Courses</h2>
            <button className="text-primary-coral hover:text-primary-navy flex items-center gap-1 transition-colors">
              View All <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map(course => (
              <FeaturedCourse key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-sky relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-white to-transparent opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl font-bold mb-6 text-primary-navy">Ready to Start Learning?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Join thousands of students already learning on our platform. 
            Connect your wallet and start your Web3 education journey today.
          </p>
          <button className="bg-primary-coral text-white px-8 py-4 rounded-full hover:bg-primary-navy transition-colors">
            Get Started Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;