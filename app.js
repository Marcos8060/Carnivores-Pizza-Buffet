// init UI
const ui = new UI;

const cartItems = document.querySelector('.cartItems');
// iterate through the products array
products.forEach((product)=>{
    ui.displayProducts(product.imgSrc,product.title,product.size,product.price,product.id);
})


// add to cart function
let cart = [];

function addToCart(id){
    // check if product already in cart
    if(cart.some((item)=>item.id === id)){
        alert('Product already in cart!')
    }else{
        const item = products.find((product)=> product.id === id);
  
        cart.push({
            ...item,
            numberOfUnits: 1,
        })
    }
    updateCart();
}
// update cart
function updateCart(){
    appendItemsIncart();
}
// append items in cart
function appendItemsIncart(){
    cart.forEach((item)=>{
        cartItems.innerHTML += `
                <div class="items d-flex justify-content-between align-items-center underline1">
                <img class="img-fluid" src=${item.imgSrc} alt="pizza" style="width: 60px;">
                <div class="units d-flex justify-content-between align-items-center">
                <img src="https://img.icons8.com/ios-glyphs/30/fa314a/plus-math.png"/>
                <b style="font-size: 25px;">${item.numberOfUnits}</b>
                <img src="https://img.icons8.com/material/24/fa314a/minus--v2.png"/>
                </div>
                <h4>$${item.price}</h4>
                </div>
        `
    })
}

