import React from 'react';
import aboutImage from '../components/assets/images/about-image.jpg';
const About = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-amber-400 to-orange-500 py-20">
        <div className="max-w-[1400px] mx-auto px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Jean
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Former D1 athlete turned mental performance coach, helping athletes navigate uncertainty and achieve their full potential.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-8 py-16">
        {/* Story Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">The Savvy Side Story</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-gray-700">
                Jean's story is about more than athletic success. It's about a commitment to fostering change in the lives of others. Inspired by her own journey of mental, physical, and spiritual growth, Jean is dedicated to advocating for holistic health. As she puts it, "Health care is one of the major components of an individual's daily life. I wish to be an influencer of change in the arena of healthy living by being an advocate for the mental, physical, and spiritual well-being of people."
              </p>
              <p className="text-gray-700">
                Jean's legacy is one of strength, balance, and the unwavering pursuit of making a meaningful difference—on the track, in the field, and beyond.
              </p>
            </div>
            <div className="flex justify-center items-start">
              <img 
                src={aboutImage} 
                alt="Jean" 
                className="w-[400px] rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Resilience',
                description: 'Building grit and leading with purpose.'
              },
              {
                title: 'Holistic Wellness',
                description: 'Helping to achieve mental, physical, and spiritual wellness.'
              },
              {
                title: 'Empowerment',
                description: 'Helping athletes discover their inner strength and potential.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-6">
            {/* Experience Cards */}
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Mental Performance Coach</h3>
                <span className="text-orange-500 font-medium">2022 - Present</span>
              </div>
              <p className="text-gray-700">
                Working with D1 athletes to optimize their mental performance and navigate challenges.
              </p>
            </div>

           

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Athletic Leadership Program</h3>
                <span className="text-orange-500 font-medium">2016 - 2021</span>
              </div>
              <p className="text-gray-700">
                Led peer mentoring programs and organized team building activities.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">D1 Track & Field Athlete</h3>
                <span className="text-orange-500 font-medium">2012 - 2016</span>
              </div>
              <p className="text-gray-700">
                Competed at the highest collegiate level, breaking school records while maintaining academic excellence.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
