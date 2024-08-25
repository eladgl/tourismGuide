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
