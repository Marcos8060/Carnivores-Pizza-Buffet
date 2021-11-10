// init UI
const ui = new UI;

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
    appendItemsInCart();
    getSubToTals();
}
// get subtotals
function getSubToTals(){
    ui.getSubToTals();
}
// append items in cart
function appendItemsInCart(){
    ui.cartItems.innerHTML = "";
    cart.forEach((item)=>{
        ui.appendItemsInCart(item.imgSrc,item.numberOfUnits,item.price,item.id);
    })
}

// change number of units
function changeUnits(action,id){
    cart = cart.map((item)=>{
        let numberOfUnits = item.numberOfUnits;
        if(item.id === id){
            if(action === 'minus'){
                numberOfUnits--
            }else if(action === 'plus'){
                numberOfUnits++
            }
        }
        return {
            ...item,
            numberOfUnits,
        }
    })
    updateCart();
}

