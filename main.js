// If i click on hamburger menu it means it show the whole menu
// This is our first page navbar right side javascript

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav= document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    });
}
    if(close) {
        close.addEventListener('click', ()=>{
            nav.classList.remove('active');
        });
    
}