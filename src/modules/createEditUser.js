import getDataStorage from "./getData";
import setData from "./setDataLocalStorage";
import getData from "./getDataLocalStorage";

function showModal(selector) {
    document.querySelector(selector).style.display = 'block';
}

function createEditMenu(name, phone, email, address, avatar, index) {

    const content = `
    <div class="popup-content">
        <form id="user_change" class="change-user" action="#">
            <h3>Редактировать пользователя</h3>
            <div class="user-avatar">
            <input id="avatar-icon" type="file" name="user_avatar" accept="image/jpeg,image/png" hidden>
             <label for="avatar-icon">
             <img src="${avatar}" alt="avatar" class="user-avatar-icon">
             </label>
            </div>
            <input class="form-input" name="user_name" type="text"  value="${name}" placeholder="Имя" required>
            <input class="form-input" name="user_phone" type="tel" value="${phone}" placeholder="Номер">
            <input class="form-input" name="user_email" type="email" value="${email}" placeholder="Электронная почта">
            <input class="form-input" name="user_address" type="text" value="${address}" placeholder="Адрес">
            <div class="btns">
                <button class="ok btn">Сохранить</button>
                <button class="cancel btn">Отмена</button>
            </div>
        </form>
    </div>
    `;

    const change = document.createElement('div');
    change.classList.add('popup');
    change.classList.add('change');

    change.innerHTML = content;

    document.querySelector('body').append(change);

    const form = change.querySelector('form');
    const btnCancel = form.querySelector('.cancel');

    let avatarIcon = form.user_avatar;
    const img = form.querySelector('img');
    let srcImgIcon = avatar;

    avatarIcon.onchange = function (){
        let file = avatarIcon.files[0];
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

    form.onsubmit = function (event) {
        event.preventDefault();

        let contact = getData(index);

        contact.name = form.user_name.value;
        contact.phone = form.user_phone.value;
        contact.email = form.user_email.value;
        contact.address = form.user_address.value;
        contact.avatar = srcImgIcon;

        setData(index, contact);

        // localStorage.setItem(index, JSON.stringify(contact));
        getDataStorage();
        showModal('.menu');
        change.remove();
    };

    btnCancel.onclick = function (e) {
        e.preventDefault();
        showModal('.menu');
        change.remove();
    };
}

export default createEditMenu;