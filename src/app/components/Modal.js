"use client";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

const Modal = () => {
  const { isModalOpen, setModalOpen } = useContext(AppContext);

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-4 text-black">Login / Sign-Up</h2>
        <form>
          <input
            type="text"
            placeholder="Username"
            className="block w-full mb-4 px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="block w-full mb-4 px-4 py-2 border  text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Submit
          </button>
        </form>
        <button
          onClick={() => setModalOpen(false)}
          className="mt-4 text-red-600 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
