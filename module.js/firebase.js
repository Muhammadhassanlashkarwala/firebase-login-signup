
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCeDfDglmL8upux21aBZh_dXn4jNVS0Mms",
    authDomain: "fir-project-1-86f76.firebaseapp.com",
    projectId: "fir-project-1-86f76",
    storageBucket: "fir-project-1-86f76.appspot.com",
    messagingSenderId: "615222683712",
    appId: "1:615222683712:web:8e961d674fb66f786457a5",
    measurementId: "G-HS58P9MYTZ"
  };

  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);
 export const auth = getAuth(app);
