import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogNav: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = (event: React.MouseEvent) => {
        event.stopPropagation();
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        if (isMenuOpen) setIsMenuOpen(false);
    };

    return (
        <>
        <div
            className="nav-bar flex backdrop-blur-lg backdrop-saturate-[180%] bg-[rgba(17,25,40,0.45)] rounded-lg border-[rgba(255,255,255,0.125)] h-[58px] p-5 m-5  border-[1px] border-black justify-between items-center relative z-50 overflow-hidden"
            onClick={closeMenu}
        >
            <div className="glow-contain blur-lg absolute">
                <div className="glow"></div>
            </div>
            <div className="brand-logo">
                <p className="font-[Unbounded] text-white relative z-10">Cosmic Horizons</p>
            </div>
            <div className="cont justify-between w-1/3 hidden md:flex">
                <Link to="/" className="text-white font-[Montserrat] cursor-pointer hover:opacity-70">Home</Link>
                <Link to="/blog" className="text-white font-[Montserrat] cursor-pointer hover:opacity-70">Blogs</Link>
                <div className="text-white font-[Montserrat] cursor-pointer hover:opacity-70">News</div>
                <div className="text-white font-[Montserrat] cursor-pointer hover:opacity-70">About</div>
            </div>
            <button
                type="button"
                onClick={() => (window.location.href = '/signin')}
                className="hidden md:block text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-sm rounded-full text-sm px-5 py-1 text-center hover:scale-105 transition-all duration-300 font-[Montserrat]"
            >
                Sign In
            </button>
            <div className="md:hidden relative">
                <button id="hamburger" className="text-white focus:outline-none" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </div>
        
        {isMenuOpen && (
            <div id="menu" className="absolute  right-8 mt-[-30px] w-48 bg-white rounded-lg shadow-lg dark:bg-gray-800 z-50 font-light overflow-hidden">
                <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Home</Link>
                <Link to="/blog" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Blogs</Link>
                <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">News</div>
                <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">About</div>
                <div className="border-t border-gray-300 dark:border-gray-700 my-2"></div>
                <Link to="/signup" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Sign Up</Link>
                <Link to="/signin" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Sign In</Link>
            </div>
        )}
        </>
    );
};

export default BlogNav;
