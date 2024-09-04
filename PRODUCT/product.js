let footer = document.querySelector("footer");

let ps = document.querySelector(".c .ps");

const p = `

<div class="p">

  <a href="../PRODUCTPAGE/productpage.html">

    <img src="ICON/ball.png" alt="ball">
    <span class="pname">Product Name</span>

  </a>  


  <div class="pinfo">
     
      <div class="pprice">Price 
         <span>999</span></div>
      <button>Add to Cart</button>
  
    </div>

</div>  


`;


let scrollTrigger = gsap.to("footer", {


    scrollTrigger: {
        trigger: "footer",
        scroller: "body",
        end: "20% bottom",
        start: "0% bottom",
        onEnter: () => addp()
    }

});

let count = 0;
function addp(){

  if(count < 5){

    let newElements = [];

    for(i = 0; i < 10; i++){

      let newElement = document.createElement("div");

      newElement.innerHTML = p;

      ps?.appendChild(newElement);

      newElements.push(newElement);
    }
    
    gsap.from(newElements, {
      y:100,
      opacity: 0,
      duration: 1.5,
      stagger: 0.4,
      ease: "power2.out"
    });

  }
  
  count++;
  scrollTrigger.scrollTrigger.refresh();
}













let loading = gsap.timeline();

loading.from("nav div", {
  y: 100,
  opacity: 0,
  duration: 1.2
})
loading.from(".menu", {
  opacity: 0
})
loading.from(".menu button", {
  y:100,
  opacity: 0,
  duration: 1.5,
  stagger: 0.4
})
loading.from(".c .title", {
  y: 100,
  opacity: 0,
  duration: 1.2,
  delay: -1
})
loading.from(".c .ps .p", {
  y:100,
  opacity: 0,
  duration: 1.5,
  stagger: 0.4
})