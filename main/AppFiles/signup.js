import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCQQW3wVQMQed7tGh-nWAOOnqjJuO59Zy8",
  authDomain: "quizapp-74f2f.firebaseapp.com",
  projectId: "quizapp-74f2f",
  storageBucket: "quizapp-74f2f.appspot.com",
  messagingSenderId: "735395110149",
  appId: "1:735395110149:web:6cf75ef5c9bad19026eb6c",
  measurementId: "G-NMXTLXBHT6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


let but = document.querySelector(`#but`)

but.addEventListener(`click`, () => {
  let email = document.querySelector(`#uemail`).value
  let password = document.querySelector(`#upass`).value
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      location.href = `./signin.html`
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
})

