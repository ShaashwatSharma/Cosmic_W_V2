import React from 'react';
import { useNavigate } from "react-router-dom";


const Team: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            {/* Team Section Starts */}
        <div className="section flex flex-col text-center h-fit backdrop-blur-md my-10 bg-[#10162e] justify-center overflow-hidden">
          <div className="sec-g-contain overflow-hidden m-0 w-full h-[200%] flex justify-center">
            <div className="sec-glow blur-3xl" />
          </div>
          <div className="shead m-2">
            <h1 className="text-4xl font-bold font-[Lexend] text-white my-4">
              We are a happy, small team
            </h1>
            <p className="text-white text-opacity-70 mb-10 px-20 font-[Lexend]">
              Fueling creativity and innovation, our team embraces challenges to
              deliver stellar solutions that redefine the digital universe.
            </p>
          </div>
          {/* Members Section Starts */}
          <div className="team-container flex flex-wrap w-full h-full justify-center items-center p-5">
            {/* Member 1 */}
            <div className="member flex  w-[295px] h-fit p-3 justify-start items-center rounded-lg backdrop-blur-xl mx-3 mb-5 /15 hover:bg-white/5 ease-in duration-200">
              <div className="pfp flex rounded-full h-16 w-16 bg-[url('src/assets/members/abhijeet.jpg')] bg-cover grayscale" />
              <div className="mem-info flex flex-col m-3 items-start">
                <p className="member-name text-lg text-white">
                  Abhijeet Srivastava
                </p>
                <p className="member-desc text-[#720e9e]">Software Engineer</p>
              </div>
            </div>
            {/* Member 2 */}
            <div className="member flex  w-[295px] h-fit p-3 justify-start items-center rounded-lg backdrop-blur-xl mx-3 mb-5 /15 hover:bg-white/5 ease-in duration-200">
              <div className="pfp flex rounded-full h-16 w-16 bg-[url('src/assets/members/shaashwat.jpg')] bg-cover grayscale" />
              <div className="mem-info flex flex-col m-3 items-start">
                <p className="member-name text-lg text-white">
                  Shaashwat Sharma
                </p>
                <p className="member-desc text-[#720e9e]">MERN Engineer</p>
              </div>
            </div>
            {/* Member 3 */}
            <div className="member flex  w-[295px] h-fit p-3 justify-start items-center rounded-lg backdrop-blur-xl mx-3 mb-5 /15 hover:bg-white/5 ease-in duration-200">
              <div className="pfp flex rounded-full h-16 w-16 bg-[url('src/assets/members/abhishek-tripathi.jpg')] bg-cover grayscale" />
              <div className="mem-info flex flex-col m-3 items-start">
                <p className="member-name text-lg text-white">
                  Abhishek Tripathi
                </p>
                <p className="member-desc text-[#720e9e]">Backend Developer</p>
              </div>
            </div>
            {/* Member 4 */}
            <div className="member flex  w-[295px] h-fit p-3 justify-start items-center rounded-lg backdrop-blur-xl mx-3 mb-5 /15 hover:bg-white/5 ease-in duration-200">
              <div className="pfp flex rounded-full h-16 w-16 bg-[url('src/assets/members/Shivanash.jpg')] bg-cover grayscale " />
              <div className="mem-info flex flex-col m-3 items-start">
                <p className="member-name text-lg text-white">
                  Shivansh Rastogi
                </p>
                <p className="member-desc text-[#720e9e]">Software Engineer</p>
              </div>
            </div>
            {/* Member 5 */}
            <div className="member flex  w-[295px] h-fit p-3 justify-start items-center rounded-lg backdrop-blur-xl mx-3 mb-5 /15 hover:bg-white/5 ease-in duration-200">
              <div className="pfp flex rounded-full h-16 w-16 bg-[url('src/assets/members/kuldeep-gaud.jpg')] bg-cover grayscale" />
              <div className="mem-info flex flex-col m-3 items-start">
                <p className="member-name text-lg text-white">Kuldeep Gaud</p>
                <p className="member-desc text-[#720e9e]">React Developer</p>
              </div>
            </div>
            {/* Member 6 */}
            <div className="member flex  w-[295px] h-fit p-3 justify-start items-center rounded-lg backdrop-blur-xl mx-3 mb-5 /15 hover:bg-white/5 ease-in duration-200">
              <div className="pfp flex rounded-full h-16 w-16 bg-[url('src/assets/members/sudhanshu.jpg')] bg-cover grayscale" />
              <div className="mem-info flex flex-col m-3 items-start">
                <p className="member-name text-lg text-white">
                  Sudhanshu Singh
                </p>
                <p className="member-desc text-[#720e9e]">
                  Full Stack Developer
                </p>
              </div>
            </div>
            {/* Member 7 */}
            <div className="member flex  w-[295px] h-fit p-3 justify-start items-center rounded-lg backdrop-blur-xl mx-3 mb-5 /15 hover:bg-white/5 ease-in duration-200">
              <div className="pfp flex rounded-full h-16 w-16 bg-[url('src/assets/members/anonamus2.jpg')] bg-cover grayscale" />
              <div className="mem-info flex flex-col m-3 items-start">
                <p className="member-name text-lg text-white">
                  Aditya Pratap Singh
                </p>
                <p className="member-desc text-[#720e9e]">IIT-BHU</p>
              </div>
            </div>
            {/* Member 8 */}
            <div className="member flex  w-[295px] h-fit p-3 justify-start items-center rounded-lg backdrop-blur-xl mx-3 mb-5 /15 hover:bg-white/5 ease-in duration-200">
              <div className="pfp flex rounded-full h-16 w-16 bg-[url('src/assets/members/anonamus2.jpg')] bg-cover filter grayscale-[50%] " />
              <div className="mem-info flex flex-col m-3 items-start">
                <p className="member-name text-lg text-white">Anonymous</p>
                <p className="member-desc text-[#720e9e]">Software Engineer</p>
              </div>
            </div>
            {/* Members Section Ends */}
            </div>
          </div>
          {/* Team Section Ends */}
        </>
    );
};
export default Team;
