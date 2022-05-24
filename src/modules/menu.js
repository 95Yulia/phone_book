function menu() {
    const menu = document.querySelector('.popup-menu');
    const menuItems = menu.querySelectorAll('li');
    const menuIcon = document.querySelector('.icon');

    menuIcon.addEventListener('click', ()=> {
        showModal('.menu');
    });

    document.querySelector('.menu').addEventListener('click', (e) => {
        if(e.target.classList.contains('popup')){
            hideModal('.menu');
        }
    });

    menuItems.forEach(item => {
        item.addEventListener('mouseenter', setMenuStyle);
        item.addEventListener('mouseleave', (event) => {
            event.target.querySelector('svg').style.fill = '#263b68';
            event.target.style.color = '#263b68';
            menu.style.setProperty('--color', '#fefefe #fefefe #fefefe #fefefe');
        });
    });

    function setMenuStyle(event) {
        event.target.querySelector('svg').style.fill = '#fefefe';
        event.target.style.color = '#fefefe';

        switch (event.target.className) {
            case 'menu-add':
                menu.style.setProperty('--color', '#263b68 #fefefe #fefefe #fefefe');
                break;
            case 'menu-export':
                menu.style.setProperty('--color', ' #fefefe #263b68 #fefefe #fefefe');
                break;
            case 'menu-change':
                menu.style.setProperty('--color', ' #fefefe #fefefe #263b68 #fefefe');
                break;
            case 'menu-import':
                menu.style.setProperty('--color', ' #fefefe #fefefe #fefefe #263b68');
                break;
        }
    }

    function hideModal(selector) {
        document.querySelector(selector).style.display = 'none';
    }

    function showModal(selector) {
        document.querySelector(selector).style.display = 'block';
    }
}

export default menu;












