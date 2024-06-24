let menuBtn=document.querySelector('.menu-btn')
let menu=document.querySelector('.menu')
let menuItems=document.querySelectorAll('.menu-item')

let menuState=0;
function openMenu(){
    if(menuState===0){
        menu.style.right=0;
        menuState=1;
    }
    else{
        menu.style.right='-40%';
        menuState=0;
    }
}
menuBtn.addEventListener('click',openMenu)


menuItems.forEach(item=>{
    item.addEventListener('click',openMenu)
})

