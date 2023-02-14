import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyCKLEeGLOzjr_dK13nYWcPjXArqtcPT37A",
	authDomain: "fooder-next.firebaseapp.com",
	projectId: "fooder-next",
	storageBucket: "fooder-next.appspot.com",
	messagingSenderId: "439976361175",
	appId: "1:439976361175:web:2a585428f9b93353fac492",
	measurementId: "G-0P9QTMD0GG",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
