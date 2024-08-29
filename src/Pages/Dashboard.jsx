import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { Modal } from "../Components/Modal";

export function Dashboard() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);



  return (
    <div className="relative min-h-screen">
      <div className="">
        <Sidebar />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />

      

      {/* Floating Button */}
      <button      onClick={openModal} className=" hover:rotate-90 fixed bottom-20 right-20 w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center z-50 hover:bg-emerald-600 transition duration-200">
     
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
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>

    </div>
  );
}
