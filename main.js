var last_position_of_x, last_position_of_y;
var width=screen.width;
var new_width=screen.width-150;
var new_height=screen.height-300;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    
    if(width<992){
        document.getElementById("myCanvas").width=new_width;
        document.getElementById("myCanvas").height=new_height;
        document.body.style.overflow="hidden";    
    }
    var mouseEvent=" ";
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mousex=e.clientX-canvas.offsetLeft;
    current_position_of_mousey=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;

        console.log("Last position of mouse x and y are ");
        console.log("x="+last_position_of_x+", y="+last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y); 
    
        console.log("current position of mouse x and y are ");
        console.log("x="+current_position_of_mousex+", y="+current_position_of_mousey);
        ctx.lineTo(current_position_of_mousex,current_position_of_mousey); 
        ctx.stroke();
    }
    last_position_of_x=current_position_of_mousex;
    last_position_of_y=current_position_of_mousey;
}
    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

          last_position_of_x=e.touches[0].clientX-canavs.offsetLeft;
          last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
    }


    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_touches_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touches_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touches_x + "y = " + current_position_of_touches_y);
        ctx.lineTo(current_position_of_touches_x, current_position_of_touches_y);
        ctx.stroke();

        last_position_of_x = current_position_of_touches_x; 
        last_position_of_y = current_position_of_touches_y;
    }
  function clearArea(){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      
  }

