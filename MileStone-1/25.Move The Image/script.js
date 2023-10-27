// In this java script program I have used img.offsetLeft for left and right movement
// and img.offsetTop for top and bottom movement;
// ALL MOVEMENT OF IMAGE DEPENDS ON window.innerWidth AND window.innerHeight;
// FOR MOVEMENT DURATION I HAVE USED HERE setInterval METHOD AFTER EACH 5 MILISCOND IT WILL CALL FRAME METHOD
//  UNTIL CONDITION BECOME FALSE
//I CAN USE HERE transition=translate(x,y)METHOD FOR MOVING THE IMGAGE IN JS BUT I DID NOT USED IT BECAUSE I THINK
//THE WAY I USED, THIS IS A DIFFERENT APPROACH FOR MOVING IMAGE

let img = document.getElementById("img_div");
let alert_message=document.querySelector(".message");

let vh = window.innerHeight;
let vw = window.innerWidth;

document.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "ArrowDown": {
      let top = img.offsetTop;
      top_down = top + 100;

      let id = setInterval(frame, 5);

      function frame() {
        if (top <= top_down) {
          img.style.top = ++top + "px";
        } 
        else clearInterval(id);
      }
      //  AFTER GOING IMAGE BOTTOM OF VIEWPORT
      if (top > ((vh/2)+img.offsetHeight/2)) {
        img.style.top = -(img.offsetHeight / 2) + "px";
        top = img.style.top;
        console.log(img.offsetTop);
      }
    

      break;
    }

    case "ArrowUp": {
      let up = img.offsetTop;
      Arrow_up = up - 100;

      let id = setInterval(frame, 10);
      function frame() {
        if (up > Arrow_up) {
          img.style.top = --up + "px";
        } 
        else clearInterval(id);
      }
      //  AFTER GOING IMAGE TOP OF VIEWPORT
      if (up <= -(img.offsetHeight / 2)) {
        img.style.top = vh - (img.offsetHeight / 2) + "px";
        up = img.style.top;
        console.log(img.style.top);
      }
      break;
    }

    case "ArrowLeft": {
      let left = img.offsetLeft;
      let left_move = left - 100;

      let id = setInterval(frame, 5);
      function frame() {
        if (left > left_move) {
          img.style.left = --left + "px";
        }
         else clearInterval(id);
      }
      //  AFTER GOING IMAGE: LEFT<0 OF VIEWPORT-WIDTH
      if (left < -img.offsetWidth / 2) {
        console.log("left");
        img.style.left = vw - img.offsetWidth + "px";
        left = img.style.left;
      }
      break;
    }

    case "ArrowRight": {
      let right = img.offsetLeft;
      let right_move = right + 100;

      let id = setInterval(frame, 5);
      function frame() {
        if (right < right_move) {
          img.style.left = ++right + "px";
        } 
        else clearInterval(id);
      }
      //  AFTER GOING IMG:RIGHT>VIEWPORT-WIDTH 
      if (right > (vw - (img.offsetWidth / 2))) {
        console.log("right");
        img.style.left = -img.offsetWidth / 2 + "px";
        right = img.style.left;
      }
      break;
    }
    default :
    alert_message.classList.toggle("show");
    
    setTimeout(()=>{alert_message.classList.toggle("show")},3000) ;
    break;
  }
});
