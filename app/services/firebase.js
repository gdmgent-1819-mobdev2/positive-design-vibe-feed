const firebase = require('firebase');

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAx2xnpKzD6yOG1X5gENVi9LWWUg3eYDI4",
  authDomain: "vibefeed-a1f33.firebaseapp.com",
  databaseURL: "https://vibefeed-a1f33.firebaseio.com",
  projectId: "vibefeed-a1f33",
  storageBucket: "vibefeed-a1f33.appspot.com",
  messagingSenderId: "681887007137"
};

let instance = null;

const initFirebase = () => {
  instance = firebase.initializeApp(config);
};

const getInstance = () => {
  if (!instance) {
    initFirebase();
  }
  return instance;
};
export {
  initFirebase,
  getInstance,
};