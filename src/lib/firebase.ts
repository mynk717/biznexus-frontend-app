import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Log the projectId being used for initialization
console.log("[Firebase Init] Attempting to initialize with Firebase config:", {
  apiKey: firebaseConfig.apiKey ? '********' : undefined, // Don't log sensitive keys
  authDomain: firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId,
  storageBucket: firebaseConfig.storageBucket,
  messagingSenderId: firebaseConfig.messagingSenderId,
  appId: firebaseConfig.appId
});


let app: FirebaseApp;
if (!getApps().length) {
  try {
    app = initializeApp(firebaseConfig);
    console.log("[Firebase Init] New Firebase app initialized. Project ID from app config:", app.options.projectId);
  } catch (e) {
    console.error("[Firebase Init] ERROR initializing Firebase app:", e);
    // If initialization fails, subsequent Firebase operations will also fail.
    // We'll throw to make it clear.
    throw new Error("Firebase initialization failed. Check your credentials and Firebase setup.");
  }
} else {
  app = getApp();
  console.log("[Firebase Init] Existing Firebase app retrieved. Project ID from app config:", app.options.projectId);
}

let auth: Auth;
let db: Firestore;

try {
  auth = getAuth(app);
  db = getFirestore(app);
  if (db && db.app.options.projectId) {
    console.log("[Firebase Init] Firestore instance created. Project ID from db:", db.app.options.projectId);
  } else {
    console.warn("[Firebase Init] Firestore instance might not have been created correctly or project ID is missing.");
  }
} catch (e) {
    console.error("[Firebase Init] ERROR getting Auth or Firestore instance:", e);
    throw new Error("Failed to get Auth or Firestore instance after Firebase app initialization.");
}


export { app, auth, db };
