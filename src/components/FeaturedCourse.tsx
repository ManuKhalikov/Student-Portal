import React from 'react';
import type { Course } from '../types';

const FeaturedCourse: React.FC<Course> = ({ title, instructor, students, rating, imageUrl }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
    <div className="h-48 overflow-hidden">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-6">
      <h3 className="font-semibold text-xl mb-2 text-primary-navy">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">by {instructor}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-primary-coral">{students} students</span>
        <span className="text-sm bg-primary-mint text-primary-navy px-3 py-1 rounded-full">★ {rating}</span>
      </div>
    </div>
  </div>
);

export default FeaturedCourse;