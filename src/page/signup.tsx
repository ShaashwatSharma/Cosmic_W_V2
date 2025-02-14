import axios from "axios";
import { ChangeEvent,useState } from "react"
import { useNavigate } from "react-router-dom";
import {DATABASE_URL} from "../Tsconfig"

export const Signup=()=> {
  const navigate=useNavigate();
  const [password2,setpassword2]=useState("")

      const [userSignup, setUserSignup] = useState({
        name: "user7",
        email: "user7@gmail.com",
        password: "abcd@1234",
        username: "user7",
        bio: "alpha beta omega sigma skibbidy ohio fanum tax"
      });

  async function sendRequest(){

    try{
        // if (userSignup.password1 !== password2) {
        //   alert('Warning: Passwords are not the same!');
        //   return;
        // }      
        console.log({msg:"before axios call"},userSignup)
        console.log("26")
        const response=await axios.post(`${DATABASE_URL}/api/v1/user/signup`,userSignup);
        console.log("27")
        const token=response.data.jwt;
        console.log("29")
        localStorage.setItem("token",`Bearer ${token}`)
        console.log("31")
        console.log({msg:"after axios call"},userSignup,{Token: "token"})
        console.log("33")
        navigate("/profile");
        // alert('stop')
    }catch(e){
        // alert the user that the request failed
        console.log("Hi from four")
        console.log(e)
        alert('Warning: Something went wrong please try again ');
    }
}


    return (
        <>
        <div className="bg-gradient-to-br from-slate-950/85 to-slate-950 flex items-center justify-center min-h-screen">
  <div className="w-full max-w-[450px] m-4 glass text-white rounded-lg p-8  font-[Montserrat] text-sm">
    <div className="welcome flex flex-col items-start" />
    <h2 className="text-3xl font-bold mb-4">Create Your Account</h2>
    <p className="text-gray-300 mb-6">
      Already have an account?
      <a
        href="/signin"
        className="text-purple-400 hover:underline hover:text-purple-500 transition-all duration-200"
      >
        Sign in
      </a>
      .
    </p>
    <form>
      <div className="mb-4">
        <label htmlFor="full-name" className="block text-sm font-medium mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="full-name"
          placeholder="John Doe"
          className="w-full px-4 py-2 bg-gray-800/50 text-white rounded-md ring-1 ring-gray-700 focus:ring-purple-500"
          onChange={(e) => {
            setUserSignup({
              ...userSignup,
              name: e.target.value,
            });
          }}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="name@company.com"
          className="w-full px-4 py-2 bg-gray-800/50 text-white rounded-md ring-1 ring-gray-700 focus:ring-purple-500"
          onChange={(e) => {
            setUserSignup({
              ...userSignup,
              email: e.target.value,
            });
          }}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="••••••••••"
          autoComplete="on"
          className="w-full px-4 py-2 bg-gray-800/50 text-white rounded-md ring-1 ring-gray-700 focus:ring-purple-500"
          onChange={(e) => {
            setUserSignup({
              ...userSignup,
              password: e.target.value,
            });
          }}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="confirm-password"
          className="block text-sm font-medium mb-1"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirm-password"
          placeholder="••••••••••"
          autoComplete="on"
          className="w-full px-4 py-2 bg-gray-800/50 text-white rounded-md ring-1 ring-gray-700 focus:ring-purple-500"
          onChange={(e) => {
            setpassword2(e.target.value);
          }}
        />
      </div>
      <button
        type="button"
        onClick={sendRequest}
        className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-medium py-2 rounded-md transition"
      >
        Sign Up
      </button>
    </form>
    <div className="mt-6 flex items-center justify-center">
      <span className="w-full h-px bg-gray-600" />
      <span className="px-3 text-gray-400 text-sm">or</span>
      <span className="w-full h-px bg-gray-600" />
    </div>
    <div className="mt-6 space-y-3">
      <button
        type="button"
        className="w-full flex items-center justify-center px-4 py-2 rounded-md shadow ring-1 ring-gray-500 bg-gray-800/50 text-white font-semibold hover:bg-gray-700"
      >
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          alt="Google"
          className="w-5 h-5 mr-2"
        />
        Sign up with Google
      </button>
      <button
        type="button"
        className="w-full flex items-center justify-center px-4 py-2 rounded-md shadow bg-black text-white font-semibold hover:bg-gray-700"
      >
        <img
          src="/apple-logo-svgrepo-com.svg"
          alt="Apple"
          className="w-5 h-5 mr-2 invert"
        />
        Sign up with Apple
      </button>
    </div>
  </div>
  </div>
</>
    )
}