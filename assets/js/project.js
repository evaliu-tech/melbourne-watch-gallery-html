//shoppingcart function
function add_item(ele){
    // 1. Get the product name,image url, price
    let price=ele.parentElement.querySelector("span").innerHTML;
    let name=ele.parentElement.parentElement.querySelector("h2").innerHTML;
    let image=ele.parentElement.parentElement.querySelector("img").src;
    //console.log(price,name,image);

    // 2. Get the current shopping list from local storage
    let shopping_cart= JSON.parse(localStorage.getItem("shopping_cart"));
    if (shopping_cart === null) shopping_cart = [];

    // 3. append the new item into the current shopping list 
    product={price:price,name:name,image:image}
    shopping_cart.push(product);

    // 4. Save the shopping list into local storage
    localStorage.setItem("shopping_cart", JSON.stringify(shopping_cart));

    //5.display product 
    display_shoppingcart();
}

function display_shoppingcart(){
    // Get the current shopping list from local storage
    let shopping_cart= JSON.parse(localStorage.getItem("shopping_cart"));
    if (shopping_cart === null) shopping_cart = [];

    let content="";
    let total=0;
    shopping_cart.forEach((shopping_cart,index) => {
        content += `
        <div class="cart_item">
            <img 
                src="${shopping_cart.image}"
                alt="cart item image"
            />
            <h2>${shopping_cart.name}</h2>
            <h2>$${shopping_cart.price}</h2>
            <button onclick="remove_item(${index})" class="btn btn-secondary" >Remove</button>
        </div>
        `;
        total+=parseInt(shopping_cart.price);
    });
    
    document.getElementById("shopping_container").innerHTML = content;
    document.getElementById("total").innerHTML = "$"+total;
    document.getElementById("item_count").innerHTML = shopping_cart.length;
}

function remove_item(index){
    // Get the current shopping list from local storage
    let shopping_cart= JSON.parse(localStorage.getItem("shopping_cart"));
    if (shopping_cart === null) shopping_cart = [];

    //remove product
    shopping_cart.splice(index,1);

    //Save the shopping list into local storage
    localStorage.setItem("shopping_cart", JSON.stringify(shopping_cart));

    //display product 
    display_shoppingcart();
}

function change_image(ele){
    document.querySelector(".main_image").src=ele.src;
}

function add_item2(ele){
    // 1. Get the product name,image url, price
    let price=ele.parentElement.querySelector("span").innerHTML;
    let name=ele.parentElement.parentElement.querySelector("h2").innerHTML;
    let image=ele.parentElement.parentElement.querySelector(".thumbnail_images img").src;
    //console.log(price,name,image);

    // 2. Get the current shopping list from local storage
    let shopping_cart= JSON.parse(localStorage.getItem("shopping_cart"));
    if (shopping_cart === null) shopping_cart = [];

    // 3. append the new item into the current shopping list 
    product={price:price,name:name,image:image}
    shopping_cart.push(product);

    // 4. Save the shopping list into local storage
    localStorage.setItem("shopping_cart", JSON.stringify(shopping_cart));

    //5.display product 
    display_shoppingcart();
}
