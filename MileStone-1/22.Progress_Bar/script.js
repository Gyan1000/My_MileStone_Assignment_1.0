let container=document.querySelector(".container");

let progress_bar=document.getElementById("progress_bar");

let containerHeight;

window.onscroll=()=>{
    containerHeight=container.offsetHeight-window.innerHeight;

    let containerPos=container.getBoundingClientRect();

    let difference=containerHeight+containerPos.top;

    let percentageOfProgress=(difference/containerHeight) *100;

    cssWidth=Math.floor(100-percentageOfProgress);

    progress_bar.style.width=cssWidth+"%";
}