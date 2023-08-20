// import  {Link } from 'react-router-dom'
import { useState } from "react";
import { AiOutlineClose,AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Topbar = () => {
  const [openDrawer, setDrawer] = useState(false);
  return (
    <div className="w-full  z-50 sticky top-0 flex bg-white justify-between md:justify-center px-5 md:px-20 border-b-2 border-slate-50 py-6  md:p-7 items-center ">
    <div className="flex gap-4 justify-center items-center ">

      {!openDrawer ? (
        <AiOutlineMenu alt="menu" className="md:hidden" onClick={() => setDrawer(!openDrawer)}/>
       
      ) : (
        <AiOutlineClose
          className="text-2xl md:hidden"
          onClick={() => setDrawer(!openDrawer)}
        />
      )}
      {openDrawer && (
        <div className="absolute md:hidden z-50  p-0 left-0 bottom-0 flex flex-col justify-normal md:justify-center items-center gap-7 bg-slate-50 top-[78px] h-[calc(100vh-89.6px)] w-full">
          <Link  to={"/"}>
          
            <h1 className="font-medium text-blue-900 p-3 focus:rounded-md focus:border-2 focus:border-black ">
              My Contacts
            </h1>
           </Link>
          <Link to={"/charts-maps"}>
           
            <h1 className="font-medium text-blue-900 p-3 focus:rounded-md focus:border-2 focus:border-black ">
              
              My Connection
            </h1>
          </Link>
        </div>
      )}
      
    </div>

   
        <h1 className="text-center mx-auto text-2xl font-bold">Contact Mangement</h1>
    
      
      
    </div>
  );
};

export default Topbar;
