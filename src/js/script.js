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

//=================================================================================

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
    document.addEventListener('click', documentActions);
    document.addEventListener('submit', documentSubmitActions);

    function documentActions(e) {
        const targetElement = e.target;

        if (targetElement.closest('.slider-dest__image') || targetElement.closest('.slider-offer__image') || targetElement.closest('.article-blog__link') || targetElement.closest('.slider-planner__image')) {
            e.preventDefault();
        }
    }

    function documentSubmitActions(e) {
        const targetElement = e.target;
        if (targetElement.classList.closest('subscribe__form')) {
            e.preventDefault();
            targetElement.reset();
        }
    }
}