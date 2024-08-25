
# Tourism Guide

Tourism Guide is a web application designed to allow users to explore travel guides, events, and reviews. This project is a monolithic application, with both the server and client provided together in a single codebase. It is built using React, Vite, and Tailwind CSS, with SVG icons and dynamic content management.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Scripts](package.json)
- [Technologies Used](#technologies-used)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [API](#api)
  - [Auth Handlers](api/auth/)
  - [Event Handlers](api/events)
  - [Guide Handlers](api/guides)
  - [Review Handlers](api/reviews)
- [Firebase Configuration](src/config/firebase-configuration)
- [User Usability](public/vendors/nagish)
- [Components](src/components)
- [Pages](src/pages)
- [Routes](src/routes)
- [Styled Components Overview](src/styles)

## Features

- User-friendly interface for exploring travel guides, events, and reviews.
- Responsive design with Tailwind CSS.
- SVG icons integration for scalable and customizable icons.
- Hot Module Replacement (HMR) for faster development experience.
- Authentication and user management via Firebase.
- Dynamic content fetching and display.

## Project Structure

```plaintext
src/
├── access/                 # Access-related files and configurations
├── assets/                 # Static assets like images and icons
├── components/             # Reusable React components
├── config/                 # Configuration files (e.g., Firebase)
├── contexts/               # React contexts for global state management
├── hooks/                  # Custom React hooks
├── middleware/             # Middleware for backend or API handling
├── pages/                  # Page components for different routes
├── routes/                 # API route handlers
├── schemas/                # Data schemas and validation
├── styles/                 # Styling files (CSS, Tailwind, etc.)
├── tailwindStyles/         # Tailwind CSS custom styles
├── utils/                  # Utility functions
├── App.jsx                 # Main application component
├── firebase.js             # Firebase configuration and initialization
├── index.css               # Global styles and Tailwind imports
├── main.jsx                # Application entry point
├── server.js               # Server configuration and entry point
└── themeProvider.jsx       # Theme provider for managing light/dark themes
```

## Installation

To get started with the Tourism Guide project, follow these steps:

### Clone the repository:

```bash
git clone https://github.com/your-username/tourism-guide.git
cd tourism-guide
```

### Install dependencies:

Ensure you have Node.js installed, then run:

```bash
npm install
```

### Set up environment variables:

Create a .env file in the root directory with the following content:

```plaintext
VITE_API_URL=<your-api-url>
JWT_SECRET=<your-jwt-secret>
FIREBASE_API_KEY=<your-firebase-api-key>
FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
FIREBASE_PROJECT_ID=<your-firebase-project-id>
FIREBASE_STORAGE_BUCKET=<your-firebase-storage-bucket>
FIREBASE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
FIREBASE_APP_ID=<your-firebase-app-id>
FIREBASE_MEASUREMENT_ID=<your-firebase-measurement-id>
```

**Note:** You need to DM us to get these environment variables.

## Usage

To start the development server with Vite, run:

```bash
npm run dev
```

This will start the application at [http://localhost:5173](http://localhost:5173).

To build the project for production, run:

```bash
npm run build
```

## Configuration

### Vite Configuration

The vite.config.js file includes the following important configurations:

- **SVG Icons Plugin**: Handles SVG icon importing.
- **React Plugin**: Adds support for React, including Babel configuration for styled-components.
- **Aliases**: Set up for easier imports.

### PostCSS Configuration

The postcss.config.js includes the following plugins:

- **postcss-import**: Enables @import in CSS.
- **tailwindcss/nesting**: Adds support for CSS nesting.
- **tailwindcss**: Core Tailwind CSS.
- **autoprefixer**: Adds vendor prefixes for cross-browser compatibility.

## Scripts

Here are the key npm scripts available:

- dev: Starts the development server with HMR.
- build: Builds the project for production.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For fast development and optimized builds.
- **Tailwind CSS**: For styling.
- **Firebase**: For authentication and backend services.
- **PostCSS**: For processing CSS.
- **SVG Icons**: For scalable and customizable icons.

## API

The serverless functions are organized in the ./api directory and are structured as follows:

### Auth Handlers

- **/auth/login**: Handles user login requests.
- **/auth/register**: Handles user registration requests.

### Event Handlers

- **/events/getEvents**: Retrieves a list of events.
- **/events/signUpToEvent**: Handles sign-up requests for an event.

### Guide Handlers

- **/guides/getGuides**: Retrieves a list of guides.

### Review Handlers

- **/reviews/getReviews**: Retrieves a list of reviews.
- **/reviews/getPopular**: Retrieves the top reviews by rating.

## Firebase Configuration

The Firebase configuration is handled in ./src/config/firebaseConfig.js. This file includes the following main functions:

- **registerUser(userData)**: Registers a new user in Firebase, hashing the password and storing user data.
- **loginUser({ email, password })**: Authenticates a user by checking the email and password against stored credentials.
- **getReviews()**: Fetches reviews from the Firestore collection.
- **getEvents()**: Fetches events from the Firestore collection.
- **getGuides()**: Fetches guides from the Firestore collection.
- **getTopReviews()**: Retrieves the top 3 reviews based on their rating.
- **signUpToEvent(email, eventId)`**: Signs up a user to an event, ensuring they are not already registered.
- **getUserByEmail(email)`**: Retrieves user data by email.

Each of these functions interacts with Firebase’s Firestore or Authentication services, providing essential backend functionality for the Tourism Guide application.

## User Usablity

There is a usage of a usability component called NagishLi you can find it at **public/vendors/nagish**

## Components Overview

The `components` directory contains reusable React components that are utilized across various parts of the application. Here's a quick review of the key components:

- **Button.jsx**: A customizable button component that handles click events. It supports passing a className for styling and children for content.
  
- **Label.jsx**: A simple component that wraps text or other elements within a `<p>` tag. It allows for consistent styling of text labels throughout the app.

- **IconButton.jsx**: A composite component that combines an SVG icon with a button. It allows for interactive buttons with icons and optional tooltips.

- **Image.jsx**: A wrapper around an image element (`<img>`), providing a consistent way to apply styling to images across the app.

- **Modal.jsx**: A modal dialog component that can display content over the main UI. It handles opening and closing based on a prop (`isOpen`).

- **NavBarLink.jsx**: A link component specifically styled for the navigation bar, supporting custom class names and child elements.

- **ProductCard.jsx**: A component that displays information about a product or event, including an image, title, description, and action buttons.

- **ReviewCard.jsx**: A card component that displays individual reviews, including details like the review title, content, and associated metadata like date and category.

- **Search.jsx**: A search component that includes input fields and buttons, designed to help users filter through data such as guides, events, or reviews.

- **ToggleButton.jsx**: A toggle switch component that allows users to switch between two states, often used for theme toggling (e.g., dark mode).

## Pages Overview

The `pages` directory contains the main page components that correspond to the different routes in the application. Each page represents a distinct section or feature of the application:

- **HomePage.jsx**: The landing page of the application. It includes sections like the Hero section, Popular Reviews, and Latest Reviews, providing users with an overview of the content.

- **LoginPage.jsx**: The login page where users can enter their credentials to access their accounts. It includes forms for email and password input.

- **GuidePage.jsx**: A page dedicated to displaying guides. It fetches guide data and displays it using the `ProductCard` component, along with search functionality.

- **EventsPage.jsx**: Displays upcoming or ongoing events. It allows users to browse, search, and sign up for events.

- **ReviewsPage.jsx**: A page where users can browse and read reviews. It typically lists reviews in card format, allowing users to see a preview before reading the full review.

- **GetStartedPage.jsx**: A registration page where new users can sign up for an account. It includes forms for inputting user details and creating an account.

- **PageNotFound.jsx**: A simple 404 page that is shown when a user navigates to an unknown route. It includes a message and a link back to the homepage.

## Routes Overview

The `routes` directory handles API routing for the backend of the application. These routes are primarily for serverless functions hosted on platforms like Vercel:

- **auth/index.js**: Combines all authentication-related routes. It handles login (`/auth/login`) and registration (`/auth/register`) requests.

- **events/index.js**: Manages event-related routes. This includes retrieving events (`/events/getEvents`) and handling user sign-up for events (`/events/signUpToEvent`).

- **guides/index.js**: Handles guide-related routes. Specifically, it retrieves guides from the database (`/guides/getGuides`).

- **reviews/index.js**: Manages review-related routes. It includes fetching all reviews (`/reviews/getReviews`) and getting the most popular reviews by rating (`/reviews/getPopular`).


## Styled Components Overview

The `styles` directory contains styled-components that are used to style the React components. These components encapsulate their styles and make them reusable across the application. The directory is organized into `common`, `components`, and `pages` subdirectories:

### Common Styled Components

- **containers.jsx**: Provides layout containers with various flexbox configurations, often used to structure sections and components on the page.
- **input.jsx**: Styled input fields that are used throughout the application for forms and data entry.
- **label.jsx**: Styled label elements that provide consistent text styling across the application.

### Component-Specific Styled Components

- **card.jsx**: Styles related to the `Card` component, which is used to display products, guides, or events with a consistent look.
- **footer.jsx**: Contains styling for the application's footer, ensuring it is responsive and visually consistent.
- **image.jsx**: Styles for images to ensure they are displayed correctly across different screen sizes and resolutions.
- **searchSection.jsx**: Contains styles for the search section, including input fields and buttons.
- **svgIcong.jsx**: Styles for SVG icons, allowing them to be easily customized and scaled.
- **title.jsx**: Styling for titles and headers, ensuring consistency in typography throughout the app.
- **toggle.jsx**: Styles for the toggle button component, which is used for features like theme switching.
- **topNavBar.jsx**: Contains styles for the top navigation bar, making it responsive and ensuring it aligns with the overall design.

### Page-Specific Styled Components

- **eventsPage.jsx**: Styles specific to the Events page, ensuring that event listings and related components are displayed correctly.
- **homePage.jsx**: Contains styles for the Home page, including layout and typography for the main sections like Hero and Popular Reviews.
