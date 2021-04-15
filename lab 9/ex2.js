//ex2

//document.getElementById("id"); 
//document.querySelector("selectorul") sau (".clasa") sau ("#id")//returneaza primul element din document care se potriveste selectorului trecut in paranteza sau grupului de selectori 
//querySelectorAll("selectorul") sau (".clasa") sau ("#id") - returneaza o lista cu toate elementele care se potrivesc selectorului/clasei/id-ului
//de retinut - cand folosim querySelector() trebuie sa punem "." pentru clasa si "#" pentru id, nu se pune nimic in cazul selectarii dupa tag
//exact ca intr-un style.css cand aveam proprietatie distribuite astfel:
 /*    
    .class{
    ...proprietati CSS
    }
    #id{
    ...proprietati CSS
    }
    tag{
    ...proprietati CSS
    }
    
 */
//document.forms[0]; - proprietate read-only - interfata documentului intoarce toate elementele unui element de formular

//Metoda 1 

    var intrebare = document.getElementById("intrebare");
    var butoane = document.getElementById("form");
    var raspuns = document.getElementById("raspuns");
    
    intrebare.style.display = "none";
    butoane.style.display = "none";
    
    document.getElementById("start").onclick = function() {
        
    intrebare.style.display = "block";
    butoane.style.display = "block";
    raspuns.style.display = "block";
        
        function myFunction() {
          var radios = document.forms[0];
          var txt = "";
          var i;
          for (i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
              txt = txt + radios[i].value + " ";
            }
          }
          document.getElementById("raspuns").textContent = "Raspuns " + txt;
            
//Metdoda 2 - prin FORMDATA
            
//            var form = document.querySelector("form");
//            var paragraf = document.querySelector("#raspuns");

//            form.addEventListener("change", function(event) {
//              var data = new FormData(form); //creeaza seturi de cheie valoare
//              var output = "Raspuns ";
//              for (var entry of data) { //entry: array de lungime [2]: [0] name, [1] value, deci mai jos selectam value, care e pe index-ul 1 al array-ului intors de entry
//                output = output + entry[1];
//              };
//              raspuns.innerText = output;
//            }, false);

        }
         window.addEventListener('change', myFunction);
}
