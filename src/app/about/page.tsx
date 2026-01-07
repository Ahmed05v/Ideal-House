'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold mb-4 text-dark">
            About Ideal House
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're passionate about creating beautiful, functional furniture that transforms houses into ideal homes.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-4 text-dark">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2015, Ideal House began with a simple mission: to bring premium, 
              handcrafted furniture to homes across the nation. What started as a small 
              workshop has grown into a thriving furniture company known for quality and design.
            </p>
            <p className="text-gray-600 mb-4">
              Our journey has been fueled by a passion for craftsmanship, a commitment to 
              sustainability, and an unwavering dedication to customer satisfaction.
            </p>
            <p className="text-gray-600">
              Today, we continue to create furniture that not only looks beautiful but also 
              stands the test of time.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=600&fit=crop"
              alt="Our showroom"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Values */}
        <div className="bg-gray-50 py-16 rounded-lg mb-16">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center text-dark">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2 text-dark">Quality Design</h3>
              <p className="text-gray-600">
                Every piece is carefully designed by our talented team of furniture designers.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">♻️</div>
              <h3 className="text-xl font-bold mb-2 text-dark">Sustainability</h3>
              <p className="text-gray-600">
                We use eco-friendly materials and sustainable manufacturing practices.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-xl font-bold mb-2 text-dark">Durability</h3>
              <p className="text-gray-600">
                Our furniture is built to last with premium materials and expert craftsmanship.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-serif font-bold mb-12 text-center text-dark">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'Founder & CEO' },
              { name: 'Michael Chen', role: 'Head Designer' },
              { name: 'Emma Williams', role: 'Operations Manager' },
              { name: 'David Brown', role: 'Master Craftsman' },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="bg-gray-200 w-48 h-48 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-6xl">👤</span>
                </div>
                <h3 className="text-lg font-bold text-dark">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
