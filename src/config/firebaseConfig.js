// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import admin from "firebase-admin";

import "dotenv/config";
import bcrypt from "bcrypt";

const saltRounds = 10;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY_ID.replace(/\\n/g, "\n"),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    // Additional optional fields if needed
  }),
});

const db = admin.firestore();

/**
 * Registers a new user in Firestore.
 * @param {Object} userData - The data for the new user including email, password, and other information.
 * @returns {Object} - The newly created user object without the password field.
 * @throws {Error} - If the email is already in use or any other error occurs during the process.
 */
async function registerUser(userData) {
  const { email, password, ...userInfo } = userData;

  // Check if the email is already in use
  const usersRef = admin.firestore().collection("users");
  const snapshot = await usersRef.where("email", "==", email).get();
  if (!snapshot.empty) {
    throw new Error("Email already in use");
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  // Create the user record
  const newUserRef = usersRef.doc();
  await newUserRef.set({
    ...userInfo,
    email,
    password: hashedPassword,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  // Fetch the newly created user to return
  const savedUser = await newUserRef.get();
  const userToReturn = {
    id: newUserRef.id,
    ...savedUser.data(),
    password: undefined, // Exclude the password from the returned user object
  };

  return userToReturn;
}

/**
 * Logs in a user by validating their email and password.
 * @param {Object} loginData - The email and password of the user attempting to log in.
 * @returns {Object} - The user object without the password if the login is successful.
 * @throws {Error} - If no matching user is found or if the password is incorrect.
 */
async function loginUser({ email, password }) {
  const usersRef = db.collection("users");
  const snapshot = await usersRef.where("email", "==", email).get();

  if (snapshot.empty) {
    throw new Error("No matching user");
  }

  const userDoc = snapshot.docs[0];
  const userData = userDoc.data();
  const passwordMatch = await bcrypt.compare(password, userData.password);

  if (passwordMatch) {
    // Placeholder for password check
    const { password, ...userWithoutPassword } = userData;
    return { id: userDoc.id, ...userWithoutPassword };
  } else {
    throw new Error("Invalid password");
  }
}

/**
 * Retrieves all reviews from the Firestore reviews collection.
 * @returns {Array} - An array of review objects.
 * @throws {Error} - If no reviews are found.
 */
async function getReviews() {
  const reviewsRef = db.collection("reviews");
  const snapshot = await reviewsRef.get();
  if (snapshot.empty) {
    throw new Error("No reviews");
  }
  const reviewDocs = snapshot.docs.map((doc) => doc.data());

  return reviewDocs;
}

/**
 * Retrieves all events from the Firestore events collection.
 * @returns {Array} - An array of event objects.
 * @throws {Error} - If no events are found.
 */
async function getEvents() {
  const eventsRef = db.collection("events");
  const snapshot = await eventsRef.get();
  if (snapshot.empty) {
    throw new Error("No reviews");
  }
  const reviewDocs = snapshot.docs.map((doc) => doc.data());

  return reviewDocs;
}

/**
 * Retrieves the top 3 reviews from the Firestore reviews collection, ordered by rating.
 * @returns {Array} - An array of the top 3 review objects.
 * @throws {Error} - If no reviews are found.
 */
async function getTopReviews() {
  const reviewsRef = db.collection("reviews");
  const snapshot = await reviewsRef.orderBy("rating", "desc").limit(3).get();

  if (snapshot.empty) {
    throw new Error("No reviews found");
  }

  const topReviews = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return topReviews;
}

/**
 * Signs up a user to an event by adding their email to the signed-up list in the Firestore events collection.
 * @param {String} email - The user's email.
 * @param {String} eventId - The ID of the event to sign up for.
 * @returns {Object} - An object indicating success or failure of the operation.
 */
async function signUpToEvent(email, eventId) {
  try {
    // Perform the operation within a transaction
    await db.runTransaction(async (transaction) => {
      const eventsRef = db.collection("events");
      const query = eventsRef.where("event_id", "==", eventId);
      const querySnapshot = await transaction.get(query);

      if (querySnapshot.empty) {
        throw new Error("Event does not exist");
      }

      const eventDoc = querySnapshot.docs[0];
      const eventRef = eventDoc.ref;

      // Retrieve existing email_list
      const eventData = eventDoc.data();
      const emailList = eventData.signed_up_emails || [];

      // Check if the email is already in the list
      if (emailList.includes(email)) {
        throw new Error("Email is already signed up for this event");
      }

      // Add the email to the list
      emailList.push(email);

      // Update the event document with the new list of emails
      transaction.update(eventRef, { signed_up_emails: emailList });

      console.log(`Successfully signed up ${email} to event ${eventId}`);
    });

    // Return success result
    return { success: true, message: "Successfully signed up" };
  } catch (error) {
    console.error("Error signing up to event:", error);
    // Return failure result
    return { success: false, message: error.message };
  }
}

/**
 * Retrieves all guides from the Firestore Guides collection.
 * @returns {Array} - An array of guide objects.
 * @throws {Error} - If no guides are found.
 */
async function getGuides() {
  const guidesRef = db.collection("Guides");
  const snapshot = await guidesRef.get();
  if (snapshot.empty) {
    throw new Error("No guides");
  }
  const guidesDocs = snapshot.docs.map((doc) => doc.data());

  return guidesDocs;
}

/**
 * Prints all users in the Firestore users collection to the console.
 * @throws {Error} - If there is an error fetching the users.
 */
async function printUsers() {
  try {
    const usersRef = db.collection("users");
    const snapshot = await usersRef.get();

    if (snapshot.empty) {
      console.log("No users found");
      return;
    }

    snapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

/**
 * Retrieves user data based on the user's email.
 * @param {String} email - The email of the user.
 * @returns {Object} - The user's data object.
 */
async function getUserData(email) {
  const usersRef = db.collection("users");
  const snapshot = await usersRef.where("email", "==", email).get();

  if (snapshot.empty) {
    return null; // User not found
  }

  const userDoc = snapshot.docs[0];
  return { id: userDoc.id, ...userDoc.data() };
}

async function getUserDataById(userId) {
  const userRef = db.collection("users").doc(userId);
  const doc = await userRef.get();

  if (!doc.exists) {
    return null;
  }

  return { id: doc.id, ...doc.data() };
}

async function storeResetToken(email, token, expires) {
  const userRef = db.collection("users").doc(email);
  await userRef.update({
    resetPasswordToken: token,
    resetPasswordExpires: expires,
  });
}

async function getUserByEmail(email) {
  const usersRef = db.collection("users");
  const snapshot = await usersRef.where("email", "==", email).get();

  if (snapshot.empty) {
    console.error("User not found");
    return null;
  }

  const userDoc = snapshot.docs[0];
  return { id: userDoc.id, ...userDoc.data() };
}

async function getUserByResetToken(token) {
  const usersRef = db.collection("users");
  const snapshot = await usersRef
    .where("resetPasswordToken", "==", token)
    .get();

  if (snapshot.empty) {
    console.error("User not found for given reset token");
    return null;
  }

  const userDoc = snapshot.docs[0];
  const userData = userDoc.data();

  // Check if token has expired
  const now = Date.now();
  if (userData.resetPasswordExpires < now) {
    console.error("Reset token has expired");
    return null;
  }

  return { id: userDoc.id, ...userData };
}
async function resetPassword(userId, newPassword) {
  const userRef = db.collection("users").doc(userId);
  const doc = await userRef.get();

  if (!doc.exists) {
    throw new Error("User not found");
  }

  const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);
  await userRef.update({ password: hashedNewPassword });

  return true;
}

async function clearResetToken(userId) {
  const userRef = db.collection("users").doc(userId);
  await userRef.update({
    resetPasswordToken: null,
    resetPasswordExpires: null,
  });
}

export {
  admin,
  registerUser,
  loginUser,
  printUsers,
  getUserData,
  getUserDataById,
  storeResetToken,
  getUserByEmail,
  getUserByResetToken,
  resetPassword,
  clearResetToken,
  getReviews,
  getEvents,
  getTopReviews,
  signUpToEvent,
  getGuides,
};
