/*---------- SHOW MENU ----------*/
const nav = document.getElementById('nav-menu'),
      toggle = document.getElementById('nav-toggle');
let menuShowed = false;

toggle.addEventListener('click', () => {
    
    menuShowed = menuShowed ? false : true;
    
    if(menuShowed) {
        nav.classList.add('show');
    }
    else {
        nav.classList.remove('show');
    }

});

/*--------- CHANGE COLORS ----------*/
const sizes = document.querySelectorAll('.size__tallas'),
      colors = document.querySelectorAll('.sneaker__color'),
      sneakers = document.querySelectorAll('.sneaker__img');

function changeSize() {
    
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');

}

function changeColor() {

    let primary = this.getAttribute('primary'),
        color = this.getAttribute('color'),
        sneakerColor = document.querySelector(`.sneaker__img[color="${color}"]`);

    colors.forEach(color => color.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary);
    
    sneakers.forEach(sneaker => sneaker.classList.remove('shows'));
    sneakerColor.classList.add('shows');
}

sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(color => color.addEventListener('click', changeColor));
