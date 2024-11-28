import React from 'react';
import { FC, useState } from 'react';
import Button from '../components/common/Button';
import heroImage1 from '../components/assets/images/hero-image1.jpg';
import EmailModal from '../components/EmailModal';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: FC<HeroProps> = ({ title, subtitle }) => (
  <div className="bg-white">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          {subtitle}
        </p>
        <div className="mt-8">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  </div>
);

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full min-h-screen">
      <main className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold">
              <span className="text-gray-900 block">Empowering athletes</span>
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-transparent bg-clip-text">to succeed beyond the arena</span>
            </h1>
            
            <div className="space-y-2">
              <p className="text-2xl text-gray-600">
              Through <span className="text-indigo-600 font-semibold">mentoring</span>, <span className="text-indigo-600 font-semibold">support</span>, and <span className="text-indigo-600 font-semibold">resilience resources</span>,
              </p>
              <p className="text-2xl text-gray-600">
              Savvy Side Solutions helps athletes navigate uncertainty, build resilience, and create a future they're proud of
              </p>
              <p className="text-2xl text-gray-600 leading-relaxed italic">
              – both on and off the field.
              </p>
            </div>
          </div>

          <div className="relative h-[500px]">
            <img 
              src={heroImage1} 
              alt="Athletes succeeding"
              className="object-cover rounded-lg shadow-xl w-full h-full"
            />
          </div>
        </div>
      </main>

      {/* Gradient section with button */}
      <div className="w-full h-40 bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center">
        <Button 
          variant="primary"
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-orange-600 hover:bg-orange-50 shadow-lg px-8 py-4 rounded-full font-medium"
        >
          Email yourself an ebook on navigating uncertainty as an athlete.
        </Button>
      </div>
      
      {/* Add Modal component (you'll need to create this) */}
      {isModalOpen && (
        <EmailModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}

    </div>
  );
};

export default Home; 