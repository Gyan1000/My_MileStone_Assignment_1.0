let result=document.getElementById("result");
let findCost=(days,carType)=>
 {
   let rental_cost=0;
   switch(carType)
   {
     case 'economy':
        { 
            rental_cost=4000;
            break;
        }
      case 'midsize':
        {
            rental_cost=10000
            break;
        }
       case 'luxuary':
        {
               rental_cost=20000
               break;
         }
        default:
          {
               return "Please Enter Valid CarType"
           }   
      }
    return (rental_cost*days);
 }

 let days=parseInt(prompt("Enter Days"));

 let cars="";
 
 let total_cost;


//IF DAYS IN NUMBER
if(!isNaN(days) && days>0)
{
  cars=prompt("Enter car Type only -> Luxuary,Economy,Midsize").toLowerCase();

  // FUNCTION IS CALLED
  total_cost=findCost(days,cars);// IF USER ENTER INVALID CAR TYPE THEN  "Please Enter Valid CarType" ASSIGN IN total_cost
  
  if(!isNaN(total_cost)){

    //DISPALY ON BROWSER SCREEN
    result.textContent=`Total Cost will be: ${total_cost}`;
    result.style.color='green';
    
    //PRINT ON BROWSER CONSOLE
    console.log("Total Cost: ",total_cost)
    
    }
    
    else
    {
      result.innerHTML=`ERROR: ${total_cost}`; // default: return "Please Enter Valid CarType ->this message will be display here"
      result.style.color='red';
    }
}
 else{
  result.textContent=`ERROR: Enter days in positive number`;
  result.style.color='red';
 }



