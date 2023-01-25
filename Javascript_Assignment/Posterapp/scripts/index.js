var arr=[
    {image_url:"https://wallpaperaccess.com/full/1494464.jpg"},
    {image_url:"https://wallpaperaccess.com/full/6366.jpg"},
    {image_url:"https://wallpaperaccess.com/full/1494461.jpg"},
    {image_url:"https://wallpaperaccess.com/full/1494477.jpg"},
    {image_url:"https://wallpaperaccess.com/full/1317124.jpg"},
    {image_url:"https://wallpaperaccess.com/full/1494482.jpg"},
    {image_url:"https://wallpaperaccess.com/full/1494486.jpg"},
    {image_url:"https://wallpaperaccess.com/full/1494491.jpg"},
    {image_url:"https://wallpaperaccess.com/full/1494494.jpg"},
    {image_url:"https://wallpaperaccess.com/full/1494495.jpg"},
    {image_url:"https://wallpaperaccess.com/full/1494529.jpg"},
    {image_url:"https://wallpaperaccess.com/full/1494539.jpg"},
    {image_url:"https://wallpaperaccess.com/full/1317413.jpg"},
]
 let imagediv=document.getElementById('slideshow')
let id;

let imamgeslide=document.createElement("img")
function startslide(){
// console.log("inside fun")
let i=0;


id=setInterval(function(){
    if(i===arr.length)
    {
        i=0
    }
  else{
      imagediv.innerHTML=null
    imamgeslide.src=arr[i].image_url
    imamgeslide.id="img"
imagediv.append(imamgeslide)
i++
  }

},1000)



}


function stopslide(){
clearInterval(id)
}


var arr1=[
    {Poster: "https://m.media-amazon.com/images/M/MV5BOWViNGY5YmEtMjAyNi00NzYwLTk0ODctMmFlNjc2ZmRjN2Y4XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_SX300.jpg",

    Title: "Dilwale",
    Released: "18 Dec 2015",

     imdbRating: 5.1},

{
    Poster: "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",

Title: "3 Idiots",
Released: "25 Dec 2009",
imdbRating: 8.1,
},
{
Poster: "https://m.media-amazon.com/images/M/MV5BN2NlMmUyZWUtZmI5Yy00YWM3LTkxYzgtM2ZiOTMwNTc5ZDg0XkEyXkFqcGdeQXVyNjcyNjMzMjQ@._V1_SX300.jpg",
Title: "Raid",
Released: "16 Mar 2018",
imdbRating: 7.5,
},
{
Poster: "https://m.media-amazon.com/images/M/MV5BOTc3ODMwMWItMjI0NC00YmM1LWIxZmItZDk2NjQ1NzQ1ZTVmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",

Title: 'Ae Dil Hai Mushkil',
Released: "28 Oct 2016",
imdbRating: 5.8,
},
{
    Poster: "https://m.media-amazon.com/images/M/MV5BNmE5OThkYWEtY2IxZi00NjliLThmMjktZjdlMDgzNzBiNDYzXkEyXkFqcGdeQXVyNDYwMjI1MzI@._V1_SX300.jpg",
    Title: 'Jai Ho',
    Released: "28 Oct 2014",
imdbRating: 5,

},
{
    Poster: "https://m.media-amazon.com/images/M/MV5BOGQ3ZjMwZDctZTFkMi00ZjUwLTlmMDUtNDZlYzJjNzZiNTg5XkEyXkFqcGdeQXVyMTMzODk3NDU0._V1_SX300.jpg",
    Title:"RRR",
    Released: "15 Mar 2022",
imdbRating: 9,
}
]

let moviesdiv=document.getElementById("movies")
localStorage.setItem("poster",JSON.stringify(arr1))

let posterarr=JSON.parse(localStorage.getItem("poster"))
displaydata(posterarr)


 


function sortrating()
{
    let selected=document.getElementById("Sorting").value
    
    if(selected=="low")
    {
posterarr.sort(function (a,b){
return a.imdbRating-b.imdbRating




})
displaydata(posterarr)
      //localStorage.setItem("poster", JSON.stringify(posterarr));
  
console.log(posterarr)
    }

    if (selected == "high") {
        posterarr.sort(function (a, b) {
            return b.imdbRating-a.imdbRating
        });
        //displaydata(posterarr)
       // localStorage.setItem("poster", JSON.stringify(posterarr));
        displaydata(posterarr)

}
}
function displaydata(posterarr)

{
 moviesdiv.innerHTML=null
    posterarr.map(function(ele)
{

    let div1=document.createElement("div")
    div1.innerHTML=null
    div1.className="div1"
   let img=document.createElement("img")
   img.src=ele.Poster
   let title=document.createElement("h3")
   title.innerHTML=`Title of film: ${ele.Title}`
   let rating=document.createElement("p")
   rating.innerHTML=ele.imdbRating
   let date=document.createElement("h3")
  date.innerHTML=`Relased Date: ${ele.Released}`
  div1.append(img,title,rating,date)
  moviesdiv.append(div1)
  
})
}


