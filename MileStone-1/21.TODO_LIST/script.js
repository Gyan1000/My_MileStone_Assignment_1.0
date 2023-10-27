//select buttton
let btn=document.querySelector("#btn");
btn.addEventListener('click',btnAction)
let ul=document.getElementById("ul");

// fetch input field value;

function btnAction()
{
    
   //fetching data
    let input_text=document.querySelector("#input1").value;
   //warning message for empty input
    if(input_text.length==0){
      alert('enter data in text box');
    }
    else{
      console.log(input_text);

    //make input field empty
    document.querySelector("#input1").value="";
  
    //create list
     
     let list=document.createElement("li");
     let html=`<span class='text'>${input_text}</span>
            <div class='todo-btn'>
            <button class='done btn'>done</button>
            <button class='delete btn'>delete</button>
            </div>   
     `;
     list.innerHTML=html;
     ul.append(list); 
     
   //event bubbling
   ul.addEventListener('click',(event)=>{
   if (event.target.classList.contains('delete'))
         {
            let del=event.target.parentNode.parentNode;
            del.remove();
            
         }
         if (event.target.classList.contains('done'))
         {
           let d=event.target.parentNode.previousElementSibling;
            d.style.textDecoration='line-through';
         
         }
   });

}  

}