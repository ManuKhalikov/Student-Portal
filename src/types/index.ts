export interface Course {
  id: string;
  title: string;
  instructor: string;
  students: string;
  rating: string;
  imageUrl: string;
}

export interface FeatureCard {
  icon: React.ComponentType;
  title: string;
  description: string;
}