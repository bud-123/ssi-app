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
          Hi there! I am Jean Udo, a seasoned track and field athlete with a passion for sharing my expertise and experiences with fellow athletes. 

With years of dedication and countless competition under my belt, I have learned much about what it takes to excel in this sport. 

I am excited to share that knowledge with you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-8 py-16">
        {/* Story Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">My Story</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-gray-700">
              My journey in track and field began at a young age, driven by a love for running and a desire to push my limits. Over 15 years, I have

competed at various levels, from local meets to national championships, and each experience has shaped me into the athlete I am today. 

Along the way, I have faced challenges, celebrated victories, and learned invaluable lessons that I now share through my blogs, 

consulting services and modeling portfolio. 
              </p>
              <p className="text-gray-700">
              <p className="font-semibold">Blog:</p> Dive into my blog where I share insights, tips and stories from my track and field adventures. Whether you are looking for training 

advice, faith based encouragement, or behind-the-sciences glimpses into the life of an athlete, you find it all here.       
              </p>
              <p className="text-gray-700">
              <p className="font-semibold">Consulting Services:</p> Looking for personalized guidance? I offer consulting services tailored to your specific needs, whether you are 

aiming to improve your athletic/academic performance, overcome challenges, or reach new goals.               
              </p>
              <p className="text-gray-700">
              <p className="font-semibold">Products:</p> Explore my range of products designed to support your training and performance needs. From gear to productivity aids, 

each product is chosen with care to help you excel
              </p>
              <p className="text-gray-700">
              <p className="font-semibold">Modeling Portfolio:</p>Check out my modeling portfolio, where I combine my athletic prowess with a passion for fashion and photography. 

Here, you will find a collection of photos that capture the essence of strength, grace and determination. 
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'Dedication',
                description: 'I believe in the power of exercise a strong work ethic and perseverance. Every step, and every jump is a testament to the dedication required to succeed.'
              },
              {
                title: 'Faith',
                description: 'My faith plays a central role in my life and guides my actions both on and off the track. I strive to inspire others through my faith and the lessons it has taught me.'
              },
              {
                title: 'Community',
                description: 'Track and field is more than just a sport; it is a community. I strive to foster a supportive environment where athletes can connect, learn, and grow together.'
              },
              {
                title: 'Excellence',
                description: 'Track and field is more than just a sport; it is a community. I strive to foster a supportive environment where athletes can connect, learn, and grow together.'
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
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
                <h3 className="text-xl font-semibold text-gray-900">Pro Athlete Mentor</h3>
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
