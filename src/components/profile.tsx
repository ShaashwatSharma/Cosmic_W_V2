import React from 'react';
import { useNavigate } from "react-router-dom";

import profileUrl from "../assets/abhijeet.jpg"

const ProfileAvatar: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex w-11 h-11 rounded-full ring-2 ring-purple-700 overflow-hidden items-center justify-center">
                <div className="w-10 h-10 rounded-full" style={{
                    backgroundImage: `url(${profileUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                </div>

            </div>
        </>
    );
};
export default ProfileAvatar;
