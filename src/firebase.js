import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";


//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCtpLMwOfRPW5joA-ZQT96bUwEYU78CV8",
  authDomain: "nota2-d2681.firebaseapp.com",
  projectId: "nota2-d2681",
  storageBucket: "nota2-d2681.firebasestorage.app",
  messagingSenderId: "1084597077404",
  appId: "1:1084597077404:web:871a5f22d759bbb1feb459"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//function to send message to firestore
export const sendMessage = async (message) => {
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        name: message.name,
        message: message.text,
      });
      console.log("Message sent with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding message: ", e);
    }
  };
