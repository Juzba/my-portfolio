
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAAmoOli_HlMmQNf-7vOP8dDfi18I-J0-0",
	authDomain: "movies-project-a249b.firebaseapp.com",
	projectId: "movies-project-a249b",
	storageBucket: "movies-project-a249b.firebasestorage.app",
	messagingSenderId: "691389302914",
	appId: "1:691389302914:web:e84db1c6c3355461c78c9b",
};


const app = initializeApp(firebaseConfig);

const firestoreDB = getFirestore(app);

export { firestoreDB };
