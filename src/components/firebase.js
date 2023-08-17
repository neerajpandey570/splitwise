import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyBhox4fCZ4SxbNQ8dBcwt33ZpyJJKIBthM",
   authDomain: "splitwise-bb0ef.firebaseapp.com",
   projectId: "splitwise-bb0ef",
   storageBucket: "splitwise-bb0ef.appspot.com",
   messagingSenderId: "723571854723",
   appId: "1:723571854723:web:31a05e14c82a2eb8d9fab6",
   measurementId: "G-33L4GMMCQS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
