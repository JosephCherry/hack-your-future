//1.
var books = ["catcher_in_the_rye", "ghostworlds", "on_the_road", "the_road", "the_secret_history", "white_noise", "perfume", "how_music_works", "the_music_of_the_spheres", "beneath_the_underdog"]
var i = 0;
console.log(books);
//3.
function bookList(){
    if (i == books.length){
        return;
    } else {
  
   var x = document.createElement("UL");
   x. setAttribute("id", "myUL");
   document.body.appendChild(x);

    var y = document.createElement("LI");
    var t = document.createTextNode(books[i]);
    y.appendChild(t);
    document.getElementById("myUL").appendChild(y);
    i++;
    }
}
//4.
var catcher_in_the_rye = {title: "Catcher in the Rye", language: "English", author:"JD Salinger"};
var ghostworlds = {title: "Ghostworlds", language: "English", author:"Daniel Clowes"};
var on_the_road = {title: "On the Road", language: "English", author:"Jack Kerouac"};
var the_road = {title: "The Road", language: "English", author:"Cormack McCarthy"};
var the_secret_history = {title: "The Secret History", language: "English", author:"Donna Tartt"};
var white_noise = {title: "White Noise", language: "English", author:"Don DeLillo"};
var perfume = {title: "Perfume", language: "German", author:"Patrick Süskind"};
var how_music_works = {title: "How Music Works", language: "English", author:"David Byrne"};
var the_music_of_the_spheres = {title: "The Music of the Spheres", language: "English", author:"Jamie James"};
var beneath_the_underdog = {title: "Beneath the Underdog", language: "English", author:"Charles Mingus"};

//5.
var bookDetailsList = [catcher_in_the_rye, ghostworlds, on_the_road, the_road, the_secret_history, white_noise, perfume, how_music_works, the_music_of_the_spheres, beneath_the_underdog];

function bookList2(){
    if (i == books.length){
        return;
    } else {
    var x = document.createElement("H1");
    var t = document.createTextNode(bookDetailsList[i]['title']);
    x.appendChild(t);
    x.setAttribute("id", "book"[i])
    document.body.appendChild(x);
    var w = document.createElement("H4");
    var l = document.createTextNode("Language: " + bookDetailsList[i]['language']);
    w.appendChild(l);
    document.body.appendChild(w);
    var y = document.createElement("I");
    var a = document.createTextNode(bookDetailsList[i]['author']);
    y.appendChild(a);
    document.body.appendChild(y);
    i++;
    }
}

//6. and kind of 7. 
var imgArray = ['220px-Rye_catcher.jpg', 'ghostworld.jpg', 'on-the-road-kerouac.jpg', 'theroad.jpg', 'thesecrethistory.jpg', 'White_Noise.jpg', 'perfume.jpg', 'howmusicworks.jpg', 'mots.jpg', 'btud.jpg'];



function bookList3(){
    if (i == books.length){
        return;
    } else {
       var div = document.createElement("DIV");
       div.setAttribute("class", "container"); 
       document.body.appendChild(div);

       var img = document.createElement("IMG");
       img.setAttribute("src", imgArray[i]);
       div.appendChild(img);
       var x = document.createElement("H1");
        var t = document.createTextNode(bookDetailsList[i]['title']);
        x.appendChild(t);
        x.setAttribute("id", "book"[i])
        document.body.appendChild(x);
       var w = document.createElement("H4");
        var l = document.createTextNode("Language: " + bookDetailsList[i]['language']);
        w.appendChild(l);
        document.body.appendChild(w);
        var y = document.createElement("I");
        var a = document.createTextNode(bookDetailsList[i]['author']);
        y.appendChild(a);
        document.body.appendChild(y);
        i++;
    }
}
// Actually 7. 

console.log(imgArray[0]);

var coverObjects = {img1:'220px-Rye_catcher.jpg', img2:'ghostworld.jpg', img3:'on-the-road-kerouac.jpg', img4:'theroad.jpg', img5:'thesecrethistory.jpg', img6:'White_Noise.jpg', img7:'perfume.jpg', img8:'howmusicworks.jpg', img9:'mots.jpg', img10:'btud.jpg'}

for (let key in coverObjects){
    console.log(key.toUpperCase() + ':',coverObjects[key]);
}

function bookList4(){
    if (i == books.length){
        return;
    } else {
       for( var key in coverObjects){
        var div = document.createElement("DIV");
        div.setAttribute("class", "container"); 
        document.body.appendChild(div);
 
        var img = document.createElement("IMG");
        img.setAttribute("src", imgArray[i]);
        div.appendChild(img);
        var x = document.createElement("H1");
         var t = document.createTextNode(bookDetailsList[i]['title']);
         x.appendChild(t);
         x.setAttribute("id", "book"[i])
         document.body.appendChild(x);
        var w = document.createElement("H4");
         var l = document.createTextNode("Language: " + bookDetailsList[i]['language']);
         w.appendChild(l);
         document.body.appendChild(w);
         var y = document.createElement("I");
         var a = document.createTextNode(bookDetailsList[i]['author']);
         y.appendChild(a);
         document.body.appendChild(y);
         i++;
       }
    }
}