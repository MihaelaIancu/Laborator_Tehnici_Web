//script.js

alert("connected");

EXERCITII-1
#ex1


var currYear = 2021;
var birthYear = 1997;
var age = currYear - birthYear;
var name = "Joseph";
var afisareConsola = " Hi, my name is " + name + ", I'm " + age.toString() + " years old and I'm learning Javascript.";

console.log(afisareConsola);

#ex2

var phone1 = "988866552"; // 9 cifre
var phone2 = "99087612366"; // 11 cifre
var phone3 = 876543123; // 9 cifre

if (phone1.length == 9){
   console.log("1st number is valid");
   }
else {
    console.log("invalid");
}

if (phone2.length == 9){
   console.log("2nd number is valid");
   }
else {
    console.log("invalid");
}

if (phone3.toString().length == 9){
   console.log("3rd number is valid");
   }
else {
    console.log("invalid");
}

//SAU

console.log(phone1.length == 9);
console.log(phone2.length == 9);
console.log(phone3.toString().length == 9);

#ex3

console.log("32^6 = " + Math.pow(32, 6));

#ex4

var quantity = "25"; // string
//quantity = parseInt(quantity);
var number = 6; //number
var pressure; //undefined
var temperature = null; //setata cu null

console.log (quantity += quantity); //2525; daca quantity = parseInt(quantity); -> 50
console.log ((7+5) / number + 2); 
console.log (pressure); //undefined
console.log (temperature); //null
console.log (typeof pressure); //undefined
console.log (typeof temperature); //object

EXERCITII-2
#ex1

function Celsius_in_Fahrenheit(cTemp){
    var fTemp = (9 * cTemp / 5) + 32;
    return fTemp;
}

var celsius_1 = 38;
var celsius_2 = 24;
var celsius_3 = -1;

console.log("fTemp 1: " + Celsius_in_Fahrenheit(celsius_1).toString() + "F");
console.log("fTemp 2: " + Celsius_in_Fahrenheit(celsius_2).toString() + "F");
console.log("fTemp 3: " + Celsius_in_Fahrenheit(celsius_3).toString() + "F");

#ex2

var course = {
 'title': "Learn to Code in Python 3",
 'categories': ['programming', 'technology', 'python'],
 '5_stars_reviews': 420,
 '4_stars_reviews': 80,
 '3_stars_reviews': 33,
 '2_stars_reviews': 20,
 '1_stars_reviews': 4,
 'total_reviews': function()
    {
        var total = this['5_stars_reviews'] + this['4_stars_reviews'] + this['3_stars_reviews'] + this['2_stars_reviews'] + this['1_stars_reviews'];
        
        return total;
    }
    
}


console.log("Title of the course: " + course.title);
console.log("Title of the course: " + course['title']);
console.log("Main category: " + course.categories[0]);
console.log("Total reviews: " + course.total_reviews());

var percentage = (course['5_stars_reviews'] / course.total_reviews() * 100);
console.log("5 stars reviews % is " + percentage.toFixed(2).toString() + "%");
console.log("5 stars reviews % is " + Math.round(percentage).toString() + "%");

#ex3

var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"];

//luarea ultimului element
var last_item = shoppingList[shoppingList.length - 1];
//sau 
var last_item_slice = shoppingList.slice(-1,);
//sau
var item = shoppingList.pop(); 

console.log(last_item);
console.log(last_item_slice);
console.log(item);

//shoppingList.unshift(last_item);
//shoppingList.unshift(last_item_slice);
shoppingList.unshift(item);

console.log(shoppingList);
shoppingList.push("Cheese")
shoppingList.push("Eggs");
console.log(shoppingList);

#ex4

var array1 = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];

var array2 = array1.reduce(function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) { //-1 = no match found
    accumulator.push(currentValue)
  }
  return accumulator;
    
}, []);

console.log(array2);

#ex5

var array2 = [[1, 2], [3, 4, 5], [6, 7]].reduce(
  function(accumulator, currentValue) {
    return accumulator.concat(currentValue)
  }, []);

console.log(array2);

#ex6

var persoane = [
    {
        nume: "Maria", 
        varsta: 20
    }, 
    {
        nume: "Andrei", 
        varsta: 10
    }, 
    {
        nume: "Ionut", 
        varsta: 35
    }, 
    {
        nume: "Ioana", 
        varsta: 25
    }, 
];

var numarIntreg = prompt("Scrie un numar intreg", "0");
console.log(numarIntreg);

//array cu varstele tuturor

resultVarsta = persoane.map(({ varsta }) => varsta);
console.log(resultVarsta);

var resultVarstaFinal = [];

for (var i = 0; i < resultVarsta.length ; i++){
    if(resultVarsta[i] <= numarIntreg){
         resultVarstaFinal.push(resultVarsta[i]);
    }
}
       
console.log(resultVarstaFinal.length);


alert("Numarul de persoane este: " + resultVarstaFinal.length.toString());

#ex7

var dictionar = {"mar": "apple", "apa": "water", "ploaie": "rain", "zapada": "snow"};

//for(var key in dictionar){
//    console.log(key, dictionar[key]);
//}

var cuvant = prompt("Scrie un cuvant");
console.log(cuvant);

var ok = 1;

//alert("Cuvantul a fost gasit");
//
//var intrebare = confirm("Vrei sa continui?");
//        if (intrebare) {
//            cuvant = prompt("Scrie un cuvant");
//        }

for(var i = 0; i < Object.keys(dictionar).length; i++){
    if(Object.keys(dictionar)[i] == cuvant) {
       alert("Cuvantul a fost gasit: " + Object.values(dictionar)[i]);
       }
    else ok = 0;
}

if (!ok) {
    alert("Cuvantul nu a fost gasit");
    var intrebare = confirm("Vrei sa continui?");
        if (intrebare) {
            cuvant = prompt("Scrie un cuvant");
             for(var i = 0; i < Object.keys(dictionar).length; i++){
                if(Object.keys(dictionar)[i] == cuvant) {
                   alert("Cuvantul a fost gasit: " + Object.values(dictionar)[i]);
                   }
                else ok = 0;
                }
        }
   
}
