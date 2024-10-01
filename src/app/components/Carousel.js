"use client";
import { AppContext } from "@/context/AppContext";
import {  useContext } from "react";


const Carousel = () => {
    const { carouselIndex, setCarouselIndex, movies } = useContext(AppContext);
  
   
    const nextMovie = () => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % movies.length);
    };
  
 
    const prevMovie = () => {
      setCarouselIndex((prevIndex) => 
        (prevIndex - 1 + movies.length) % movies.length
      );
    };
  
    
    const currentMovie = movies[carouselIndex] || {};
  
    return (
      <div className="w-full flex flex-col items-center bg-white py-8">
        {movies.length > 0 ? (
          <div className="text-white text-center">
            <h2 className="text-3xl text-black mb-4">{currentMovie.Title}</h2>
            <img
              src={currentMovie.Poster}
              alt={currentMovie.Title}
              className="w-64 h-96 rounded-lg mx-auto"
            />
            <div className="flex justify-between items-center mt-4 space-x-4">
             
              <button
                onClick={prevMovie}
                className="bg-black text-white px-4 py-2 rounded-lg"
              >
                Previous Movie
              </button>
  
            
              <button
                onClick={nextMovie}
                className="bg-black text-white px-4 py-2 rounded-lg"
              >
                Next Movie
              </button>
            </div>
          </div>
        ) : (
          <p className="text-white">No movies found...</p>
        )}
      </div>
    );
  };
  
  export default Carousel;
