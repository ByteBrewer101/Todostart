import React, { useState } from 'react';

export function Modal({ isOpen, onClose }) {
    return (
        isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
                <div className="bg-white rounded-lg shadow-lg w-96 h-fit p-6">
                    <h2 className="text-xl font-semibold mb-4">Add new task</h2>

                    <div className=''>
                        <input type="text" placeholder='Title' className='mb-2 p-2 bg-gray-200 w-full rounded-lg' />
                        <textarea name="" id="" cols="30" rows="5" className='mb-2 p-2 bg-gray-200 w-full rounded-lg ' placeholder='Description'></textarea>
                    </div>
                    <div className="flex justify-end mt-4 ">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-600 transition duration-200"
                        >
                            Add
                        </button>
                        <button
                            onClick={onClose}
                            className="px-4 py-2 ml-2 bg-violet-500 text-white rounded hover:bg-violet-600 transition duration-200"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        )
    );
}