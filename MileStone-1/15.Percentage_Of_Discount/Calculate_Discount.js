let result=document.getElementById("result");
let find_Discount=(original_price,discount_price)=>{
    
   let discount=(discount_price/original_price)*100;

     return (discount.toFixed(2))+"%";
}

let original_price=parseInt(prompt("original_price"));

 let discount_price=parseInt(prompt("Enter Discount Price"));



if(isNaN(original_price) || original_price<1)
{
  result.textContent=`ERROR: Enter original_Price In Positive Number`;
  result.style.color='red';
}


else if(isNaN(discount_price) || discount_price<1){

result.textContent=`ERROR: Enter Discount_Price In Positive Number`;
result.style.color='red';

}

else
{
  result.textContent='Customer gets Discount : '+find_Discount(original_price,discount_price);
  result.style.color='green';
  console.log("Customer gets Discount: ",find_Discount(original_price,discount_price));
}


