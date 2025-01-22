import React from 'react';
import { useNavigate } from "react-router-dom";


const BlogHero: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            {/* Hero Section Starts */}
            <div className="backdrop-blur-[90px] backdrop-saturate-[150%] bg-[rgba(17,25,40,0.25)] rounded-[12px] border border-[rgba(255,255,255,0.125)] flex w-[85vw] h-[75vh] mx-auto  text-white py-20 bg-gradient-to-b from-purple-900/5 to-purple-900/25">
                {/* Breadcrumb Navigation */}
                <nav className="absolute top-5 left-5 text-sm text-gray-300  font-[Lexend] font-light">
                <a href="index.html" className="hover:text-purple-500">
                    Home
                </a>
                <span className="mx-2 text-zinc-500">&gt;</span>
                <span>Blogs</span>
                </nav>
                {/* Hero Section Content */}
                <div className="hero-cont container mx-auto text-center p-5 font-[Hanken Grotesk]">
                <div className="hero-title h-full flex flex-col w-full justify-center items-center mb-5">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Stay Updated: The Latest Space News, Astronomical Events, and More...
                    </h1>
                    <p className="text-lg text-gray-400 mb-10">
                    Explore the wonders of the cosmos with our curated articles and
                    updates.
                    </p>
                </div>
                <div className="arrow-cont">
                    <a
                    href="#articles"
                    className="text-purple-500 hover:text-purple-700 transition-all"
                    >
                    <svg
                        className="w-10 h-10 mx-auto animate-bounce opacity-80"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1000 1000"
                        fill="currentColor"
                    >
                        <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="m500 .456c-151 0-273 122-273 273v454c0 151 122 273 273 273s273-122 273-273v-454c0-151-122-273-273-273zm236 727c0 131-106 237-236 237s-236-106-236-237v-454c0-131 106-237 236-237s236 106 236 237zm-99 39-129 130c-5 4-11 4-16 0l-129-130c-5-4-5-11 0-15l26-26c4-4 11-4 15 0l89 89c4-4 11-4 15 0l89-89c4-4 11-4 15 0l26 26c4 4 4 11-1 15z"
                        />
                    </svg>
                    </a>
                </div>
                </div>
            </div>
            {/* Hero Section Ends */}
        </>
    );
};
export default BlogHero;
