import { useState, useRef, useEffect } from "react";
import geminidImg from "../../assets/blog/geminid.jpg";
import authorPfp from "../../assets/abhijeet.jpg";

export default function DynBlog() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [readTime, setReadTime] = useState(0); // Adjust dynamically
    const textareaRef = useRef(null);
  
    useEffect(() => {
      const textarea = textareaRef.current as HTMLTextAreaElement | null;
      if (textarea) {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    }, [content]);
  
    useEffect(() => {
      // Calculate read time whenever content changes
      const words = content.trim().split(" ").length; // Count words
      console.log(words);
      const estimatedReadTime = Math.ceil(words /150); // Assuming 200 words/min
      setReadTime(estimatedReadTime || 0); // Set read time or 0 if content is empty
    }, [content]);

  
    const convertDateFormat = (dateString: string): string => {
      const [day, month, year] = dateString.split(":").map(Number);
      const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];
      return `${monthNames[month - 1]} ${day}, ${year}`;
    };
  
    const getCurrentDate = (): string => {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-based
      const year = now.getFullYear();
      return `${day}:${month}:${year}`;
    };
  
    const inputDate = getCurrentDate(); // Generates today's date dynamically
    const formattedDate = convertDateFormat(inputDate);

  return (
    <div className="submit-container flex w-full p-4 px-8 pb-8 font-[Montserrat] text-sm">
      <div className="blog-card w-full rounded-xl overflow-hidden shadow-lg">
        <img src={geminidImg} alt="Blog" className="w-full h-48 object-cover" />
        <div className="p-4">
          <p className="text-gray-400 text-sm">{ formattedDate } • { readTime } min</p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-3xl font-semibold mt-4 bg-transparent text-white w-full focus:outline-none " placeholder="Click and Enter Title (10-50 Characters)"
          />
          <textarea
            ref={textareaRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="content flex w-full bg-transparent text-gray-400 pt-4 rounded-lg p-2 resize-none overflow-hidden focus:outline-none" placeholder="Write your blog content here (500-2000 characters)"
          />
          <div className="details flex items-center justify-between mt-6">
            <div className="author flex items-center ">
              <img
                src={authorPfp}
                className="author-pfp w-12 h-12 rounded-full outline outline-2 outline-purple-600"
                alt=""
              />
              <p className="author-name m-2 text-gray-200 w-16">Abhijeet Srivastava</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}