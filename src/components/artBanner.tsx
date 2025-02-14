import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ArtBanner: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            {/* Articles Section Starts */}
        <div className="art-section flex flex-col w-full h-fit font-[Montserrat] backdrop-blur-md my-12 p-5 bg-gradient-to-br from-black to-gray-900">
          <div className="art-section-bottom absolute left-0 top-0 w-full h-full"></div>
          {/* Button */}
          <button
            type="button"
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={() => navigate("/blog")}
          >
            Start Reading
          </button>
          {/* Article Heading */}
          <div className="art-head flex w-full h-fit justify-center pt-4">
            {/* Typography  */}
            <div className="art-title text-zinc-300 h-full flex flex-col w-full justify-center items-center mb-5">
              <h1 className="text-4xl font-bold mb-6">
                Stay Updated: The Latest Space News, Astronomical Events, and
                More...
              </h1>
              <p className="text-lg text-gray-400 mb-10">
                Explore the wonders of the cosmos with our curated articles and
                updates.
              </p>
            </div>
          </div>
          {/* Article Container  */}
          <div className="art-container flex flex-wrap relative z-[-1] overflow-hidden">
            {/* Blog Card */}
            <div className="flex flex-col w-full md:w-1/3 px-4 mb-8">
              <div className="blog-card rounded-xl overflow-hidden shadow-lg bg-zinc-600/25">
                <img
                  src="src/assets/blog/lucy-spacecraft-nasa-trojan-asteroid.webp"
                  alt="Blog 1"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-gray-400 text-sm">Nov 13, 2024 • 7 min</p>
                  <h3 className="text-lg font-semibold mt-2 text-gray-300">
                    Lucy Spacecraft Skims Earth: A 6-Year Mission to Explore
                    Asteroids
                  </h3>
                  <a href="#" className="text-purple-500 mt-4 inline-block">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            {/* Blog Card */}
            <div className="flex flex-col w-full md:w-1/3 px-4 mb-8">
              <div className="blog-card  rounded-xl overflow-hidden shadow-lg bg-zinc-600/25">
                <img
                  src="src/assets/blog/geminid.jpg"
                  alt="Blog 3"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-gray-400 text-sm">Nov 4, 2024 • 7 min</p>
                  <h3 className="text-lg font-semibold mt-2 text-gray-300">
                    Geminid Meteor Shower 2024: When and Where to Watch
                  </h3>
                  <a href="#" className="text-purple-500 mt-4 inline-block">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            {/* Blog Card */}
            <div className="flex flex-col w-full md:w-1/3 px-4 mb-8">
              <div className="blog-card  rounded-xl overflow-hidden shadow-lg bg-zinc-600/25">
                <img
                  src="src/assets/blog/artemis.webp"
                  alt="Blog 2"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-gray-400 text-sm">Nov 12, 2024 • 4 min</p>
                  <h3 className="text-lg font-semibold mt-2 text-gray-300">
                    NASA’s Artemis Program: Progress on Returning Humans to the
                    Moon
                  </h3>
                  <a href="#" className="text-purple-500 mt-4 inline-block">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Articles Section Ends */}
        </>
    );
};

export default ArtBanner;
