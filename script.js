let toggleBtn = document.querySelector('.toggle-btn');
let closeBtn = document.querySelector('.close-btn');
let sideBar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', ()=>{
    sideBar.classList.add('showSideBar');
})

closeBtn.addEventListener('click', ()=>{
    sideBar.classList.remove('showSideBar');
})