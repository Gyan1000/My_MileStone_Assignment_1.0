
let email = document.getElementById("email");
let password = document.getElementById("password");

// DISPLAY THE MESSAGE ABOUT LOGIN PAGE
let message=document.getElementById("message");

document.getElementById("login").addEventListener("submit",(event) =>{
    
    event.preventDefault();   
   
   let flag = true;
   
    if (email.value == "") {
        flag = false;
    }

    else if (email.value.indexOf("@") == -1) {
        flag = false;
    }

    else {
        flag = true;
    }

    if (password.value.length < 8) {
        flag = false;

    }

    if (flag) {

         message.innerText = "valid email and password";
         message.style.color = 'green';
                
        }

    else {
         message.innerText = "Invalid email or password";
         message.style.color = 'red';
       }
       
})


