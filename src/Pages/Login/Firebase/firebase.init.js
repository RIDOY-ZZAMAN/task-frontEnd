import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeFireBase = () => {
    initializeApp(firebaseConfig);
}

export default initializeFireBase;