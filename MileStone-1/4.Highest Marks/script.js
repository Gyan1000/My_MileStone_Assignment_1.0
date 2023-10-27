
let result=document.querySelector("h2");

let marks=[];
let max=0,no=0;  

// TAKING INPUT FROM USER 
for(let i=0;i<=4;i++)
{

   no=parseInt(prompt(`enter marks for student no ${i+1}`));
   //IF USER ENTER MARKS IN NUMBER AND IF ENTER IN TEXT THEN ELSE PART WILL BE EXECUTE
   if(!isNaN(no)&& no>=0)
     marks.push(no);
    else
      break;
}

console.log("Entered marks",marks)

//CHECK CONDITION IF 5 STUDENTS MARKS WILL ENTERED BY THEN findMaxMarks() WILL CALL OTHERWISE ALERT WILL CALL

marks.length==5 ? findMaxMarks():alert("Please Enter 5 Students Marks And Marks Should Be In Number");


function findMaxMarks()
{
marks.forEach(element => {
    //  if(element>max)
    //    {
    //       max=element;
    //    }
   
    element > max ? max=element : 0;
})     
console.log("Max marks",max); //display on browser console

result.textContent=`[${marks}] Max Marks: ${max}`;//display on browser screen
result.style.color='green';
}


//   second logic

//  max=marks.length>0?Math.max(...marks):null;

//  max!=null?console.log("max marks",max):console.log("please enter 5 students marks")