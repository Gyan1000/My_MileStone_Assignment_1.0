
//Another way to solve the question
//  Result will be display on VS Code console
function calculate(total_Person,...dish_price)
{
   let total_cost=0,paid_by_each;
  
   
   for(let price of dish_price)
   {
      total_cost+=price;
   }
   
   
  paid_by_each=total_cost/total_Person;

  return({total_cost: total_cost, paid_by_each_person: paid_by_each})
}

let result=calculate(5,600,400,800,100,300);

console.log(result)
