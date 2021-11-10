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
  
        cart.push(item)
        console.log(cart);
    }
}

