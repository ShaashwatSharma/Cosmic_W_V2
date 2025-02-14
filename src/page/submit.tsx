import Footer from "../components/footer";

import '../App.css';
import BlogNav from "../components/blogComponents/blognav";
import MainBlog from "../components/blogComponents/mainblog";

import DynBlog from "../components/submitpage/dynamicBlog"

export const Submit=()=> {
    return (
      <>
        <div className="bg-black py-[1px]">  
        <BlogNav/>
        <DynBlog />
        <Footer />
  </div>
</>

    )
}