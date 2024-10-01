"use client";

import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [movies, setMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <AppContext.Provider
      value={{
        carouselIndex,
        setCarouselIndex,
        movies,
        setMovies,
        isModalOpen,
        setModalOpen: setIsModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
