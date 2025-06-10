"use client";

import HeroSection from "@/components/HeroSection";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      {/* Our Services Section */}
      <section id="our-services" className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Smart Farming. Real Impact.</h2>
          <p className="text-center text-lg mb-12">Solutions designed for African farms — powered by innovation, guided by experience, proven on the ground.</p>
          {/* 1st Row – Planning & Advisory */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="text-4xl mb-4">🧑🏽‍🌾</div>
              <h3 className="text-2xl font-semibold mb-2 text-agri-green">Free Site Assessment & Expert Advice</h3>
              <p className="text-gray-700">Clear, tailored consultation, no cost.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-2xl font-semibold mb-2 text-agri-green">Custom Irrigation Scheme Design</h3>
              <p className="text-gray-700">Plans based on your land, water, crop.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-semibold mb-2 text-agri-green">Farm Water Management Consulting</h3>
              <p className="text-gray-700">Water efficiency = cost and yield optimization.</p>
            </div>
          </div>

          {/* 2nd Row – Execution & Systems */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-2xl font-semibold mb-2 text-agri-green">Installation of Irrigation Systems</h3>
              <p className="text-gray-700">Drip, pivot, sprinkler setups done right.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-semibold mb-2 text-agri-green">Maintenance & Emergency Repairs</h3>
              <p className="text-gray-700">Keep your system running long-term.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="text-4xl mb-4">🧑‍🏫</div>
              <h3 className="text-2xl font-semibold mb-2 text-agri-green">Training & Farmer Support</h3>
              <p className="text-gray-700">Hands-on training for your team.</p>
            </div>
          </div>

          {/* 3rd Row – Power & Innovation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="text-4xl mb-4">☀️</div>
              <h3 className="text-2xl font-semibold mb-2 text-agri-green">Solar Water Pumping Solutions</h3>
              <p className="text-gray-700">Off-grid power for any location.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="text-4xl mb-4">🧬</div>
              <h3 className="text-2xl font-semibold mb-2 text-agri-green">Advanced Irrigation Tech (IoT + AI)</h3>
              <p className="text-gray-700">Smart farming with real-time data.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="text-2xl font-semibold mb-2 text-agri-green">Sustainable Energy Integration</h3>
              <p className="text-gray-700">Clean energy for greener agriculture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section id="our-products" className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Best-in-Class Irrigation & Solar Equipment</h2>
          <p className="text-center text-lg mb-12">We supply top-quality equipment trusted by farmers across Africa.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-200 mb-4"></div> {/* Image Placeholder */}
              <h3 className="text-2xl font-semibold mb-2 text-agri-green">Drip Irrigation Kits</h3>
              <p className="text-gray-700">Efficient water delivery to your crops.</p>
              <button className="mt-4 bg-agri-green text-white py-2 px-4 rounded">Request a Quote</button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-200 mb-4"></div> {/* Image Placeholder */}
              <h3 className="text-2xl font-semibold mb-2 text-agri-green">Sprinkler Heads</h3>
              <p className="text-gray-700">Uniform water distribution for your fields.</p>
              <button className="mt-4 bg-agri-green text-white py-2 px-4 rounded">Request a Quote</button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-200 mb-4"></div> {/* Image Placeholder */}
              <h3 className="text-2xl font-semibold mb-2 text-agri-green">Solar Water Pumps</h3>
              <p className="text-gray-700">Reliable off-grid water pumping solutions.</p>
              <button className="mt-4 bg-agri-green text-white py-2 px-4 rounded">Request a Quote</button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-200 mb-4"></div> {/* Image Placeholder */}
              <h3 className="text-2xl font-semibold mb-2 text-agri-green">Controllers & Timers</h3>
              <p className="text-gray-700">Automate your irrigation schedule.</p>
              <button className="mt-4 bg-agri-green text-white py-2 px-4 rounded">Request a Quote</button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-200 mb-4"></div> {/* Image Placeholder */}
              <h3 className="text-2xl font-semibold mb-2 text-agri-green">Pipes, Fittings, Filters</h3>
              <p className="text-gray-700">Durable components for your system.</p>
              <button className="mt-4 bg-agri-green text-white py-2 px-4 rounded">Request a Quote</button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-200 mb-4"></div> {/* Image Placeholder */}
              <h3 className="text-2xl font-semibold mb-2 text-agri-green">Fertigation Tools</h3>
              <p className="text-gray-700">Enhance crop nutrition efficiently.</p>
              <button className="mt-4 bg-agri-green text-white py-2 px-4 rounded">Request a Quote</button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-200 mb-4"></div> {/* Image Placeholder */}
              <h3 className="text-2xl font-semibold mb-2 text-agri-green">Smart Irrigation Sensors</h3>
              <p className="text-gray-700">Monitor and optimize water usage.</p>
              <button className="mt-4 bg-agri-green text-white py-2 px-4 rounded">Request a Quote</button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section id="our-impact" className="py-16 bg-light-green">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
          <p className="text-center text-lg mb-12">Quickly explain why your work matters — use stats, pain points, or mission.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="text-4xl mb-4">💧</div>
              <h3 className="text-2xl font-semibold mb-2 text-agri-green">500+ Farms Empowered</h3>
              <p className="text-gray-700">Across Zimbabwe</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-semibold mb-2 text-agri-green">70% Water Savings</h3>
              <p className="text-gray-700">Per Installation</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-semibold mb-2 text-agri-green">100% Renewable-Powered</h3>
              <p className="text-gray-700">Irrigation Setups</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full mb-4"></div> {/* Photo Placeholder */}
            <blockquote className="text-xl italic text-gray-700 max-w-xl">
              "Manase Utilities transformed our farm. We use less water and grow more."
            </blockquote>
            <p className="mt-2 text-lg font-semibold text-agri-green">– Farmer, Gweru District</p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="who-we-are" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Who We Are</h2>
          <p className="text-center text-lg mb-12">
            Manase Utilities is dedicated to providing innovative irrigation and solar solutions tailored for African farmers. Our mission is to empower communities with sustainable and efficient agricultural practices.
          </p>
          <div className="text-center">
            <a href="#footer" className="text-agri-green underline">Learn more about us in the footer</a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="footer" className="py-8 bg-neutral">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
          <p className="text-center text-lg mb-4">Quick links and social media placeholders.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-agri-green">Facebook</a>
            <a href="#" className="text-agri-green">Twitter</a>
            <a href="#" className="text-agri-green">LinkedIn</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        #our-services {
          background-color: #f8f9fa;
        }
        .shadow-md {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .hover\:shadow-lg:hover {
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
        }
        .text-agri-green {
          color: #4B7339;
        }
        #our-impact {
          background-color: #e6f4ea;
        }
      `}</style>
    </main>
  );
} 