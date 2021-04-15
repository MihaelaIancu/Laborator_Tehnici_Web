//ex4

function Func(event) {
    var x = event.clientX;
    var y = event.clientY;
    
    var div = document.createElement("div");
    div.classList.add("animat");
    div.style.position = "absolute";
    document.body.append(div);
    
    div_width = Math.floor(parseFloat(getComputedStyle(div).width) / 2);
    div_height = Math.floor(parseFloat(getComputedStyle(div).height) / 2);
    div_x = parseInt(x) - div_width;
    div_y = parseInt(y) - div_height;
    div.style.left = div_x + "px";
    div.style.top = div_y + "px";
    
    var array = ['miscare1', 'miscare2'];
    var random = Math.floor(Math.random() * array.length);
    div.style['animation-name'] = array[random];
    div.classList.add(array[random]);
}

window.addEventListener("click", Func);
