function createContact(name, phone, address, email, avatar, index, displayContact="flex") {
    const main = document.querySelector('.main');
    const contact = document.createElement('div');
    contact.className = 'contact';
    // contact.title = index;
    contact.style.display = displayContact;
    main.append(contact);

    const contactKey = document.createElement('div');
    contactKey.className = "userKey";
    contactKey.style.display = "none";
    contactKey.textContent = index;
    contact.append(contactKey);

    const elemAvatar = document.createElement('div');
    elemAvatar.className = 'avatar';


    const img = document.createElement('img');
    img.src = avatar;
    img.alt = "avatar";
    img.className = "avatar-icon";
    elemAvatar.append(img);

    const elemName = document.createElement('div');
    elemName.className = 'name';
    elemName.textContent = name;

    const elemPhone = document.createElement('div');
    elemPhone.className = 'phone';
    elemPhone.textContent = phone;

    const elemAddress = document.createElement('div');
    elemAddress.className = 'address';
    elemAddress.textContent = address;

    const elemEmail = document.createElement('div');
    elemEmail.className = 'email';
    elemEmail.textContent = email;

    const elemEdit = document.createElement('div');
    elemEdit.className = 'edit';
    elemEdit.classList.add('none');

    const btnEdit = document.createElement('button');
    btnEdit.className = 'btn_edit';
    btnEdit.textContent = "Редактировать";
    elemEdit.append(btnEdit);

    const btnRemove = document.createElement('button');
    btnRemove.className = 'btn_remove';
    btnRemove.textContent = "Удалить";
    elemEdit.append(btnRemove);

    contact.append(elemAvatar, elemName, elemPhone, elemAddress, elemEmail, elemEdit);
}

export default createContact;