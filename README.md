

# Video Streaming Platform Documentation

## Overview

This project is a video streaming platform built using **Next.js** and **Tailwind CSS**. It features a dynamic content carousel that displays trending movies and shows fetched from the **OMDb API**. Users can log in or sign up through a modal form and the application supports responsive design for both mobile and desktop views.

## Technologies Used

- **Next.js**: A React framework for building server-side rendered applications.
- **Tailwind CSS**: A utility-first CSS framework for creating responsive designs.
- **OMDb API**: An API to fetch movie data, including details and images.

## Project Structure

The project is organized into the following main directories:

- **components**: Contains all reusable components such as the Navbar, Modal, Carousel and Search components.
- **context**: Contains the AppContext which manages global state.
- **pages**: Contains the main application pages, including the main page and the custom app configuration.
- **styles**: Contains global styles, particularly for Tailwind CSS.
- **services**: which houses the API

## Setup and Installation

1. Clone the repository to your local machine.
2. Navigate into the project directory.
3. Install the required dependencies using npm i.
4. Run the development server to start the application.
5. Open the application in your web browser.

## Core Components

### AppContext

The AppContext is responsible for managing the global state of the application. It provides state variables and functions that can be accessed by any component within the context provider. Specifically, it manages the visibility of the modal for login/signup.

### Navbar Component

The Navbar component serves as the top navigation for the application. It displays the application title and includes a button that opens the modal for login/signup. The button's click event is handled to update the modal's visibility state.

### Modal Component

The Modal component is a dialog that appears when users want to log in or sign up. It displays a form for user input. The modal can be closed by clicking outside of it or by using a close button inside the modal.

### Carousel Component

The Carousel component dynamically displays movies fetched from the OMDb API. It showcases a collection of movie posters and titles, allowing users to browse through trending content. The component retrieves movie data using an API call and updates its internal state accordingly.

### Search Component

The Search component allows users to filter movies based on their search input. It includes a text input field and a button. When users type in the field and click the search button, the application updates the displayed movies based on the search query.

## API Integration

The application integrates with the OMDb API to fetch movie data. It makes HTTP requests to the API, retrieving details about movies, including their titles, posters and other relevant information. This integration is essential for populating the carousel with up-to-date movie content.

## Styling

The project utilizes **Tailwind CSS** for styling. Tailwind enables the use of utility-first CSS classes, which makes it easy to apply styles directly in the markup. Custom styles can also be defined in the global CSS file to enhance the visual presentation of components.

## State Management

The application uses **React Context API** for state management. This method allows for efficient sharing of state, such as the modal visibility, across different components without needing to pass props through multiple levels of the component tree. This results in cleaner and more maintainable code.

## Responsive Design

The design of the application is fully responsive, ensuring that it looks good on both mobile and desktop devices. The responsive layout is achieved using Tailwind's utility classes, which adjust element properties based on screen size. This approach allows for a seamless user experience across various devices.
