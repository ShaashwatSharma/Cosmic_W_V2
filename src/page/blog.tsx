import Navbar  from "../components/navbar";
import Footer from "../components/footer";

import '../App.css';

import BlogHero from "../components/blogComponents/bloghero";
import BlogNav from "../components/blogComponents/blognav";
import BlogCard from "../components/blogComponents/blogcard";


export const Blog=()=> {
    return (
      <>
        <div className="bg-black py-[1px]">  
        <BlogNav/>
        <BlogHero/>

        {/* Articles Section Starts */}
        <div
          id="articles"
          className="max-w-screen-xl mx-auto p-6 text-white font-[Montserrat] text-sm"
        >
          {/* Category and Search */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex flex-wrap space-x-4 w-[60%]">
              <a href="#" className="text-purple-500">
                All
              </a>
              <a href="#" className="hover:text-purple-500">
                News
              </a>
              <a href="#" className="hover:text-purple-500">
                Upcoming Events
              </a>
              <a href="#" className="hover:text-purple-500">
                Astrophysics
              </a>
              <a href="#" className="hover:text-purple-500">
                Exoplanets
              </a>
              <a href="#" className="hover:text-purple-500">
                Technology
              </a>
              <a href="#" className="hover:text-purple-500">
                Missions
              </a>
            </div>
            <div className="search-bar ml-auto">
              <input
                type="text"
                placeholder="Search"
                className=" bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          {/* Blog Posts */}
          <div className="flex flex-wrap">

            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />

          </div>
        </div>
        {/* Articles Section Ends */}
        <Footer />
  </div>
</>

    )
}