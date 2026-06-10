// firebase.js
// Initialises Firebase using the config loaded from firebase-config.js.
// firebase-config.js must be loaded in the HTML BEFORE this file.
// firebase-config.js is excluded from Git (see .gitignore).

firebase.initializeApp(window.FIREBASE_CONFIG);
const db = firebase.database();
