const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

var firebaseConfig = {
    apiKey: "AIzaSyBBYwmXimq3SEK6E7aHkYdIP0yRZToRJVQ",
    authDomain: "nyaya-24x7.firebaseapp.com",
    databaseURL: "https://nyaya-24x7.firebaseio.com",
    projectId: "nyaya-24x7",
    storageBucket: "nyaya-24x7.appspot.com",
    messagingSenderId: "282319916619",
    appId: "1:282319916619:web:cb14e10e280fcd6207c7ce",
    measurementId: "G-L3F174ZEN6"
  };

// Initialize Firebase
admin.initializeApp(firebaseConfig);
// firebase.analytics();


exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
