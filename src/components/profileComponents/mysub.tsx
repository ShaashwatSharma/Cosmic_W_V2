import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface SubListProps {
    name: string;
    subDate: Date;
}

const SubList: React.FC<SubListProps> = (props) => {
    // Function to convert date format
    const convertDateFormat = (dateString: string): string => {
        const [day, month, year] = dateString.split('/').map(Number);
        const monthNames = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        return `${monthNames[month - 1]} ${day}, ${year}`;
    };
    
    const navigate = useNavigate();
    return (
        <>
            <div className="flex w-full h-12 justify-between font-[Montserrat]">
                <p className="text-gray-200 py-2 px-4 flex  items-center ">{ props.name }</p>
                <div className="w-fit flex items-center justify-center border-l-[1px] border-zinc-500/70">
                    <p className="sub-date text-gray-400 p-2">{ convertDateFormat(props.subDate.toLocaleDateString()) }</p>
                </div>
            </div>
        </>
    );
};

export default SubList;
