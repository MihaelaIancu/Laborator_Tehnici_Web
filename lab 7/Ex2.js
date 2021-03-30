//Link-uri RegExp
//https://regexr.com/3fe3s
//https://www.regular-expressions.info/dates.html

window.onload = function() {
 
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
        var prompts = ["Nume", "Prenume", "CNP", "Data nasterii: MM/ZZ/YYYY"];
        
        for(var i = 0; i < prompts.length; i++) {
            userInput[i] = prompt(prompts[i]);
        }
        
        function validareDate() {
            
            var reDate = /(0\d{1}|1[0-2])\/([0-2]\d{1}|3[0-1])\/(19|20)\d{2}/g;
            
            var userDate = userInput[3];
            
             while(!userDate.match(reDate)) {
                  alert("Data incorecta");
                userDate = prompt("Introdu data nasterii de forma: MM/ZZ/YYYY: ");
                userInput[3] = userDate;
                  }
        }
        
        function validareCNP() {
            
            var reCNP = /[1-2]\d{12}/g;
            
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
        
        for(var j = 0; j < 4; j++) {
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
       
        var text = "<ol>"
        
         for(var i = 0; i < persoana.length; i++) {
             
        text = text + "<li> Persoana cu numele: " + persoana[i].nume + ", prenumele: " + persoana[i].prenume + ", CNP: " + persoana[i].CNP + " si data nasterii: " + persoana[i]["data nasterii"] + " </li>";
    }
        
        text = text + "</ol>";
        document.getElementById("s").innerHTML += text;//in loc de "=", pun "+=" adica voi concantena ce exista deja in elementul cu id-ul "s", cu lista care se creeaza dinamic
      //pentru a pastra si titlul "Informatii"
    }
}
