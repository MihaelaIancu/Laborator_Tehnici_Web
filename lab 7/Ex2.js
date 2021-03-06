//Link-uri RegExp
//https://regexr.com/3fe3s
//https://www.regular-expressions.info/dates.html

window.onload = function() {//incarcarea obiectelor in pagina HTML primeaza
 
    var persoana = [
        {
        "nume" : "Radulescu",
        "prenume": "Andrei", 
        "CNP" : "1960812284563",
        "data nasterii": "12/08/1996"
        }
    ];
    
    document.getElementById("ad").onclick = function() {
        var userInput = [];
        var prompts = ["Nume", "Prenume", "CNP", "Data nasterii: MM/ZZ/YYYY"];//interogarea se face pe rand, nu la fiecare apasarea a butonului
        
        for(var i = 0; i < prompts.length; i++) {
            userInput[i] = prompt(prompts[i]);//se retin valorile de input, date de user
        }
        
        function validareDate() {
            
            var reDate = /(0\d{1}|1[0-2])\/([0-2]\d{1}|3[0-1])\/(19|20)\d{2}/g; 
         //(0\d{1}|1[0-2]) -> luna e de forma MM, in care primul M (cifra) poate incepe cu 0, urmat de al 
         //doilea M (a doua cifra), care poate fi d{1}, adica orice cifra intre [0-9] sau pentru lunile 10, 11, 12, primul M poate incepe cu 1 si al doilea, adica a doua 
         //cifra a lunii poate fi intre [0-2]
            
            var userDate = userInput[3];
            
             while(!userDate.match(reDate)) {
                  alert("Data incorecta");
                userDate = prompt("Introdu data nasterii de forma: MM/ZZ/YYYY: ");
                userInput[3] = userDate;
                  }
        }
        
        function validareCNP() {
            
            var reCNP = /[1-2]\d{12}/g;
         //CNP-ul incepe cu 1 sau 2 si e urmat de 12 cifre, acel {12} da numarul de cifre permise, iar acel "d" ne indica faptul ca sunt cifre
            
            var userCNP = userInput[2];
            
            while(!userCNP.match(reCNP)) {
                  alert("CNP incorect");
                userCNP = prompt("Introdu CNP-ul, format din 13 cifre, care sa inceapa cu 1 sau 2: ");
                userInput[2] = userCNP;
                  }
        }
        
        validareCNP();
        validareDate();
        console.log(userInput); //validarea functiona si inainte, adica in felul in care facusem la laborator (toata validarea intr-o singura functie), doar ca problema 
      //era faptul ca ii dadusem console.log(userInput) inainte sa adauge valoarea corecta, adica inainte de functia/functiile de validare.
        
        var arrayKeys = Object.keys(persoana[0]);//array cu cheile obiectului
        var resultObj = {};
        
        for(var j = 0; j < 4; j++) { //pentru cele 4 input-uri/campuri din obiect, iau fiecare cheie din array-ul de obiecte ( arrayKeys[] ), care devine 
         //pentru obiectul rezultat "resultObj" noua cheie a sa si ii atribui valoarea de la utilizator, oentru acelasi index "j"
            resultObj[arrayKeys[j]] = userInput[j];
        }
        
        persoana.push(resultObj);//adaugarea obiectului nou in array-ul de obiecte
        console.log(persoana);
    }
    
    
//    function afisarePers(inputArr) {
//        for(var i = 0; i < inputArr.length; i++) {
//            var afisare = "Am adaugat persoana cu numele: " + inputArr[i].nume + ", prenumele: " + inputArr[i].prenume + ", CNP: " + inputArr[i].CNP + " si data nasterii: " + inputArr[i]["data nasterii"];
//       
//             console.log(afisare);
//        }
//       
//    }
//    
//    afisarePers(persoana); 
    
//functia pentru afisare facuta la laborator este gresita intrucat enuntul spune: 
//scrieti o functie care are ca argument un OBIECT persoana, nu un array, cum am facut noi, asa ca o refacem :)
    
    function afisarePers(objPers) {
        var keyPers, afisare = "";
        for(keyPers in objPers) {
            afisare += objPers[keyPers] + " ";
        }
        return afisare
    }
    
    for(var i = 0; i < persoana.length; i++) {
        console.log(afisarePers(persoana[i]));
    }
    
    
    document.getElementById("af").onclick = function() {
       
        var text = "<ol>"//deschiderea tag-ului de lista ordonata
        
         for(var i = 0; i < persoana.length; i++) {
             
        text = text + "<li> Persoana cu numele: " + persoana[i].nume + ", prenumele: " + persoana[i].prenume + ", CNP: " + persoana[i].CNP + " si data nasterii: " + persoana[i]["data nasterii"] + " </li>";
    //deschiderea si completarea unui list item
         }
        
        text = text + "</ol>";//inchiderea listei ordonate
     
        document.getElementById("s").innerHTML += text;//in loc de "=", pun "+=" adica voi concantena ce exista deja in elementul cu id-ul "s", cu lista care se creeaza dinamic
      //pentru a pastra si titlul "Informatii"
    }
}
