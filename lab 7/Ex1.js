//alert("yes");

window.onload = function() {
    document.getElementById("p1").onmouseover = function() {
    document.getElementById("p2").style.fontFamily = "Arial, sans-serif";
 }
    
    
 document.getElementById("bCauta").onclick = function() {
     var indicatii = prompt("Dati un cuvant si nr-ul paragrafului unde sa il cautam: ");
     console.log(indicatii);
     
     var arrayIndicatii = indicatii.split(' ');
     console.log(arrayIndicatii);
     
     var nrParag = arrayIndicatii[1];
     
     var selectareParag = document.getElementById("p" + nrParag);
     console.log(selectareParag.textContent);
     
     var arrayContent = [];
     arrayContent.push(selectareParag.textContent.split(' '));
//     arrayContent.push("text");
//     arrayContent.push("asa");
     console.log(arrayContent);
     
     var nr = 0;
     
     for(var i = 0; i < arrayContent[0].length; i++) {
         if(arrayIndicatii[0] == arrayContent[0][i]) {
            nr++;
            }
     }
     
     alert("Nr-ul de aparitii este: " + nr.toString());
 }     
    
}
