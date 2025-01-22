import React from 'react';

import geminidImg from '../../assets/blog/geminid.jpg';


const BlogCard: React.FC = () => {
    // Get Blog Title
    const blogTitle = "Geminid Meteor Shower 2024: When and Where to Watch";

    // Get Blog Estimated Read Time
    const readTime = 6;

    // Get Blog ID
    const blogId = 3;

    // Get Blog Thumbnail Url
    // const thumbUrl = "../.././assets/blog/geminid.jpg"

    // Function to convert date format
    const convertDateFormat = (dateString: string): string => {
        const [day, month, year] = dateString.split(':').map(Number);
        const monthNames = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        return `${monthNames[month - 1]} ${day}, ${year}`;
    };

    // Get date in DD:MM:YYYY format
    const inputDate = "04:11:2024";
    const formattedDate = convertDateFormat(inputDate);

    return (
        <>
            {/* Blog Card */}
            <div className="flex flex-col w-full md:w-1/3 px-4 mb-8">
                <div className="blog-card backdrop-blur-[16px] backdrop-saturate-[180%] bg-[rgba(29,17,40,0.2)] border border-[rgba(255,255,255,0.125)] rounded-xl overflow-hidden shadow-lg">
                    <img
                        src={ geminidImg } 
                        alt={`Blog ${ blogId }`}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <p className="text-gray-400 text-sm">{formattedDate} • {readTime} min</p>
                        <h3 className="text-lg font-semibold mt-2">
                            {blogTitle}
                        </h3>
                        <a
                            href="#"
                            className="text-purple-500 mt-4 inline-block"
                            onClick={() => location.href = 'article-1.html'}
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogCard;
