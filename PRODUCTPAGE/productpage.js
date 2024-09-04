let nextbtn = document.querySelector(".similar h1 button");
let productslide = document.querySelectorAll(".similar .container .p");

let scale = -100;
nextbtn?.addEventListener("click", (e) => {
    productslide.forEach((element) => {

        element.setAttribute("style", `transform: translateX(${scale}%)`);
    });
    scale -= 100;

    if(scale <= -1000){
        scale = 0;
    }
});




let loading = gsap.timeline();

loading.from("nav", {
    y: -100,
    duration: 1.2,
    opacity: 0
})
loading.from(".main .left, .main .right, .details, .similar", {
    y: 100,
    duration: 0.8,
    stagger: 0.2,
    opacity: 0
})


let heartfill = 0;
const heart = document.querySelector(".heart");
heart?.addEventListener("click", () => {
    if(heartfill == 0){
        heart.outerHTML = ` <div class="heart">
        <img src="ICON/heartfill.png" alt="heart">
        </div>`;
        heartfill = 1;
    } else {
        heart.outerHTML = ` <div class="heart">
        <img src="heart.png" alt="heart">
        </div>`;
        heartfill = 0;
    }
  
})