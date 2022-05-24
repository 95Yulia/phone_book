import getDataStorage from "./getData";
import setData from "./setDataLocalStorage";

function hideModal(selector) {
    document.querySelector(selector).style.display = 'none';
}

function showModal(selector) {
    document.querySelector(selector).style.display = 'block';
}

function clearForm(input) {
    input.forEach(function (item) {
        item.value = "";
    });
}

function addUser() {
    const add = document.querySelector('.add');
    const menuAdd = document.querySelector('.menu-add');

    menuAdd.addEventListener('click', () => {
        showModal('.add');
        hideModal('.menu');
    });

    const btnCancel = add.querySelector('.cancel');
    const form = add.querySelector('.add-user');
    const input = form.querySelectorAll('input');
    const avatar = form.user_avatar;
    const img = form.querySelector('img');
    const defaultImgIcon = "./assets/avatar/2550383.png";
    let srcImgIcon = defaultImgIcon;

    avatar.oninput = function () {
        let file = avatar.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function() {
            img.src = reader.result;
            srcImgIcon = reader.result;
        };

        reader.onerror = function() {
            console.log(reader.error);
        };
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const objInfoContact = {};

        input.forEach( item => {
            if(item.name!=='user_avatar'){
                objInfoContact[item.name.slice(5)] = item.value;
            } else {
                    objInfoContact[item.name.slice(5)] = srcImgIcon;
            }
        });

        let nowDate = new Date();

        // localStorage.setItem(nowDate.toISOString(), JSON.stringify(objInfoContact));
        setData(nowDate.toISOString(), objInfoContact);
        getDataStorage(); //удалить для скрола

        clearForm(input);
        hideModal('.add');
        showModal('.menu');
        img.src = defaultImgIcon;
        srcImgIcon = defaultImgIcon;
    });

    btnCancel.addEventListener('click', (e) => {
        e.preventDefault();
        clearForm(input);
        hideModal('.add');
        showModal('.menu');
        img.src = defaultImgIcon;
        srcImgIcon = defaultImgIcon;
    });
}

export default addUser;