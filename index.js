let imgs = document.querySelectorAll("img")
let img = document.querySelector("img");
console.log(img);
imgs.forEach(img => {
    img.addEventListener("mouseover", ()=>{
        if(img.style.width < "24vw"){
            img.style.width = "24vw";
            img.style.transition = "0.6s"
        }
    });
    img.addEventListener("mouseleave", ()=>{
        if(img.style.width > "14vw"){
            img.style.width = "14vw";
        }
    });
});
