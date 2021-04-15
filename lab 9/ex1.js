//ex1

window.onload = function() {
    
    document.getElementById("op").addEventListener('change', function(event) {
        
    var x = document.getElementById("i1").value;//valoarea input-ului se ia imediat dupa incarcarea paginii si doar 1 singura data
    var y = document.getElementById("i2").value;
    var op = document.getElementById("op").value;
    
    var parag = "<p>" + x + " " + op + " " + y;
    var result;   
        
        switch(op){
            case "+":
                result = parseInt(x) + parseInt(y);
                break;
            case "-":
                result = parseInt(x) - parseInt(y);
                break;
            case "*":
                result = parseInt(x) * parseInt(y);
                break;
        };
        
    parag += " = " + result;
    parag += "</p>";
    document.getElementById("operatii").innerHTML += parag;
        
    });
   
}
