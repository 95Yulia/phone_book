import createContact from "./createContact";
import computedScroll from "./scrol";

function getDataStorage() {
    let countContacts = document.querySelectorAll('.contact').length;
    // console.log('countContacts',countContacts);

    document.querySelector('.main').innerHTML = '';

    let arrUsers = [];

    if (localStorage.getItem("phone_book") == null || localStorage.getItem("phone_book") == undefined) return;

    let objData = JSON.parse(localStorage.getItem("phone_book"));

    for (let key in objData) {
        objData[key].index = key;
        arrUsers.push(objData[key]);
    }

        // for (let i = 0, length = JSON.parse(objData.length); i < length; i++) {
        //         const key = localStorage.key(i);
        //         const value = JSON.parse(localStorage[key]);
        //         value.index = localStorage.key(i);
        //         arrUsers.push(value);
        // }

        arrUsers.sort(function(a, b){
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
        });

    if(arrUsers.length ===0) return

    createContactWithSearch(arrUsers[0]);

    const count = computedScroll();

    let c = count;

    function addItem(arrUsers, start, end, n) {
        for (let i = start;( i < end && i < arrUsers.length); i++){
            createContactWithSearch(arrUsers[i]);
            n = i;
            // console.log('i',i);
        }
        // console.log('n', n);
        return n;
    }

    if (countContacts === 0) {
        addItem(arrUsers, 1, count);
        c = count - 1;
    } else if(Math.abs(arrUsers.length - countContacts) === 1) {
        addItem(arrUsers, 1, arrUsers.length);
    } else {
        if (countContacts < count) {
            addItem(arrUsers, 1, count);
        } else {
            addItem(arrUsers, 1, countContacts);
            c = countContacts - 1;
        }
    }

    const main = document.querySelector('.main');

    main.onscroll = function (event) {
        if (Math.abs(arrUsers.length - countContacts) === 1) return;
        if (document.getElementById('search').value) return;
        let height = event.target.scrollHeight;
        let scrollTop = event.target.scrollTop;
        let clientHeight = event.target.clientHeight;
        let a = height - scrollTop - clientHeight;

        if (a < 30 && (c + 1) < arrUsers.length) {
            // console.log('c',c);
            c = addItem(arrUsers, c+1, ((c+1)+count), c);
        }
    };

    function createContactWithSearch(item) {
        const searchInput = document.getElementById('search');
        if(searchInput.value) {
            if (!(item.name.includes(searchInput.value) || item.phone.includes(searchInput.value) || item.email.includes(searchInput.value) || item.address.includes(searchInput.value))) {
                createContact(item.name, item.phone, item.address, item.email, item.avatar, item.index, "none");
            } else {
                createContact(item.name, item.phone, item.address, item.email, item.avatar, item.index);
            }
        } else {
            createContact(item.name, item.phone, item.address, item.email, item.avatar, item.index);
        }
    }
}

export default getDataStorage;