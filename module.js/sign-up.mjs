import { analytics, app ,auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
let btn = document.getElementById("btn")

btn.addEventListener('click', () => {
let name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let pass = document.getElementById('password').value;

  
    createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;

        // created sweetalert
        Swal.fire({
            title: 'User Sign-up',
            text: 'You have Sign-up successfully!',
            icon:'success',
            confirmButtonText: 'Go to Login'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'login.html'
            }
        })
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        console.log(errorCode);
        // ..
    });
    
});