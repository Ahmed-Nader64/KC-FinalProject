// OPEN & CLOSE CART
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () => {
    cart.classList.add("active");
});

closeCart.addEventListener("click", () => {
    cart.classList.remove("active");
});

// Start when the document is ready
if (document.readyState == "loading") {
    document.addEventListener('DOMContendocumenttLoaded', start);
}else{
    start();
}

//== START ==
function start() {
    addEvents();
}

//== UPADATE & RERENDER ==
function update() {
    addEvents();
    updateTotal();
}

//==ADD ENENTS==
function addEvents() {
    // Remove items from cart
    let cartRemove_btns = document.querySelectorAll(".cart-remove");
    console.log(cartRemove_btns);
    cartRemove_btns.forEach((btn) => {
        btn.addEventListener("click", handle_removeCartItem);
    });

    // Change item quantity
    let cartQuantity_inputs = document.querySelectorAll('.cart-quantity');
    cartQuantity_inputs.forEach((input) => {
        input.addEventListener("change", handle_changeItemQuantity);
    });

    // Add item to cart
    let addCart_btns = document.querySelectorAll(".add-cart");
    addCart_btns.forEach((btn) => {
        btn.addEventListener("click", handle_addCartItem);
    });
}

// == HANDLE EVENNTS FUNCTIONS ==
let itemsAdded = []

function handle_addCartItem() {
    let product = this.parentElement.parentElement;
    let title = product.querySelector('.product-title').innerHTML;
    let cal = product.querySelector('.product-cal').innerHTML;
    let imgSrc = product.querySelector('.product-img').src;
    console.log(title, cal, imgSrc);

    let newToAdd = {
        title,
        cal,
        imgSrc,
    };

    // handle item is already exist
    if(itemsAdded.find((el) => el.title == newToAdd.title)) {
        alert("This Item is Already Exist!");
        return;
    }else{
        itemsAdded.push(newToAdd);
    }

    // Add product to cart
    let cartBoxElement = CartBoxComponent(title, cal, imgSrc);
    let newNode = document.createElement("div");
    newNode.innerHTML = cartBoxElement;
    const cartContent = cart.querySelector(".cart-content")
    cartContent.appendChild(newNode)

    update()
}

function handle_removeCartItem() {
    this.parentElement.remove();
    // itemsAdded = itemsAdded.filter(
    //     (el) =>
    //     el.title !=
    //     this.parentElement.querySelector(".cart-product-title").innerHTML
    // );

    update();
}

function handle_changeItemQuantity() {
    if(isNaN(this.value) || this.value < 1) {
        this.value = 1;
    }
    this.value = Math.floor(this.value) // to keep it integer

    update();
}

// == UPDATE & RERENDER FUNCTIONS ==
function updateTotal() {
    let cartBoxes = document.querySelectorAll(".cart-box");
    const totalElement = cart.querySelector(".total-cal");
    let total = 0;
    cartBoxes.forEach((cartBox) => {
        let calElement = cartBox.querySelector(".cart-cal");
        let cal = parseFloat(calElement.innerHTML.replace("",""));
        let quantity = cartBox.querySelector(".cart-quantity").value;
        total += cal * quantity ;
        localStorage.setItem("totalcal",total);
    });
    // keep 2 digits after the decimal piont
    total = total.toFixed(2);
    // or you can use also
    // total = Math.round(total * 100) / 100;

    totalElement.innerHTML = total + "cal";

}

// == HTML COMPONENTS ==
function CartBoxComponent(title, cal, imgSrc) {
    return `
    <div class="cart-content">
    <!-- TEST BOX -->
    <div class="cart-box">
      <img src=${imgSrc} class="cart-img" alt="meal2">
      <div class="detail-box">
        <div class="cart-title">${title}</div>
        <div class="cart-cal">${cal}</div>
        <input type="number" value="1" class="cart-quantity">
      </div>
      <!-- REMOVE CART -->
      <i class='bx bxs-trash-alt cart-remove'></i>
    </div>
    </div>`;
}

function toggle() {
    let sec = document.getElementById("sec");
    sec.classList.toggle("active");
    let nav = document.getElementById("navigation");
    nav.classList.toggle("active");
}