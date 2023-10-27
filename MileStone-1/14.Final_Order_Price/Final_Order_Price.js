
let customer_cart = [

  { unite_price: 100, quentity: 2 },
  { unite_price: 200, quentity: 5 },
  { unite_price: 300, quentity: 1 },
  { unite_price: 500, quentity: 4 },
  { unite_price: 400, quentity: 2 },

];


//first way

let calculate = () => {
  let total_cost = 0;

  customer_cart.forEach((item) => {

    total_cost +=( item.unite_price * item.quentity);

  });

  return total_cost;
};

let total_price=calculate();

console.log("TOTAL COST: ",total_price);

//second way
// let price = 0;
// for(let i=0;i<customer_cart.length;i++)
//       {
//         price+=(customer_cart[i].unite_price)*(customer_cart[i].quentity);
//       }
// console.log("TOTAL COST: ",price)
