let isPressed = false;
like.onclick = function(){
    if (like.style.backgroundColor == 'orangered'){
        isPressed = true;
        const paint = document.getElementById('paint');
        const context = paint.getContext('2d');
        like.style.backgroundColor = 'black'; 
        like.style.color = 'orangered'; 
        
        paint.addEventListener('mousemove', (e) => {
          let ClientRect = paint.getBoundingClientRect();
          if(isPressed == true)
            context.drawImage(img,mouseX,mouseY,5,5);
        });
       
    } else {
        isPressed = false;
        like.style.backgroundColor = 'orangered';
        like.style.color = 'black';
    }
}
const img = new Image();
img.src ="img/heart.png";
// like.onclick = function(){
//     if (like.style.backgroundColor == 'orangered'){
        
//         like.style.backgroundColor = 'black'; 
//         like.style.color = 'red';
        
//         isPressed = true;
//         const paint = document.getElementById('paint');
//         const context = paint.getContext('2d');
        
//        var canvasPos = getPosition(paint);
//         var mouseX = 0;
//         var mouseY = 0;
//         function setMousePosition(e) {
//         mouseX = e.clientX - canvasPos.x;
//         mouseY = e.clientY - canvasPos.y;
//         }
//         canvas.addEventListener("mousemove", setMousePosition, false);
//         function update() {
//             context.beginPath();
//             context.arc(mouseX, mouseY, 50, 0, 2 * Math.PI, true);
//             context.fillStyle = "#FF6A6A";
//             context.fill();

//             requestAnimationFrame(update);
//         }
//         update()

        

//     } else if (like.style.backgroundColor == 'black') {
//         isPressed = false;
//         like.style.backgroundColor = 'orangered';
//         like.style.color = 'black';
//     }
// }
// function getPosition(el) {
//             var xPosition = 0;
//             var yPosition = 0;
        
//             while (el) {
//             xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
//             yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
//             el = el.offsetParent;
//             }
//             return {
//             x: xPosition,
//             y: yPosition
//             };
//}






