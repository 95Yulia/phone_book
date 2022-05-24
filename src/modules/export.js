function exportContact() {
    const menuExport = document.querySelector('.menu-export');

    menuExport.onclick = function () {
        const objContact = {};

        for (let i=0; i<localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = JSON.parse(localStorage[key]);
            objContact['user' + key] = value;
        }

        const fileName = "exportContacts";
        const json = JSON.stringify(objContact, null,'\t');
        const blob = new Blob([json],{type:'json'});
        const href = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = fileName + ".json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
}

export default exportContact;