let result=document.getElementById("result");

let item_quantity=[];
let double_quantity,quantity;
let no=0;
alert("Enter Five Item Quentity In Number(Not In Text)")
while(no<5)
{
  quantity=parseInt(prompt(`Enter Quentity For Item No: ${no+1}`)) 

  if(isNaN(quantity)|| quantity<1){
    alert("Enter Quantity In Positive Number");
    result.textContent="Enter Quantity In Positive Number (Not In Text)";
    result.style.color='red';
    break;  
 }

 item_quantity.push(quantity);
 no++;
}
// THIS FUNCTION WILL DOUBLE THE QUANTITY OF ITEMS
function double_Quantity()
{
    double_quantity= item_quantity.map((quantity)=>quantity*2);

    return double_quantity;
}
// IF NO==5 THEN USER ENTER QUANTITY FOR THE 5 ITEMS
if(no==5)
{
   result.textContent="Result: "+double_Quantity();
   result.style.color='green';
   console.log(double_Quantity());
}
else{
    result.textContent="Result: TRY AGAIN YOUR INPUT IS NOT COMPELETED ";
    result.style.color='red';
    console.log("Result: TRY AGAIN YOUR INPUT IS NOT COMPELETED");
}