"use client";

import { useState, useContext } from "react";
import { fetchMovies } from "../../../services/movies";
import { AppContext } from "@/context/AppContext";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setMovies, setCarouselIndex } = useContext(AppContext);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") return;

    const searchedMovies = await fetchMovies(searchTerm); 
    setMovies(searchedMovies);
    setCarouselIndex(0);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-center mb-10"
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 text-black rounded-lg py-2 px-4 w-80"
        placeholder="Search for a movie..."
      />
      <button
        type="submit"
        className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
