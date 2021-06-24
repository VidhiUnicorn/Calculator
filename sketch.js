var n1,n2 
var b1,b2
var v1,v2
function setup() {
  createCanvas(400, 400);
  n1 = createInput().attribute("placeholder","Enter the first number");
  n1.position(5,60)
  n2 = createInput().attribute("placeholder","Enter the second number")
  n2.position(200,60)
  b1 = createButton("add");
  b1.position(10,200)
  b1.mousePressed(add)
  b2 = createButton("subtract")
  b2.position(100,200)
  b2.mousePressed(subtract)
}

function draw() {
  background(180);
  v1 = parseInt(n1.value())
  v2 = parseInt(n2.value())
}
function add (){
  console.log (v1 + v2)
}
function subtract (){
  console.log (v1 - v2)
}
