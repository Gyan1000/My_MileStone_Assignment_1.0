
let content=[

"HTML and Semantics","Starting with CSS",

"Working Template","Mobile responsive webpages",

"Grid and Flex-box in CSS","Projects using HTML & CSS",

"Version Control and Git",

"Getting Started with JavaScript",

"Advance JavaScript",

"Working with DOM",

"Making Projects using HTML, CSS and JavaScript",

"Understanding Fundamental of Computer Science",

"Getting Started with Database",

"Understanding the Database",

"Starting with NodeJS and Express",

"Understanding React and its Fundamentals",

"Understanding Hooks and Routers",

"Starting and Completing Full Fledge Projects"

]
// act like a index of content Array;
let count=0;

let myList=document.getElementById("myList");

let btn=document.getElementById("btn");

btn.addEventListener("click",addList);
      

 function addList()
 {
   if(count<content.length)
     {
         let list=document.createElement("li");

         let list_content=document.createTextNode(content[count]);
      
        list.appendChild(list_content);

        myList.appendChild(list);

        // increment index
        count++;
     }
     else
     {
       return alert("all Items have been added");
     }
    
 }
    
    
