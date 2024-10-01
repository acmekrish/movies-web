'use client';
import { useContext } from 'react';
import { AppContext } from '@/context/AppContext';

const Navbar = () => {
    const { setModalOpen } = useContext(AppContext);
  
    return (
      <nav className="flex justify-between items-center p-6 bg-black">
        <h1 className="text-3xl font-bold tracking-wide">Cinema</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="px-6 py-2 bg-white text-black rounded-lg hover:bg-red-700 transition-all"
        >
          Login / Sign-Up
        </button>
      </nav>
    );
  };
  
export default Navbar;
