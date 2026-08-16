let cart = [];


/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    if (menu) {
        menu.classList.toggle("active");
    }

}


/* =========================
   ADD TO CART
========================= */

function addToCart(name, price) {

    const existingProduct =
        cart.find(function(item) {
            return item.name === name;
        });

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    updateCart();

    alert(name + " imeongezwa kwenye cart 🛒");

}


/* =========================
   UPDATE CART
========================= */

function updateCart() {

    const items =
        document.getElementById("cart-items");

    const count =
        document.getElementById("cart-count");

    const totalElement =
        document.getElementById("cart-total");

    if (!items || !count || !totalElement) {
        return;
    }

    items.innerHTML = "";

    let total = 0;
    let totalQuantity = 0;


    cart.forEach(function(item, index) {

        total += item.price * item.quantity;

        totalQuantity += item.quantity;


        items.innerHTML += `

            <div class="cart-item">

                <div>

                    <h4>
                        ${item.name}
                    </h4>

                    <p>
                        TZS ${item.price.toLocaleString()}
                    </p>

                    <div class="quantity-controls">

                        <button
                            onclick="decreaseQuantity(${index})"
                        >
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            onclick="increaseQuantity(${index})"
                        >
                            +
                        </button>

                    </div>

                </div>


                <button
                    onclick="removeItem(${index})"
                >
                    🗑️
                </button>

            </div>

        `;

    });


    count.textContent =
        totalQuantity;

    totalElement.textContent =
        total.toLocaleString();

}


/* =========================
   INCREASE QUANTITY
========================= */

function increaseQuantity(index) {

    cart[index].quantity++;

    updateCart();

}


/* =========================
   DECREASE QUANTITY
========================= */

function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    updateCart();

}


/* =========================
   REMOVE ITEM
========================= */

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();

}


/* =========================
   OPEN CART
========================= */

function openCart() {

    const cartPanel =
        document.getElementById("cart-panel");

    if (cartPanel) {

        cartPanel.classList.add("active");

    }

}


/* =========================
   CLOSE CART
========================= */

function closeCart() {

    const cartPanel =
        document.getElementById("cart-panel");

    if (cartPanel) {

        cartPanel.classList.remove("active");

    }

}


/* =========================
   SEARCH
========================= */

function searchProducts() {

    const input =
        document.getElementById("product-search");

    if (!input) return;

    const search =
        input.value.toLowerCase();

    const products =
        document.querySelectorAll(".product-card");


    products.forEach(function(product) {

        const dataName =
            product.getAttribute("data-name");

        if (!dataName) return;

        const name =
            dataName.toLowerCase();


        product.style.display =
            name.includes(search)
            ? "block"
            : "none";

    });

}


/* =========================
   CATEGORY FILTER
========================= */

function filterCategory(category) {

    const products =
        document.querySelectorAll(".product-card");


    products.forEach(function(product) {

        const name =
            product.getAttribute("data-name");

        if (!name) return;

        const productName =
            name.toLowerCase();


        if (category === "phone") {

            product.style.display =
                productName.includes("phone")
                ? "block"
                : "none";

        }

        else if (category === "laptop") {

            product.style.display =
                productName.includes("laptop")
                ? "block"
                : "none";

        }

        else if (category === "audio") {

            product.style.display =
                productName.includes("audio") ||
                productName.includes("earbuds")
                ? "block"
                : "none";

        }

        else if (category === "accessory") {

            product.style.display =
                productName.includes("charger") ||
                productName.includes("power bank") ||
                productName.includes("smart watch")
                ? "block"
                : "none";

        }

    });


    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   SHOW ALL PRODUCTS
========================= */

function showAllProducts() {

    const products =
        document.querySelectorAll(".product-card");


    products.forEach(function(product) {

        product.style.display = "block";

    });


    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   CHECKOUT WHATSAPP
========================= */

function checkout() {

    if (cart.length === 0) {

        alert("Cart yako iko tupu.");

        return;

    }


    let message =
        "Hello MACK TECH,%0A%0A";

    message +=
        "Nataka ku-order:%0A";


    let total = 0;


    cart.forEach(function(item, index) {

        const itemTotal =
            item.price * item.quantity;

        message +=
            (index + 1) +
            ". " +
            item.name +
            " x" +
            item.quantity +
            " - TZS " +
            itemTotal.toLocaleString() +
            "%0A";

        total += itemTotal;

    });


    message +=
        "%0ATotal: TZS " +
        total.toLocaleString();


    message +=
        "%0A%0AAsante.";


    const phone =
        "255791315310";


    const url =
        "https://wa.me/" +
        phone +
        "?text=" +
        message;


    window.open(url, "_blank");

}


/* =========================
   CONTACT WHATSAPP
========================= */

function contactWhatsApp() {

    const phone =
        "255791315310";


    const message =
        "Hello MACK TECH, naomba maelezo kuhusu bidhaa zenu.";


    const url =
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(message);


    window.open(url, "_blank");

}


/* =========================
   PRODUCT DETAILS
========================= */

let selectedProduct = "";
let selectedPrice = 0;


function showProductDetails(productName) {

    const products = {

        "Mobile Phone": {
            price: 450000,
            image: "iphone.jpg",
             images:[ "phone2.jpg",
                   "phone3.jpg",
                   "phone.jpg"
                   ],
            rating: "⭐⭐⭐⭐⭐",
            description:
                "Smartphone yenye performance nzuri, camera nzuri na battery ya kudumu."
        },

        "Wireless Earbuds": {
            price: 65000,
            image: "oraimo.jpg",
            images:["earbuds2.jpg",
                   "earbuds4.jpg",
                   "earbuds.jpg"
                   ],
            rating: "⭐⭐⭐⭐⭐",
            description:
                "Wireless earbuds zenye sauti nzuri, Bluetooth na battery inayodumu."
        },

        "Power Bank": {
            price: 45000,
            image: "mtu.jpg",
            images:[ "powerbank.jpg" ,
      
                        "powerbank1.jpg",
                        "powerbank2.jpg"
                        ],
            rating: "⭐⭐⭐⭐⭐",
            description:
                "Power bank kwa ajili ya kuchaji simu na vifaa vyako ukiwa safarini."
        },

        "Smart Watch": {
            price: 85000,
            image: "kitu.jpg",
            images:["smartwatch1.jpg",
                    "smartwatch.jpg",
                    "smartwatch3.jpg"
            ],
            rating: "⭐⭐⭐⭐⭐",
            description:
                "Smart watch yenye design nzuri kwa matumizi ya kila siku na notifications."
        },

        "Fast Charger": {
            price: 35000,
            image: "raino.jpg",
            images:["charger4.jpg",
                    "charger2.jpg",
                    "charger3.jpg"
            ],
            rating: "⭐⭐⭐⭐⭐",
            description:
                "Fast charger kwa ajili ya kuchaji simu yako kwa haraka na usalama."
        },

      "Laptop": {
    price: 1250000,
    image: "microsoft.jpg",
    images: [    
        "laptop.jpg",
        "laptop2.jpg",
        "laptop3.jpg"
],    
    rating: "⭐⭐⭐⭐⭐",
    description:
        "Laptop yenye performance nzuri kwa masomo, kazi na matumizi ya kila siku."
}
    };


    const product =
        products[productName];


    if (!product) return;


    selectedProduct =
        productName;

    selectedPrice =
        product.price;

document.getElementById(
    "modal-product-image"
).src = product.image;
galleryImages = product.images || [product.image];

document.getElementById("thumb-0").src = galleryImages[0];
document.getElementById("thumb-1").src = galleryImages[1];
document.getElementById("thumb-2").src = galleryImages[2];
    document.getElementById(
        "modal-product-name"
    ).textContent =
        productName;
        
        document.getElementById(
    "modal-product-rating"
).textContent = product.rating;


    document.getElementById(
        "modal-product-description"
    ).textContent =
        product.description;


    document.getElementById(
        "modal-product-price"
    ).textContent =
        product.price.toLocaleString();


    document.getElementById(
        "product-modal"
    ).classList.add("active");

}


/* =========================
   ADD MODAL PRODUCT
========================= */

function addModalProductToCart() {

    addToCart(
        selectedProduct,
        selectedPrice
    );

    closeProductDetails();

}


/* =========================
   CLOSE PRODUCT MODAL
========================= */

function closeProductDetails() {

    document.getElementById(
        "product-modal"
    ).classList.remove("active");

}


/* =========================
   START
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateCart();

    }
);
/* =========================
   CHECKOUT FORM
========================= */

function openCheckoutForm() {

    if (cart.length === 0) {

        alert("Cart yako iko tupu.");

        return;

    }

    document
        .getElementById("checkout-form")
        .classList.add("active");
showOrderSummary();
}


function closeCheckoutForm() {

    document
        .getElementById("checkout-form")
        .classList.remove("active");

}


function confirmOrder() {

    const name =
        document.getElementById("customer-name").value.trim();

    const phone =
        document.getElementById("customer-phone").value.trim();

    const location =
        document.getElementById("customer-location").value.trim();

    const payment =
        document.getElementById("payment-method").value;


    if (!name || !phone || !location || !payment) {

        alert("Tafadhali jaza taarifa zote.");

        return;

    }


    let message =
        "Hello MACK TECH,%0A%0A";

    message +=
        "NEW ORDER%0A%0A";

    message +=
        "Jina: " +
        encodeURIComponent(name) +
        "%0A";

    message +=
        "Simu: " +
        encodeURIComponent(phone) +
        "%0A";

    message +=
        "Delivery: " +
        encodeURIComponent(location) +
        "%0A";

    message +=
        "Payment: " +
        encodeURIComponent(payment) +
        "%0A%0A";


    let total = 0;

    message += "PRODUCTS:%0A";


    cart.forEach(function(item, index) {

        const itemTotal =
            item.price * item.quantity;

        message +=
            (index + 1) +
            ". " +
            encodeURIComponent(item.name) +
            " x" +
            item.quantity +
            " - TZS " +
            itemTotal.toLocaleString() +
            "%0A";

        total += itemTotal;

    });


    message +=
        "%0ATOTAL: TZS " +
        total.toLocaleString();


    const url =
        "https://wa.me/255791315310?text=" +
        message;


    window.open(url, "_blank");
    document.getElementById("checkout-form").classList.remove("active");

document.getElementById("order-success").classList.add("active");

}
/* =========================
   ORDER SUMMARY
========================= */

function showOrderSummary() {

    const summary =
        document.getElementById("order-summary");

    if (!summary) return;

    let total = 0;

    let html =
        "<strong>Order Summary</strong><br><br>";


    cart.forEach(function(item) {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;

        html +=
            item.name +
            " × " +
            item.quantity +
            " — TZS " +
            itemTotal.toLocaleString() +
            "<br>";

    });


    html +=
        "<br><strong>Total: TZS " +
        total.toLocaleString() +
        "</strong>";


    summary.innerHTML = html;

}
/* =========================
   PAYMENT INFORMATION
========================= */

document.addEventListener("DOMContentLoaded", function() {

    const payment =
        document.getElementById("payment-method");

    if (!payment) return;

    payment.addEventListener("change", function() {

        const info =
            document.getElementById("payment-info");

        if (!info) return;

        if (this.value === "Mobile Money") {

            info.innerHTML =
                "📱 Mobile Money<br>" +
                "Baada ya kuthibitisha order, " +
                "MACK TECH itakutumia maelekezo ya malipo.";

        }

        else if (this.value === "Bank") {

            info.innerHTML =
                "🏦 Bank Payment<br>" +
                "Baada ya kuthibitisha order, " +
                "MACK TECH itakutumia taarifa za benki.";

        }

        else if (this.value === "Cash on Delivery") {

            info.innerHTML =
                "💵 Cash on Delivery<br>" +
                "Utalipa wakati wa kupokea bidhaa.";

        }

        else {

            info.innerHTML = "";

        }

    });

});
function closeOrderSuccess() {
    document
        .getElementById("order-success")
        .classList.remove("active");
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    const button = document.querySelector(".theme-btn");

    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        button.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
}
document.addEventListener("DOMContentLoaded", function () {

    const savedTheme = localStorage.getItem("theme");
    const button = document.querySelector(".theme-btn");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");

        if (button) {
            button.textContent = "☀️";
        }
    }

});
window.addEventListener("load", function () {

    const loadingScreen =
        document.getElementById("loading-screen");

    if (loadingScreen) {
        loadingScreen.classList.add("hide");

        setTimeout(function () {
            loadingScreen.style.display = "none";
        }, 500);
    }

});
window.addEventListener("scroll", function () {

    const backToTop =
        document.getElementById("back-to-top");

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
let galleryImages = [];

function changeProductImage(index) {

    if (!galleryImages[index]) {
        return;
    }

    document.getElementById(
        "modal-product-image"
    ).src = galleryImages[index];

} 