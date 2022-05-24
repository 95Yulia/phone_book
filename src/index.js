import "./assets/styles/style.css";
import menu from "./modules/menu";
import addUser from "./modules/addUser";
import search from "./modules/search";
import getDataStorage from "./modules/getData";
import changeUsersData from "./modules/changeList";
import exportContact from "./modules/export";
import importContacts from "./modules/import";
import setData from "./modules/setDataLocalStorage";

window.addEventListener('load', () => {
        menu();
        getDataStorage(); //Удалить для скролла
        addUser();
        search('search');
        changeUsersData();
        exportContact();
        importContacts();
});
