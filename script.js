
// BEST SELLER NEXT
let bestSellerNextBtn = document.querySelector(".page2 .bestseller h1 button");

let bestSellerContainer = document.querySelectorAll(".page2 .bestseller .firstcontainer .p, .page2 .bestseller .secondcontainer .p");

let scale = -100;

bestSellerNextBtn?.addEventListener("click", (e) => {
    bestSellerContainer.forEach((element) => {

        element.setAttribute("style", `transform: translateX(${scale}%)`);
    });
    scale -= 100;

    if(scale <= -1000){
        scale = 0;
    }
});

















// MORE PRODUCTS NEXT
let moreProductsNextBtn = document.querySelector(".page3 .moreproducts h1 button");

let moreProductsContainer = document.querySelectorAll(".page3 .moreproducts .firstcontainer .p,.page3 .moreproducts .secondcontainer .p");

let scale2 = -100;

moreProductsNextBtn?.addEventListener("click", (e) => {
    moreProductsContainer.forEach((element) => {

        element.setAttribute("style", `transform: translateX(${scale2}%)`);
    });
    scale2 -= 100;

    if(scale2 <= -1000){
        scale2 = 0;
    }
});





let loading = gsap.timeline();

loading.from("nav .left, nav .right", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out"
})
loading.from(".hero img", {
    y: 200,
    opacity: 0,
    duration: 1.6,
    delay: -0.8,
    ease: "power2.out"
})
loading.from(".hero .slider span", {
    opacity: 0,
    duration: 1.2,
    stagger: 0.2
})

gsap.from(".hero .herobtns button, .page1 .buttons button", {
    opacity: 0,
    delay: 2,
    duration: 2.5
})


gsap.from(".bestseller", {
    y: 100,
    opacity: 0,
    duration: 2.5,
    scrollTrigger: {
        trigger: ".bestseller",
        scroller: "body",
        scrub: 5,
        end: "center 50%",
        start: "top 100%"
    }
})


gsap.from(".moreproducts", {
    y: 100,
    opacity: 0,
    duration: 2.5,
    scrollTrigger: {
        trigger: ".moreproducts",
        scroller: "body",
        scrub: 5,
        end: "center 60%",
        start: "top 100%"
    }
})