import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import "../assets/fonts/font.css";


export const Appbar = () => {
  const navigate = useNavigate();

  return (
      <div>
          <div className='nav-bar flex h-[58px] p-5 m-5 rounded-lg backdrop-blur-lg border-[1px] border-black justify-between items-center relative z-50 overflow-hidden'>
        <div className="circle-contain blur-lg absolute">
        <div className="glow"/>

        </div>
        <div className="brand-logo">
          <p className="font-[Unbounded] text-white relative z-10">
            Cosmic Horizons
          </p>
        </div>
        <div className="cont flex justify-between w-1/3 hidden md:flex">
          <div
            className="text-white font-[Montserrat] cursor-pointer hover:opacity-70"
            onClick={() => navigate('/')}
          >
            Home
          </div>
          <div
            className="text-white font-[Montserrat] cursor-pointer hover:opacity-70"
            onClick={() => navigate('/blog')}
          >
            Blogs
          </div>
          <div className="text-white font-[Montserrat] cursor-pointer hover:opacity-70">
            News
          </div>
          <div className="text-white font-[Montserrat] cursor-pointer hover:opacity-70">
            About
          </div>
        </div>
        <button
          type="button"
          onClick={() => navigate('/signin')}
          className="hidden md:block text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-sm rounded-full text-sm px-5 py-1 text-center hover:scale-105 transition-all duration-300 font-[Montserrat]"
        >
          Sign In
        </button>
        <div className="md:hidden relative">
          <button id="hamburger" className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
