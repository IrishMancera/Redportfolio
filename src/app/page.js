'use client'; // Add this line
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';


export default function Home() {
  const [active, setActive] = useState('Weekly Report');

  const navItems = [
    'Projects',
    'Tool Exposure',
    'References',
    'Game Development Document',
    'Certificate',
    'Event Exposure',
    'Who is Irish',
  ];

  const blogCategories = [
    'Weekly Report',
    'Daily Accomplishment',
    'Development Process',
    'Documentation',
    'Learning',
    'Visual Output',
  ];

  const { scrollY } = useViewportScroll();
  const morph = useTransform(scrollY, [0, 300], ['0%', '50%']);

  const slideshowImages = [
    '/docs1.png',
    '/docs2.png',
    '/docs3.png',
    '/docs4.png',
    '/docs5.png',
  ];

  function Slideshow({ images }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 3500);

      return () => clearInterval(interval);
    }, [images.length]);
    return (
      <motion.div
        className="relative w-full h-96"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl"
            style={{ zIndex: index === current ? 10 : 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === current ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-950 to-black text-white font-sans flex flex-col">
      {/* NAVBAR */}
      <header className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold">▶</span>
          </div>
          <span className="text-xl font-bold tracking-wide">IRISH S Portfolio</span>
        </div>
        <nav className="hidden lg:flex space-x-8 text-sm uppercase">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="hover:text-gray-300 transition"
            >
              {item}
            </Link>
          ))}
        </nav>




        <div className="hidden lg:flex space-x-4">
          {/* External links with target="_blank" to open in a new tab */}
          <a 
            href="/cv"  // External link to the CV route
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2 bg-blue-600 rounded-full text-sm font-medium hover:bg-blue-500 transition">
              CV
            </button>
          </a>
          <a 
            href="/seeirish"  // External link to see Irish's work
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2 bg-black rounded-full text-sm font-medium hover:bg-gray-800 transition">
              See Irish s Work
            </button>
          </a>
        </div>



      </header>

      {/* HERO */}
      <main className="flex-grow relative flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 mt-12">
        <div className="max-w-lg space-y-6">
          <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight">
            Welcome to Irish's Portfolio
          </h1>
          <p className="text-gray-300">Explore the creativity, development, and work done by Irish.</p>
        </div>a
      </main>

      {/* Blogposts Section */}
      <section className="bg-white text-gray-900 py-16 px-8">
      <nav className="flex flex-wrap gap-4 mb-8 border-b pb-4">
        {blogCategories.map((cat) => {
          const path = `/${cat.toLowerCase().replace(/\s+/g, '-')}`;
          return (
            <Link
              key={cat}
              href={path}
              className={`pb-2 text-sm font-medium transition-all ${
                active === cat
                  ? 'border-b-2 border-blue-600 text-black'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {cat}
            </Link>
          );
        })}
      </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((id) => (
            <motion.div
              key={id}
              style={{ borderRadius: morph }}
              className="overflow-hidden bg-gray-100 shadow-lg"
            >
              <motion.img
                src={`https://via.placeholder.com/400x250?text=Post+${id}`}
                alt={`Post ${id}`}
                className="w-full h-48 object-cover"
                style={{ clipPath: morph }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Blog Post Title {id}</h3>
                <p className="text-sm text-gray-600">
                  A short excerpt of the blog post goes here to entice the reader.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Morphing Slideshow */}
      <section className="relative bg-gradient-to-b from-indigo-900 via-purple-800 to-black py-20 px-8">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <motion.h2
            className="text-4xl font-extrabold text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Documentation Highlights
          </motion.h2>
          <p className="text-gray-300 mt-4">
            Explore snippets from Irish s learning, documentation, and development journey.
          </p>
        </div>

        <motion.div
          className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-3xl shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(123,31,162,0.6), rgba(32, 0, 65, 0.9))',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Slideshow images={slideshowImages} />
        </motion.div>
      </section>

    {/* FOOTER */}
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center lg:flex-row justify-between px-8">
        
        {/* Profile Section with Multiple Seamless Portraits */}
        <div className="flex items-center mb-6 lg:mb-0 space-x-4">
          {/* Image Carousel Feel */}
          <div className="flex -space-x-4">
            <img
              src="/assets/irish-face1.jpg"
              alt="Irish 1"
              className="h-16 w-16 rounded-full border-4 border-indigo-500 object-cover"
            />
            <img
              src="/assets/irish-face2.jpg"
              alt="Irish 2"
              className="h-16 w-16 rounded-full border-4 border-pink-500 object-cover"
            />
            <img
              src="/assets/irish-face3.jpg"
              alt="Irish 3"
              className="h-16 w-16 rounded-full border-4 border-yellow-500 object-cover"
            />
          </div>
          <span className="text-3xl ml-6 font-bold text-white">Irish</span>
        </div>

        {/* Text Information */}
        <div className="text-center lg:text-left">
          <p className="text-lg">&copy; 2025 Irish's Portfolio. All rights reserved.</p>
          <p className="text-sm mt-2">
            Email: <a href="mailto:irish@example.com" className="text-blue-400 hover:text-blue-600">irish@example.com</a>
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-6 lg:mt-0">
          <a href="https://www.facebook.com/RedEllie9teds" className="text-gray-400 hover:text-white text-2xl transition-transform hover:scale-110">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/spmdssd_ivm/" className="text-gray-400 hover:text-white text-2xl transition-transform hover:scale-110">
            <FaInstagram />
          </a>
          <a href="" className="text-gray-400 hover:text-white text-2xl transition-transform hover:scale-110">
            <FaLinkedinIn />
          </a>
        </div>

      </div>
    </footer>

    </div>
  );
}
