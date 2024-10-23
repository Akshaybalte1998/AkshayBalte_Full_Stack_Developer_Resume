import React from 'react';
import { useMediaQuery } from 'react-responsive';
import heroImage from "../../assets/images/akshay.png";

const UserInterface = () => {
  // Media queries for responsive design
  const isMobileDevice = useMediaQuery({ query: "(max-width: 479px)" });
  const isTabletOrAbove = useMediaQuery({ query: "(min-width: 480px)" });
  const isLaptopOrAbove = useMediaQuery({ query: "(min-width: 1024px)" });

  // Background color classes based on device type
  const backgroundColorClass = isMobileDevice
    ? 'bg-purple-200' // Light purple for mobile
    : isTabletOrAbove
    ? 'bg-teal-200' // Light teal for tablets
    : isLaptopOrAbove
    ? 'bg-orange-200' // Light orange for laptops and above
    : 'bg-white'; // Default background color

  return (
    <section className={`${backgroundColorClass} text-gray-800 py-16`} id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h5 className="text-gray-600 font-semibold text-lg mb-2">Hello, Welcome</h5>
            <h1 className="text-gray-900 font-extrabold text-3xl md:text-4xl leading-tight mb-4">
              I am Akshay Balte <br />
              <span className="text-purple-600 text-2xl md:text-3xl">Software Developer</span>
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 mb-8">
              <a href="#contact" aria-label="Hire me">
                <button 
                  className="bg-purple-500 text-white font-semibold flex items-center gap-2 px-5 py-2 rounded-lg border-none cursor-pointer transition-transform duration-300 ease-in hover:bg-purple-600 transform hover:scale-105 shadow-lg"
                >
                  <i className="ri-mail-fill" aria-hidden="true"></i> Let's Talk
                </button>
              </a>
              <a 
                href="#skills" 
                className="text-purple-500 text-lg font-semibold border-b-2 border-purple-500 hover:text-purple-600 transition-colors duration-300"
                aria-label="View Core Strengths"
              >
                Core Strengths
              </a>
            </div>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              <span className="mr-2"><i className="ri-command-fill" aria-hidden="true"></i></span>
              I build and code full-stack applications with a focus on simplicity and user experience. As a passionate Full Stack Developer, 
              I have strong skills in both front-end and back-end technologies. Known for my hard work and clear communication, I’m dedicated to creating effective and user-friendly software. 
              I thrive in collaborative environments and am eager to use my skills to take on new challenges and drive innovation. 
              Let’s connect and explore how we can work together!
            </p>
            <div className="text-gray-700 text-base md:text-lg">
              <span className="text-purple-500 font-semibold">Contact:</span>
              <div>
                <a 
                  href="mailto:balteakshay1998@gmail.com" 
                  className="text-purple-500 font-semibold hover:text-purple-600 transition-colors duration-300"
                  aria-label="Email Akshay Balte"
                >
                  <i className="ri-mail-line" aria-hidden="true"></i> balteakshay1998@gmail.com
                </a>
              </div>
              <div>
                <a 
                  href="https://www.linkedin.com/in/akshay-balte-developer/" 
                  className="text-purple-500 font-semibold hover:text-purple-600 transition-colors duration-300"
                  aria-label="Visit LinkedIn Profile"
                >
                  <i className="ri-linkedin-box-fill" aria-hidden="true"></i> LinkedIn Profile
                </a>
              </div>
              <div>
                <a 
                  href="tel:7447686701" 
                  className="text-purple-500 font-semibold hover:text-purple-600 transition-colors duration-300"
                  aria-label="Call Akshay Balte"
                >
                  <i className="ri-phone-line" aria-hidden="true"></i> 7447686701
                </a>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img 
              src={heroImage} 
              alt="Portrait of Akshay Balte" 
              className="w-1/2 md:w-2/3 rounded-lg shadow-2xl border-4 border-purple-400 transition-transform duration-300 transform hover:scale-105" 
              style={{ maxWidth: '300px' }} // Adjust image size
              loading="lazy" // Lazy loading for performance
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInterface;
