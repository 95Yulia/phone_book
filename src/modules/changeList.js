import createEditMenu from "./createEditUser";
import getDataStorage from "./getData";
import removeData from "./removeDataLocalStorage";

function hideModal(selector) {
    document.querySelector(selector).style.display = 'none';
}

function changeUsersData() {
    const menuChange = document.querySelector('.menu-change');

    menuChange.onclick = function () {

        function removeEventListener() {
            contacts.forEach(contact => {
                contact.removeEventListener('mouseenter', enter);
            });
        }

        function enter(event) {
            let target = event.target;
            target.classList.add('hover');
            target.querySelector('.edit').classList.remove('none');

            target.querySelector('.btn_edit').onclick = function () {
                let name = target.querySelector('.name').textContent;
                let phone = target.querySelector('.phone').textContent;
                let email = target.querySelector('.email').textContent;
                let address = target.querySelector('.address').textContent;
                let avatar = target.querySelector('img').src;
                let index = target.querySelector('.userKey').textContent;

                createEditMenu(name, phone, email, address, avatar, index);
                removeEventListener();
            };

            target.querySelector('.btn_remove').onclick = function () {
                localStorage.getItem("phone_book");

                // localStorage.removeItem(target.querySelector('.userKey').textContent);
                removeData(target.querySelector('.userKey').textContent);
                getDataStorage();
                removeEventListener();
            };
        }

        function leave(event) {
            let target = event.target;
            target.classList.remove('hover');
            target.querySelector('.edit').classList.add('none');
        }

        const contacts =document.querySelectorAll('.contact');
        hideModal('.menu');

        contacts.forEach(contact => {
            contact.addEventListener('mouseenter', enter);
            contact.addEventListener('mouseleave', leave);
        });
    };
}
export default changeUsersData;