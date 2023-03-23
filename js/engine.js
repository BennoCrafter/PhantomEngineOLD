let canvas = document.getElementById("canvas");
let properties = document.getElementById("properties");
let posX = document.getElementById("posX");
let posY = document.getElementById("posY");
let shapes = document.getElementById("shapes");

let activeShape = null;
let oldActiveShape = null;
let startX = 0;
let startY = 0;

shapes.addEventListener("mousedown", (e) => {
  let shape = document.createElement("div");
  shape.classList.add("shape");
  shape.style.backgroundColor = e.target.style.backgroundColor;
  if (e.target.id == "triangle") {
    shape.id = "triangle";
  } else {
    shape.id = "rect";
  }
  canvas.appendChild(shape);
  activeShape = shape;
  startX = e.clientX - activeShape.offsetLeft;
  startY = e.clientY - activeShape.offsetTop;
});

canvas.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains("shape")) {
    activeShape = e.target;
    startX = e.clientX - activeShape.offsetLeft;
    startY = e.clientY - activeShape.offsetTop;
    posX.value = activeShape.offsetLeft;
    posY.value = activeShape.offsetTop;
    oldActiveShape = activeShape;
  }
});

document.addEventListener("mousemove", (e) => {
  if (activeShape) {
    activeShape.style.left = e.clientX - startX + "px";
    activeShape.style.top = e.clientY - startY + "px";
    posX.value = activeShape.offsetLeft;
    posY.value = activeShape.offsetTop;
  }
});

document.addEventListener("mouseup", (e) => {
  activeShape = null;
});

posX.addEventListener("change", (e) => {
  if (oldActiveShape) {
    const newLeft = e.target.value;
    const oldTop = oldActiveShape.offsetTop;
    oldActiveShape.style.left = newLeft + "px";
    oldActiveShape.style.top = oldTop + "px";
  }
});

posY.addEventListener("change", (e) => {
  if (oldActiveShape) {
    const newTop = e.target.value;
    const oldLeft = oldActiveShape.offsetLeft;
    oldActiveShape.style.top = newTop + "px";
    oldActiveShape.style.left = oldLeft + "px";
  }
});

properties.addEventListener("change", (e) => {
  if (oldActiveShape) {
    oldActiveShape.style.left = posX.value + "px";
    oldActiveShape.style.top = posY.value + "px";
  }
});

var j=0;
//Function for live Rendering
function update(i) {
    if(i==0){
    let htmlCode=document.getElementById("htmlCode").value;
    let cssCode=document.getElementById("cssCode").value;
    let javascriptCode=document.getElementById("javascriptCode").value;
    let text=htmlCode+"<style>"+cssCode+"</style>"+"<scri"+"pt>"+javascriptCode+"</scri"+"pt>";
    let iframe=document.getElementById('game').contentWindow.document;
    iframe.open();
    iframe.write(text);
    iframe.close();
    }

    else if(i==1){

        let htmlCode=document.getElementById("htmlCode").value;
        let html=htmlCode.slice(0,htmlCode.length);
        document.getElementById("htmlCode").value=html;
        j=1;

    }

}