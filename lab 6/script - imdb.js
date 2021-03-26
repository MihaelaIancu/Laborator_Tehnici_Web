//alert("yes");

var movieObj = [
   {
       "title" : "Parasite",
       "duration (min)" : 132,
       "cast" : ["actor 1", "actor 2", "actor 3"],
       "seen" : true
   },
   {
       "title" : "Rear Window",
       "duration (min)" : 112,
       "cast" : ["actor 11", "actor 22", "actor 33"],
       "seen" : true
   },
   {
       "title" : "Midsommar",
       "duration (min)" : 138,
       "cast" : ["actor 111", "actor 222", "actor 333"],
       "seen" : false
   }
];

//"https://wallpapercave.com/wp/wp5264425.jpg";

//creare element paragraf in care pun titlul
for(var i = 0; i<movieObj.length; i++){
   var movieTitle = document.createElement("p");
   movieTitle.innerHTML = movieObj[i].title;
   document.body.append(movieTitle);
}

//crearea unui list-element
var movieList = movieObj.map(function (element) {
   var seen;
   
   if(element.seen){
       var seen = "seen";
      }
   else var seen = "watchlist";
   
 return '<li>' + 'Title - ' + element.title + ', Cast - ' + element.cast + ', Duration (min)- ' + element["duration (min)"] + ' - >' + seen + '</li>';  
}).join('');

document.getElementById('movieList').innerHTML = movieList;

//adaugare proprietate imagine
movieObj[0].image = "https://wallpapercave.com/wp/wp5264425.jpg";
movieObj[1].image = "https://wallpapercave.com/wp/wp5264425.jpg";
movieObj[2].image = "https://wallpapercave.com/wp/wp5264425.jpg";

//luarea elementelor li si adaugarea id-urilor pe fiecare dintre ele
var arrayList = [];
arrayList = document.getElementsByTagName("li");

for (var i = 0; i < arrayList.length; i++) {
    arrayList[i].id = "id" + i;
}

//adaugarea imaginii in fiecare li
var img1 = document.createElement("img");
img1.src = movieObj[0].image;
img1.style.width = "100px";
document.getElementById("id0").appendChild(img1);

var img2 = document.createElement("img");
img2.src = movieObj[1].image;
img2.style.width = "100px";
document.getElementById("id1").appendChild(img2);

var img3 = document.createElement("img");
img3.src = movieObj[2].image;
img3.style.width = "100px";
document.getElementById("id2").appendChild(img3);

//evidentierea filmelor vazute
document.getElementById("id0").classList.add("seenMovie");
document.getElementById("id1").classList.add("seenMovie");

var seenMovie = document.getElementsByClassName("seenMovie");

for(var i = 0; i < seenMovie.length; i++) {
    seenMovie[i].style.color = "red";
}
