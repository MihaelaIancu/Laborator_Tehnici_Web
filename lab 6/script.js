//alert("yes");
//"https://i.pinimg.com/originals/fe/a9/fb/fea9fb227210fdb349846e970ab61551.png";

//HACK GOOGLE
//document.getElementsByClassName("lnXdpd")
//document.getElementsByClassName("lnXdpd")[0].src = "https://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo-2003.jpg"
//document.getElementsByClassName("lnXdpd")[0].srcset = "https://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo-2003.jpg"

//caut elementul, iau clasa, vad ce vector am, iau pozitia
//document.getElementsByClassName("gNO89b")[1].value = "Yahoo Search"

//schimbare font
//document.getElementById("bodyStyle").style.fontFamily = "Verdana, sans-serif";
//sau
//document.getElementsByTagName("body")[0].style.fontFamily = "Arial, sans-serif";

document.getElementById("nickname").innerHTML = "Miguel";
document.getElementById("favorites").innerHTML = "Lectura";
document.getElementById("hometown").innerHTML = "Ploiesti";

//document.getElementsByTagName("li")[0].classList.add("list-item");
//document.getElementsByTagName("li")[0].classList.remove("list-item");

var arrayList = [];
arrayList = document.getElementsByTagName("li");

for(var i = 0; i < arrayList.length; i++) {
    arrayList[i].classList.add("list-item");
}

var img = document.createElement("img");
img.id = "image";
img.src = "https://i.pinimg.com/originals/fe/a9/fb/fea9fb227210fdb349846e970ab61551.png";
//img.height = "220px";
//img.width = "50%"
img.style.height = "220"
//document.getElementById("myImg").append(img);
document.body.append(img);
