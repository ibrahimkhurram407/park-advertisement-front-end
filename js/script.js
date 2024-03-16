let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formhBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');




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

videoBtn.forEach(btn =>{
    btn.addEventListener('click' ,()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    })
})






{/* <header>
<div id="menu-bar" class="fas fa-bars"></div>
<a href="index.html" class="logo"><span>Keans</span>burg Park</a>
<nav class="navbar">
  <a href="#home"> Home</a>
  <a href="#book"> book</a>
  <a href="#about"> about</a>
  <a href="#services"> services</a>
  <a href="#gallery"> gallery</a>
  <a href="#review"> review</a>
  <a href="#features">Features</a>
  <a href="#contact"> contact</a>
</nav>
<div class="icons">
  <i class="fas fa-search" id="search-btn"></i>
  <i class="fas fa-user" id="login-btn"></i>
</div>

<form action="" class="search-bar-container">
<input type="search" id="search-bar" placeholder="search here...">
<label for="search-bar" class="fas fa-search" ></label>
</form>
</header> */}