import { analytics, app ,auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

let btnl = document.getElementById('login')
btnl.addEventListener("click" , (e)=>{
    e.preventDefault();
let email = document.getElementById('email').value;
let pass = document.getElementById('password').value;

signInWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    Swal.fire({
        title: 'User Login',
        text: 'You have Login successfully!',
        icon:'success',
        confirmButtonText: 'Go to Dashboard'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'index.html'
        }
    })
    // ...
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
});
});