window.onload = function () {
    var ticker = document.getElementById("ticker");

    function updateticker(position) {
        var now = new Date();
        var dateStr = now.toLocaleDateString();
        var timeStr = now.toLocaleTimeString();
        var locationStr = "Unknown";
        
        if (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            locationStr = "Latitude: " + latitude + ", Longitude: " + longitude;
        }
        
        ticker.innerText = "Date: " + dateStr + " | Time: " + timeStr + " | Location: " + locationStr;
    }

    function getLocation() {
        navigator.geolocation.getCurrentPosition(updateticker, function (error) {
            console.error("Error getting Location", error);
            updateticker(null);
        });
    }

    setInterval(getLocation, 1000); // Update location every second
}

var visitorCount = 1000;
function updateVisitorCount() {
    var visitorCountElement = document.getElementById("visitor-count");
    visitorCountElement.textContent = visitorCount.toLocaleString();
    visitorCount++;
}
setInterval(updateVisitorCount, 10000)


let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formhBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

videoBtn.forEach(btn =>{
    console.log("test");
    btn.addEventListener('click' ,()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    })
})


window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}
menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formhBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

//////////////////////////////////////////////////////////////

//  gallery section java 

//search functionality
function filter() {
    var filterValue, input, ProductList, Product, ProductName, h4, i;
    input = document.getElementById("search");
    filterValue = input.Value.toUpperCase();
    ProductList = document.getElementById("product-list");
    ProductName = ProductList.getElementsByClassName("col-4");
    for (i = 0; i < ProductName.length; i++) {
        h4 = ProductName[i].getElementsByTagName("h4")[0];

        if (h4.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            ProductName[i].style.display = "";
        }
        else {
            ProductName[i].style.display = "none";
        }
    }
}
///sort product by price
function sortList() {
    var ProductList, ProductName, i, switching, b, c, shouldSwitch;
    ProductList = document.getElementById("product-list");
    ProductName = ProductList.getElementsByClassName("col-4");
    switching = true; //boolean true
    while (switching) {
        switching = false;
        //loop is running through each product
        for (i = 0; i < (ProductName.length - 1); i++) {
            shouldSwitch = false;
            b = ProductName[i].getElementsByTagName("span")[0].innerHTML;
            c = ProductName[i + 1].getElementsByTagName("span")[0].innerHTML;
            if (Number(b) > Number(c)) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            ProductName[i].parentNode.insertBefore(ProductName[i + 1],
                ProductName[i]);
            switching = true;

        }
    }
}
