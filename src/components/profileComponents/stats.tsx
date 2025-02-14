import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Stats: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            
        <div className="flex flex-wrap justify-center mt-4">
            <div className="flex flex-col items-center justify-center glass-new w-60 h-60 m-4 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 20 20" fill="currentColor" className="h-40 text-gray-600/20 hover:text-blue-700/40 hover:h-44 ease-in-out duration-300">
                <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                </svg>
                <p className="font-[Unbounded] text-xl pt-2 text-gray-300">14</p>
            </div>

            <div className="flex flex-col items-center justify-center glass-new w-60 h-60 m-4 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 20 19" fill="currentColor" className="h-40 text-gray-600/20 hover:text-red-700/40 hover:h-44 ease-in-out duration-300">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
                <p className="font-[Unbounded] text-xl pt-2 text-gray-300">14</p>
            </div>

            <div className="flex flex-col items-center justify-center glass-new w-60 h-60 m-4 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 24 19" fill="currentColor" className="h-40 text-gray-600/20 hover:text-gray-400/40 hover:h-44 ease-in-out duration-300">
                    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
                </svg>
                <p className="font-[Unbounded] text-xl pt-2 text-gray-300">200</p>
            </div>
            
            <div className="flex flex-col items-center justify-center glass-new w-60 h-60 m-4 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 24 20" fill="currentColor" className="h-40 text-gray-600/20 hover:text-orange-400/40 hover:h-44 ease-in-out duration-300">
                <path fill-rule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z" clip-rule="evenodd" />
                </svg>
                <p className="font-[Unbounded] text-xl pt-2 text-gray-300">3</p>
            </div>
            
            <div className="flex flex-col items-center justify-center glass-new w-60 h-60 m-4 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 24 20" fill="currentColor" className="h-36 text-gray-600/20 hover:text-blue-400/40 hover:h-40  ease-in-out duration-300">
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                </svg>
                <p className="font-[Unbounded] text-xl pt-2 text-gray-300">22</p>
            </div>
        </div>
        </>
    );
};

export default Stats;
