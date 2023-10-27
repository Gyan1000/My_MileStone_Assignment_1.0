let form= document.getElementById("login-form");
   
form.addEventListener("submit",(event)=>
   {  
     event.preventDefault()
     let name=document.getElementById("uname").value;

     let new_name=name.charCodeAt(0)>96?name.charAt(0).toUpperCase()+name.slice(1):name;

     console.log(new_name)
     document.getElementById("newN").innerText=new_name; 
   }) 