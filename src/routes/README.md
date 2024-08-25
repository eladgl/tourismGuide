## Routes Overview

The `routes` directory handles API routing for the backend of the application. These routes are primarily for serverless functions hosted on platforms like Vercel:

- **auth/index.js**: Combines all authentication-related routes. It handles login (`/auth/login`) and registration (`/auth/register`) requests.

- **events/index.js**: Manages event-related routes. This includes retrieving events (`/events/getEvents`) and handling user sign-up for events (`/events/signUpToEvent`).

- **guides/index.js**: Handles guide-related routes. Specifically, it retrieves guides from the database (`/guides/getGuides`).

- **reviews/index.js**: Manages review-related routes. It includes fetching all reviews (`/reviews/getReviews`) and getting the most popular reviews by rating (`/reviews/getPopular`).
