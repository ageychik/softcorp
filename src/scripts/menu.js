export default function menu(){
    const burger = document.querySelector('.navigation__burger');
    const toggleMenu = () => {
        burger.classList.toggle('navigation__burger_open');
        document.querySelector('html').classList.toggle('no--scroll')
    }

    const closeMenu = () => {
        burger.classList.remove('navigation__burger_open');
        document.querySelector('html').classList.remove('no--scroll')
    }

    burger.addEventListener('click', toggleMenu);
    window.addEventListener('resize', closeMenu);
    document.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('navigation__link')) closeMenu();
    })
}