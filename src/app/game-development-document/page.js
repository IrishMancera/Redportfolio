'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pdfFileName, setPdfFileName] = useState('/path/to/your/file.pdf'); // Add this line

  const contentGroups = [
    {
      title: 'Game Dev Docs',
      slideshow: ['/docs1.png', '/docs2.png', '/docs3.png'],
      pdfPreviews: ['/page1.png', '/page2.png', '/page3.png'],
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 5); // Adjust max length dynamically if needed
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { name: 'Projects', href: '/projects' },
    { name: 'Tool Exposure', href: '/tool-exposure' },
    { name: 'References', href: '/references' },
    { name: 'Game Dev Doc', href: '/game-development-document' },
    { name: 'Certificate', href: '/certificate' },
    { name: 'Event Exposure', href: '/event-exposure' },
    { name: 'Who is Irish', href: '/who-is-irish' },
  ];




  const HeroCard = ({ title, date, image }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full lg:max-w-md mx-auto"
    >
      <img src={image} loading="lazy" className="w-full h-64 object-cover rounded-t-2xl" alt={title} />
      <div className="p-5">
        <p className="text-sm text-gray-500">{date}</p>
        <h3 className="text-lg font-semibold mt-1 text-gray-800">{title}</h3>
        <Link href="#" className="text-indigo-600 hover:underline text-sm mt-2 inline-block">
          Read more →
        </Link>
      </div>
    </motion.div>
  );

  const Slideshow = ({ images }) => (
    <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg mb-4">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          loading="lazy"
          alt={`Slide ${i}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            currentSlide === i ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}
    </div>
  );

  const PDFPreview = ({ pages }) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {pages.map((page, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-xl shadow-md bg-white"
        >
          <img
            src={page}
            loading="lazy"
            className="object-contain h-48 w-full"
            alt={`PDF Page ${index}`}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white p-2">
            <h4 className="text-sm font-medium">Preview {index + 1}</h4>
            <button className="mt-1 px-3 py-1 text-xs bg-indigo-600 rounded">Open Preview</button>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md sticky top-0 bg-white z-50">
        <div className="flex items-center space-x-2">
          <div className="bg-indigo-700 w-10 h-10 rounded-full flex justify-center items-center text-white font-bold">
            ▶
          </div>
          <h1 className="text-xl font-bold tracking-wide">IRISH S Portfolio</h1>
        </div>
        <nav className="space-x-6 text-sm hidden md:flex">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="hover:text-indigo-600">
              {item.name}
            </Link>
          ))}
        </nav>
      </header>


     {/* Hero Section */}
     <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {['Card 1', 'Card 2', 'Card 3'].map((title, i) => (
            <HeroCard key={i} title={title} date={`Date ${i + 1}`} image="/hero-image.png" />
          ))}
        </div>
      </section>  

      {/* PDF Preview Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-indigo-900 via-black to-gray-100">
        <div className="max-w-5xl mx-auto rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            PDF Preview: {pdfFileName.split('/').pop()}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((num) => (
              <motion.div
                key={num}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm border border-gray-300/20 shadow-lg"
              >
                <img
                  src={`/pdf-preview-page${num}.png`} // Replace with actual preview images
                  alt={`PDF Page ${num}`}
                  className="w-full h-64 object-contain"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300 flex justify-center items-center">
                  <a
                    href={pdfFileName}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-indigo-700 text-white text-sm rounded-lg shadow-md hover:bg-indigo-800"
                  >
                    Open PDF
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Sections for Each Content Group */}
      {contentGroups.map((group, index) => (
        <section
          key={index}
          className={`py-16 px-6 ${index % 2 === 0 ? 'bg-white text-gray-800' : 'bg-black text-white'}`}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">{group.title} – Highlights</h2>
          <Slideshow images={group.slideshow} />
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-3 text-center">{group.title} – PDF Preview</h3>
            <div className={index % 2 === 0 ? 'backdrop-blur-md bg-white/20 p-4 rounded-xl' : 'bg-white/10 p-4 rounded-xl'}>
              <PDFPreview pages={group.pdfPreviews} />
            </div>
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center lg:flex-row justify-between px-8">
          {/* Profile Section with Multiple Seamless Portraits */}
          <div className="flex items-center mb-6 lg:mb-0 space-x-4">
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
            <p className="text-lg">&copy; 2025 Irish s Portfolio. All rights reserved.</p>
            <p className="text-sm mt-2">
              Email: <a href="mailto:irish@example.com" className="text-blue-400 hover:text-blue-600">irish@example.com</a>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-6 lg:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-100">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-100">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-100">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
