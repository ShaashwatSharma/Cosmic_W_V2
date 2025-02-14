import { useNavigate } from "react-router-dom"
import '../App.css';
import '../assets/fonts/font.css';

import BlogNav from "../components/blogComponents/blognav"
import Footer from "../components/footer";
import Stats from "../components/profileComponents/stats"
import BlogCard from "../components/blogComponents/blogcard";
import SubList from "../components/profileComponents/mysub"


import profileUrl from "../assets/abhijeet.jpg"

export const Profile=()=>{

  // Get Submissions

  // Get Submission dates
  const currentDate = new Date();

  const navigate=useNavigate(); 
  return (
    <>
    <div className="bg-black py-[1px]">
      
      <BlogNav />
      
      <div className="flex flex-col h-fit p-8 py-0">
        {/*Profile Card Starts*/ }
        <div className="flex flex-col profile-card glass-new rounded-[15px] h-fit p-5 w-full items-center justify-center text-white">

        {/* Edit Button  */}
        <div className="flex p-2 absolute right-2 top-2 items-center justify-center bg-gray-600/20 rounded-md hover:cursor-pointer">
            <svg className="feather feather-edit" fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            <p className="text-xs font-[Montserrat]">Edit</p>
        </div>

        {/* Profile Picture  */}
        <div className="flex w-16 h-16 rounded-full ring-2 ring-purple-700 overflow-hidden items-center justify-center">
            <div className="w-14 h-14 rounded-full" style={{
                    backgroundImage: `url(${profileUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
            </div>
        </div>

        {/* User Details  */}
        <div className="details flex flex-col items-center justify-center">
                <p className="font-[Unbounded] m-2">Abhijeet Srivastava</p>
                <p className="lg:mx-16 md:mx-4 text-center font-[Montserrat] text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet voluptatum, culpa voluptates officiis unde quos dolor ipsam repellat porro ullam veniam placeat, facere sed incidunt blanditiis tenetur impedit temporibus debitis sequi! Quasi aliquam eum assumenda eos odio, distinctio maiores fugiat, tempora sit, mollitia cupiditate. Ab tempore culpa quia quidem a.</p>
        </div>

        </div>
        {/* Profile Card Ends */ }
        
        <Stats />
        
        {/* Submissions Container Starts */}
        <div className="yoursub flex flex-col bg-zinc-900 ring-1 ring-zinc-800 rounded-xl h-fit overflow-hidden ">
            <div className="sub-title text-white p-4 font-[Unbounded] bg-black/80 w-full h-fit">Your Submissions</div>
            
            {/* Submissions List Container */}
            <div className="flex flex-col divide-y-[1px] divide-zinc-500/70">
              <SubList name="Geminid Meteor Shower 2024: When and Where to Watch" subDate={ currentDate }/>
              <SubList name="Unveiling the Secrets of the Milky Way: New Discoveries" subDate={ currentDate }/>
              <SubList name="AI in Space: Revolutionizing Space Exploration" subDate={ currentDate }/>
              <SubList name="The Rise of CubeSats: Small Satellites with Big Potential" subDate={ currentDate }/>
              <SubList name="Lucy Spacecraft Skims Earth: A 6-Year Mission to Explore Asteroids" subDate={ currentDate }/>
            </div>
        </div>
        {/* Submissions Container Ends */}
        
        {/* Liked Container Starts */}
        <div className="yoursub flex flex-col bg-zinc-900 ring-1 ring-zinc-800 rounded-xl h-fit overflow-hidden my-8">
            <div className="sub-title text-white p-4 font-[Unbounded] bg-black/80 w-full h-fit">Your Liked Blogs</div>
            
            {/* Submissions List Container */}
            <div className="flex flex-col divide-y-[1px] divide-zinc-500/70">
              <SubList name="Lucy Spacecraft Skims Earth: A 6-Year Mission to Explore Asteroids" subDate={ currentDate }/>
              <SubList name="Geminid Meteor Shower 2024: When and Where to Watch" subDate={ currentDate }/>
              <SubList name="The Rise of CubeSats: Small Satellites with Big Potential" subDate={ currentDate }/>
              <SubList name="AI in Space: Revolutionizing Space Exploration" subDate={ currentDate }/>
              <SubList name="Unveiling the Secrets of the Milky Way: New Discoveries" subDate={ currentDate }/>
            </div>
        </div>
        {/* Liked Container Ends */}




      </div>

      <Footer/>

    </div>
    </>
  )
}