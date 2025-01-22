import { useNavigate } from "react-router-dom"
import '../App.css';
import '../assets/fonts/font.css';

import Navbar  from "../components/navbar";
import Footer from "../components/footer";
import IndexHero from "../components/indexHero";
import ArtBanner from "../components/artBanner";
import Featured from "../components/Featured";
import Team from "../components/team";

export const Index=()=>{
  const navigate=useNavigate(); 
  return (
    <>
    <div className="bg-no-repeat bg-cover bg-center bg-fixed h-fit bg-[linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0.25)),url('src/assets/pexels-alexandrep-junior-7736062.jpg')] py-[1px]">
      
      <Navbar />
      <IndexHero />
      <ArtBanner />
      <Featured />
      <Team/>
      <Footer/>

    </div>
    </>
  )
}