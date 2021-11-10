class UI  {
    constructor(){
        this.showProducts = document.querySelector('.menuItems');
    }

    displayProducts(img,title,size,price,id){
        this.showProducts.innerHTML += `
                        <div class="col products">
                        <img class="img-fluid" src=${img} alt="pizza">
                        <h2>${title}</h2>
                        <h4>Size: ${size}</h4>
                        <div class="price">
                        <div>
                        <h5 class="font-weight-bold">Price: $${price}</h5>
                        </div>
                        <div>
                        <img style="height: 30px;margin-top: -10px;width: 30px;" src="https://img.icons8.com/fluency/48/000000/star.png"/>4.8 (5.9k Review)
                        </div>
                        </div>
                        <select class="form-select" aria-label="Default select example">
                        <option selected>Choose topping</option>
                        <option value="1">Pepperoni</option>
                        <option value="2">Mushroom</option>
                        <option value="3">Bacon</option>
                        </select>
                        <button class="btn2" onClick="addToCart(${id})">Add to cart</button>
                    </div>
        `
    }
}