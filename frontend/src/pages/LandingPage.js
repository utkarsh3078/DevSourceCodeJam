
import { GiCrystalWand } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Routes , Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import About from "./About";
import LandContent from "./LandContent";
import { useState } from "react";

function Land({setAuthented}) {

  // function ClickHandler(e){
  //   const element = e.target;
  //   element.classList.toggle("bg-white");
  //   element.classList.toggle("text-purple-400");
  // }
  const [count , setCount] = useState(0);

  return (
    <div className=" flex flex-col items-center h-screen w-screen ">
      <nav className='text-center flex w-[100%] h-[10%] bg-violet-700 text-white justify-between px-10 '> 
        <Link className=" text-white my-auto text-5xl " to="/">
          <GiCrystalWand className="hover:text-pink-400 duration-500 cursor-pointer " />
        </Link>
        <div className="w-[50%] flex justify-end gap-28 text-2xl m-3">
          <button className={ count==1 ? "hover:border-b-4 border-white text-2xl duration-100 p-2 rounded-lg bg-white text-purple-900 " : "hover:border-b-4 border-white duration-100 p-2 rounded-lg"} onClick={ () => {setAuthented(true)}}>Authented</button>
          <Link to="/signup" className={ count==1 ? "hover:border-b-4 border-white duration-100 p-2 rounded-lg bg-white text-purple-900 " : "hover:border-b-4 border-white duration-100 p-2 rounded-lg"} onClick={ () =>  setCount(1)}>SignUp</Link>
          <Link to="/login" className={ count==2 ? "hover:border-b-4 border-white duration-100 p-2 rounded-lg bg-white text-purple-900 " : "hover:border-b-4 border-white duration-100 p-2 rounded-lg"} onClick={ () =>  setCount(2)}>Login</Link>
          <Link to="/about" className={ count==3 ? "hover:border-b-4 border-white duration-100 p-2 rounded-lg bg-white text-purple-900 " : "hover:border-b-4 border-white duration-100 p-2 rounded-lg"} onClick={ () =>  setCount(3)}>About</Link>
        </div>        
      </nav>
      <Routes>
          <Route path="/" element={<LandContent/>}></Route>
          <Route path="/about" element={<About/>} ></Route>
          <Route path="/login" element={<Login/>} setCount={setCount} count={count} ></Route>
          <Route path="/signup" element={<SignUp/>} setCount={setCount} count={count} ></Route>
      </Routes>
    </div>
  );
}

export default Land;