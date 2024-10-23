import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gradient-to-b from-[#12141e] to-[#1b1e29] py-12'>
      {/* Top section with quote and call to action */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Left: Quote and Button */}
          <div className="text-center sm:text-left">
            <h4 
              className='text-3xl sm:text-4xl lg:text-5xl text-white font-bold italic tracking-wide leading-snug mb-5 animate-pulse'
              aria-label="Quote: End is the beginning"
            >
              ॥ अंतः अस्ति प्रारंभ ॥
            </h4>
            <a href="#contact" aria-label="Contact me for hiring">
  <button class="bg-orange-500 text-white font-semibold flex items-center justify-center gap-2 py-3 px-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:translate-x-2 hover:scale-105">
    <i class="ri-mail-fill text-lg"></i> Let's Talk
  </button>
</a>




          </div>

          {/* Right: Address and Social Links */}
          <div className='text-center sm:text-right'>
            <div className='flex justify-center sm:justify-end gap-4 mt-6'>
              <span className='text-gray-300 text-sm font-medium'>
                Follow Me:
              </span>
              <a 
                href="https://www.linkedin.com/in/akshay-balte-developer/" 
                className='w-10 h-10 bg-gray-800 hover:bg-pink-500 text-gray-300 hover:text-white p-2 rounded-full flex items-center justify-center transition-all duration-300 relative group'
                aria-label="Visit my LinkedIn profile"
              >
                <i className="ri-linkedin-fill"></i>
                <span className='absolute hidden group-hover:block bg-gray-900 text-white text-xs rounded px-2 py-1 -top-8 left-1/2 transform -translate-x-1/2'>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/Akshaybalte1998" 
                className='w-10 h-10 bg-gray-800 hover:bg-pink-500 text-gray-300 hover:text-white p-2 rounded-full flex items-center justify-center transition-all duration-300 relative group'
                aria-label="Visit my GitHub profile"
              >
                <i className="ri-github-fill"></i>
                <span className='absolute hidden group-hover:block bg-gray-900 text-white text-xs rounded px-2 py-1 -top-8 left-1/2 transform -translate-x-1/2'>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className='mt-10'>
  <ul className='flex flex-wrap justify-center sm:justify-end space-x-6 text-gray-400 text-lg font-semibold'>
    <li><a href="#home" className='hover:text-white transition duration-300'>Home</a></li>
    <li><a href="#about" className='hover:text-white transition duration-300'>About</a></li>
    <li><a href="#services" className='hover:text-white transition duration-300'>Educational Journey & Projects</a></li>
    <li><a href="#skills" className='hover:text-white transition duration-300'>Core Strengths</a></li>
    <li><a href="#portfolio" className='hover:text-white transition duration-300'>Certifications</a></li>
    <li><a href="#contact" className='hover:text-white transition duration-300'>Let's Talk</a></li>
  </ul>
</div>

      </div>

      {/* Bottom section with name and copyright */}
      <div className='bg-[#1b1e29] py-6 mt-10'>
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm sm:text-base text-center sm:text-right mt-4 sm:mt-0">
              © {currentYear} Akshay Balte · All rights reserved · Legal Notice and Privacy Policy · Cookies Policy
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
