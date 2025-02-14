import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

import ProfileAvatar from './profile';

const DropDown: React.FC = () => {
    // Get Full Name of User
    const fullName = "Abhijeet Srivastava";
    const userEmail = "abhijeet.afk@gmail.com";
    const [isAuthenticated, setIsAuthenticated] = useState(false); 

    const navigate = useNavigate();
    return (
        <>
            <div
                    id="menu"
                    className="absolute right-8 mt-[-30px] w-fit min-w-48  bg-white rounded-lg shadow-lg dark:bg-gray-800 z-50 font-light overflow-hidden"
                >
                    <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Home</Link>
                    <Link to="/blogs" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Blogs</Link>
                    <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">News</div>
                    <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">About</div>
                    <div className="border-t border-gray-300 dark:border-gray-700 my-2"></div>
                    
                    {isAuthenticated ? (
                        <div className="flex p-3 pt-1 justify-between">
                            <ProfileAvatar />
                            <div className="flex flex-col text-gray-400 text-[13px] pl-2 justify-center">
                                <p>{ fullName }</p>
                                <p>{ userEmail }</p>
                            </div>
                        </div>
                        
                    ) : (
                        <>
                            <Link to="/signup" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Sign Up</Link>
                            <Link to="/signin" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Login</Link>  
                        </>
                    )}
                </div>
        </>
    );
};
export default DropDown;
