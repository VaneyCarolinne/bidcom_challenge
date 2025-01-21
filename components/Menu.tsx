'use client';
import { useState } from 'react';
import { HiMiniBars3BottomRight } from 'react-icons/hi2';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-end items-end p-4">
      <div className="relative">
        <button
          onClick={toggleMenu}
          className="text-2xl p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-label="Toggle menu"
        >
          <HiMiniBars3BottomRight className="w-[40px] h-[40px]" />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"></li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"></li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"></li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
