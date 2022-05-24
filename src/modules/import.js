import getDataStorage from "./getData";
import setData from "./setDataLocalStorage";

function importContacts() {
    const menuEImport = document.querySelector('.menu-import');

    menuEImport.onclick = function () {
        let url;
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = ".json";
        document.body.appendChild(input);
        input.click();
        document.body.removeChild(input);

        input.onchange = function () {
            let file = input.files[0];

                let reader = new FileReader();
                reader.readAsDataURL(file);

                reader.onload = function() {
                    url = reader.result;
                    fetch(url)
                        .then(response => response.json())
                        .then(res => {
                            const arr = [];
                            for (let key in res) {
                                if (!res[key].avatar) {
                                    res[key].avatar = './assets/avatar/2550383.png';
                                }
                                arr.push(res[key]);
                            }
                            for (let i = 0; i < arr.length; i++) {
                                let date = new Date();
                                setData(date.toISOString()+` import ${i}`, arr[i]);
                                // localStorage.setItem(date.toISOString()+` import ${i}`, JSON.stringify(arr[i]));
                            }
                            getDataStorage();
                        });
                };
                reader.onerror = function() {
                    console.log(reader.error);
                };
        };

    };
}

export default importContacts;