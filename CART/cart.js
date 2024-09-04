let product = document.querySelector(".product");
let nav = document.querySelector("nav");
let checkout = document.querySelector(".checkout");

// START TIMELINE
let s = gsap.timeline();

s.from("nav div", {
    y:-100,
    duration: 1.2,
    stagger: 0.2,
    opacity: 0
})
s.from(".product tr", {
    y:100,
    duration: 1.2,
    stagger: 0.2,
    opacity: 0
})
s.from(".checkout div", {
    y:100,
    duration: 1.2,
    stagger: 0.2,
    opacity: 0
})














// QUANTITY CHANGE

let rows = document.querySelectorAll(".product tr");

rows.forEach( (r) => {
    if( r.querySelector(".q")){
        update(r);    }
});



// FUNCTION FOR EACH QUANTITY
function update(r){

    let q = r.querySelector(".q")

    let del = r.querySelector(".delbtn")
    let add = r.querySelector(".addbtn")


    let price = r.querySelector(".price")

    let originalprice = ( parseInt(price.textContent) / parseInt(q.textContent) );


  // INITIAL TOTAL PRICE ADD

  let totalPrice = document.querySelector(".main .checkout .pricesplit .price span");


  let totalPriceValue = parseInt(totalPrice.textContent) + parseInt(price.textContent);
  totalPrice.textContent = totalPriceValue.toString();

  

    // ADD EVENT
    add.addEventListener("click", () => {
       
        // TOTAL PRICE OLD VALUE DEL
        let totaldel = parseInt(totalPrice.textContent) - parseInt(price.textContent);
        totalPrice.textContent = totaldel.toString();

        // Quantity Increment
        let value = parseInt(q.textContent);
        value++;
        q.textContent = value.toString();



        // Price adds
        let priceNum = ( parseInt(price.textContent) + originalprice );
        price.textContent = priceNum.toString();


        // TOTAL PRICE ADD
        let totaladd = parseInt(totalPrice.textContent) + parseInt(price.textContent);
        totalPrice.textContent = totaladd.toString();

    })


    // DELETE EVENT
    del.addEventListener("click", () => {


        // TOTAL PRICE OLD VALUE DEL
        let totaldel = parseInt(totalPrice.textContent) - parseInt(price.textContent);
        totalPrice.textContent = totaldel.toString();


        // Quantity decrement
        let value = parseInt(q.textContent);
        value--;
        q.textContent = value.toString();

        if(value == 0){
            r.remove();
        }

        
        // Price decrement
        let priceNum = ( parseInt(price.textContent) - originalprice );
        price.textContent = priceNum.toString();



        // TOTAL PRICE ADD
        let totaladd = parseInt(totalPrice.textContent) + parseInt(price.textContent);
        totalPrice.textContent = totaladd.toString();
    })


}






