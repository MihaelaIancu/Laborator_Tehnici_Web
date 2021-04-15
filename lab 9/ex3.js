//ex3

window.onload = function() {
    
   var myTime = window.setTimeout(function(){ //delay de 2 sec
        ex3Func();
    }, 2000);
    
    function ex3Func() {
    
    document.getElementsByName("culori")[0].checked = true;
    document.body.style['background-color'] = document.getElementsByName("culori")[0].value;
    
    function Check_next() {
	    var arr = document.getElementsByName("culori"); /* array cu elementele din categoria "culori" */
	    for (var i = 0; i < arr.length; ++i) {
	        if (arr[i].checked == true) {
	            if (i == arr.length - 1) /* daca este ultimul selectat, trec la primul*/
	            {
	                arr[0].checked = true;
                    document.body.style['background-color'] = arr[0].value;
	            } else {
	                arr[i + 1].checked = true;
                    document.body.style['background-color'] = arr[i + 1].value;
	            }
	            break;
	        }

	    }

	}

	var myInterval = setInterval(function () { //delay intre animatii de 3 sec
	    Check_next();
	}, 3000);
        
     document.getElementById("stop").addEventListener("click", function(){ //oprirea animatiei
         clearInterval(myInterval);
         console.log("stopped");
     });
        
    }
    
    
}
