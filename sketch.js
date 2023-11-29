const saveButton= document.querySelector ('button#save');
const colorInput = document.querySelector ('input#color');
console.log(colorInput);
let paintColor = 'lightblue';
colorInput.value = paintColor;

function setup () {
const canvas =createCanvas (500,500);
canvas. parent ('sketch');
console.log (saveButton);
background (255);
saveButton.addEventListener("click",()=>{
console.log ('clicked');
save('image.png');
});
colorInput.addEventListener ('input', ()=> {
paintColor= colorInput.value;

});

}

function draw() {





}

function mouseDragged () {
   fill(paintColor); 
    circle (mouseX, mouseY, 10);
line (pmouseX, pmouseY, mouseX, mouseY);
for (let i = 0; i <100; i++){
    point (mouseX + random (-10, 10),
    mouseY + random (-10, 10));
}
function mouseDragged(){

    save('image.png')
}
}
function keyPressed () {
if (key === 's') {
    save ('image.png')
}

}
