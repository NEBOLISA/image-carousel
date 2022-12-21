let allImages=document.getElementsByClassName("smallImages")
let bigImage =document.getElementById("wrapper-image")
for(let img of allImages){
    console.log(img);
    img.addEventListener("click", function(event){
       bigImage.src =event.target.src;
    })
}
