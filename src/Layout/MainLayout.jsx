import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import { useEffect } from "react";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
    const loc= useLocation()
    console.log(loc);
    useEffect(()=>{
        console.log(loc.pathname);
        
        if(loc.pathname === "/"){
            document.title = `Phone - Home`
        }else{
            document.title =`Phone - ${loc.pathname.replace("/","").charAt(0).toUpperCase()+ loc.pathname.slice(2)}`
        }
        if(loc.state){
            document.title = `${loc.state}`
        }
    },[loc])

  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="p-10 min-h-screen">
        <Outlet></Outlet>
      </div>
      <div className="">
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;
