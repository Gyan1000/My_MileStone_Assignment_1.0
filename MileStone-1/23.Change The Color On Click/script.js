// let colors=["blue","pink","red","yellow","purple","lightgray","gray","green","orange","lightblue"];
let colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', "F"]

function changeBC() {
   let hc = "#";
   for (let i = 0; i < 6; i++) {
      hc += colors[Math.floor(Math.random() * colors.length)];
   }
   document.body.style.backgroundColor = hc;
}