let menu = document.querySelector(".main-header");
let menuIcon = document.querySelector(".icon-menu");

menuIcon.addEventListener('click', burgerMenuOnOff);

menu.addEventListener('click', (e) => {
    if (!menu.classList.contains('active')) return;
    if (e.target.nodeName == "A") {
        burgerMenuOnOff();
    }
});

function burgerMenuOnOff() {
    menuIcon.classList.toggle('active');
    menu.classList.toggle('active');
    document.querySelector("body").classList.toggle('lock');
}

function ibg(){
    let elements = document.querySelectorAll('._ibg');
    elements?.forEach(function(item){
        let image = item.querySelector('img');
        if( image.src.length > 0 ){
            item.style.backgroundImage = `url("${image.src}")`;
        }
    });
}

ibg();

//=================================================================================

window.onload = function () {
    document.body.style.display = 'block';
}