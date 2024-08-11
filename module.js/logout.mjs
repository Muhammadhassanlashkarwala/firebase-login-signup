import { auth } from "./firebase.js";
import { signOut ,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
    // ...
  } else {
    window.location.href = 'login.html'
    console.log("is'n work");
    // User is signed out
    // ...
  }
});

let buttonDeleted = document.getElementById("btno");

buttonDeleted.addEventListener('click', () => {

    signOut(auth).then(() => {
  // Sign-out successful.
  //    create a sweetalert confirm
  
  
  Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Log out this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log out it!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Log out!",
                text: "Your account has been Log out.",
                icon: "success"
            }).then((e)=>{
                if (e.isConfirmed) {
                    window.location.href = 'login.html'
                }
            })
        }
    });
    
}).catch((error) => {
    // An error happened.

    console.log(error.code);
    console.log(error.message);
});
});