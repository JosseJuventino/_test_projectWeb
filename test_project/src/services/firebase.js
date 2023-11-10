import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYyI2vmxbmDFEP-NjDt1iF4W9_OMIOXDk",
    authDomain: "cssuca-fd79a.firebaseapp.com",
    projectId: "cssuca-fd79a",
    storageBucket: "cssuca-fd79a.appspot.com",
    messagingSenderId: "280095716776",
    appId: "1:280095716776:web:d1367fc26ffa097beb599d",
    measurementId: "G-2RQENQQPTK"
};

const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);

