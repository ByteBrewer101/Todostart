import React, { useState, useEffect } from "react";
import { Highlighted } from "./Highlighted";
import { CreateCard } from "./CreateTodo";
import { DisplayCard } from "./DisplayCard";
import { Modal } from "./Modal";

const Sidebar = () => {



  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    if (window.innerWidth < 640) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex ">
        
      {/* Sidebar */}
      <div
        className={`bg-emerald-200 text-black transition-transform duration-300  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-80 h-full fixed z-20`}
      >
        <div className="p-4">
          <h2 className="text-3xl font-bold px-2 ">Taskify</h2>
          <ul>
            <li className="flex items-center justify-center">
              <div className="w-44 h-44 bg-emerald-300 border-2 border-emerald-500  rounded-full flex items-center justify-center text-white mt-7 text-5xl ">
                U
              </div>
            </li>
            <li className="flex justify-center mt-2 text-xl font-semibold">
              Hey, user
            </li>

            <div className="w-full h-fit bg-white rounded-lg  px-2 py-1 mt-4">
              <Highlighted
                label={"hello"}
                active={activeIndex === 0}
                onClick={() => handleClick(0)}
              />
              <Highlighted
                label={"hello"}
                active={activeIndex === 1}
                onClick={() => handleClick(1)}
              />
              <Highlighted
                label={"hello"}
                active={activeIndex === 2}
                onClick={() => handleClick(2)}
              />
            </div>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 bg-emerald-500 transition-all duration-300 ${
          isOpen ? "ml-80" : "ml-0"
        } z-25` }
      >
        <div className="flex p-2">
        <button
          onClick={toggleSidebar}
          className=" p-2 ml-2 bg-emerald-200 border-2 border-emerald-500 rounded-lg hover:bg-emerald-600 hover:text-white transition ease-in-out duration-200 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          
        </button>
        <input type="text" className=" ml-4 px-4 w-72 bg-emerald-800 text-white rounded-lg border-0" placeholder="Search" />
        </div>
     
        
        
        <div className="bg-emerald-800  min-h-screen p-12 flex flex-col justify-center items-center gap-4">
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
        </div>
      </div>
      
      
    </div>
  );
};

export default Sidebar;
