import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-primary-navy text-white py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="font-bold mb-4 text-primary-coral">EduChain</h3>
          <p className="text-primary-mint text-sm">
            Revolutionizing education through blockchain technology
          </p>
        </div>
        {[
          {
            title: 'Platform',
            links: ['Browse Courses', 'How it Works', 'Pricing', 'For Institutions']
          },
          {
            title: 'Resources',
            links: ['Documentation', 'Help Center', 'Community', 'Blog']
          },
          {
            title: 'Legal',
            links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
          }
        ].map((section, index) => (
          <div key={index}>
            <h4 className="font-semibold mb-4 text-primary-coral">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="text-primary-mint hover:text-white cursor-pointer transition-colors">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;