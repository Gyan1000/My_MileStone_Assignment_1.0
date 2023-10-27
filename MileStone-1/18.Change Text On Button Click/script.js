let x=0;
let heading=document.getElementById("heading");
let colors=["blue","cyan","red","black","purple","gray","green","orange"];

function changeText()
{
   if(x%2==0)
    {
      heading.textContent="PW Skills";
    }   
    else
    {
        heading.textContent="The most affordable learning platform";
    }
    x++;
   

   let random=Math.floor(Math.random()*colors.length);
   heading.style.color=colors[random];
}
