import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; // Replace with your desired icon

export function Highlighted({ label, active, onClick }) {
    return (
        <button 
            onClick={onClick}
            className={`w-full my-2 rounded-lg p-2 flex items-center hover:bg-emerald-100 transition ease-in-out duration-200 ${active ? 'bg-emerald-200' : 'bg-white'}`}
        >
            <FontAwesomeIcon icon={faStar} className="mr-2" /> {/* Adjust the icon as needed */}
            <span className="text-left">{label}</span>
        </button>
    );
}