import { Appbar } from "../components/appbar"

export const Landing=()=>{
    return(
        <div className="bg-no-repeat bg-cover bg-center bg-fixed h-fit bg-[linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0.25)),url('src/assets/pexels-alexandrep-junior-7736062.jpg')] py-[1px]">
            <Appbar/>
           <div className="text-white">This is landing Page</div> 
        </div>
    )
}