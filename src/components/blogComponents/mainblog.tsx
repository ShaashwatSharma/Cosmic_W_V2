import React from 'react';

import geminidImg from '../../assets/blog/geminid.jpg';
import authorPfp from "../../assets/abhijeet.jpg"


const MainBlog: React.FC = () => {
    // Get Blog Title
    const blogTitle = "Geminid Meteor Shower 2024: When and Where to Watch";

    const content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nostrum cupiditate. Ab, deserunt. Illo magni neque dolor, quibusdam quae quaerat odio doloribus a maxime soluta laborum dolores recusandae molestias beatae architecto nesciunt saepe eveniet corrupti incidunt molestiae voluptatum! Explicabo sequi illum pariatur ipsam similique obcaecati voluptatum asperiores culpa harum velit, corporis iste labore rerum tempora quia dicta nesciunt consectetur neque qui debitis blanditiis inventore, totam facere! Minus sapiente repellendus sit pariatur, animi perferendis delectus odit aliquam saepe tempora laborum tempore provident beatae, illo nesciunt et? Sit nesciunt exercitationem sapiente quasi nisi? Cumque veniam dignissimos optio necessitatibus quos nihil ut perspiciatis assumenda est fuga deserunt harum possimus ab inventore reiciendis minima fugit, ullam quibusdam officia cum quo? Optio sequi quia sunt consequatur odit, in at molestias assumenda officiis earum repellat repudiandae eum laboriosam debitis nulla recusandae! Sunt laborum error molestiae ipsa magni reiciendis rerum vitae maiores animi sequi magnam quis, hic, porro architecto eaque odio accusantium eos, distinctio nam doloribus? Voluptas quas dignissimos officia eum minus suscipit, ut laboriosam nostrum cupiditate, beatae iure, harum mollitia? Repellat magnam sapiente repellendus doloremque laboriosam! Tempore quo esse, vel et, suscipit id, cumque praesentium enim sunt velit voluptas ullam atque reiciendis labore error ea animi itaque. Porro quisquam quas dolorem aperiam. Delectus cumque amet vel ipsum nulla suscipit esse quia quae veniam ad, voluptatem molestiae officiis. Accusamus vero voluptates ratione sequi ipsa nisi sed repellat eum, nemo nihil, blanditiis rerum. Et reiciendis tempora voluptates dolorem unde earum asperiores eaque reprehenderit distinctio dignissimos libero maxime totam sunt laborum velit at accusantium impedit, itaque soluta cum magni ducimus voluptas temporibus doloremque? Quaerat nemo amet praesentium consequuntur officia quis tempore voluptatibus nostrum! Ab cupiditate maiores illo ex, quibusdam voluptate? Praesentium natus voluptatum ullam culpa et quidem, a eligendi, sunt, corrupti quaerat vitae? Maiores expedita dolor dolorum ut rerum!";
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
            <div className="main-cont w-full text-white p-4 overflow-hidden">
                <div className="main-article flex flex-col w-full mb-8 font-[Montserrat] text-sm overflow-hidden">
                    <div className="blog-card rounded-xl overflow-hidden shadow-lg">
                    <img
                        src={ geminidImg }
                        alt="Blog 3"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        {/* Read Time  */}
                        <p className="text-gray-400 text-sm">{ formattedDate } • { readTime } min</p>
                        {/* Blog Title  */}
                        <h3 className="text-3xl font-semibold mt-4">
                        { blogTitle }
                        </h3>
                        {/* Blog Content  */}
                        <p className="content flex text-gray-400 pt-4">
                        { content }
                        </p>
                        <div className="details flex items-center  justify-between mt-6">
                        {/* Author Info */}
                        <div className="author flex items-center ">
                            <img
                            src={ authorPfp }
                            className="author-pfp w-12 h-12 rounded-full outline outline-2 outline-purple-600"
                            alt=""
                            />
                            <p className="author-name m-2 text-gray-200 w-16">
                            Abhijeet Srivastava
                            </p>
                        </div>
                        {/* Like Button  */}
                        <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px]">
                            <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            <div className="like mr-4 text-xl text-gray-600">❤︎</div>
                            <p className="likes-count text-lg">14</p>
                            </span>
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

        </>
    );
};
export default MainBlog;
