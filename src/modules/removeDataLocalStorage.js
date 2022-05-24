function removeData(key) {
    if(localStorage.getItem("phone_book")!== null && localStorage.getItem("phone_book")!== undefined) {
        let objData = JSON.parse(localStorage.getItem("phone_book"));
        delete objData[key];
        localStorage.setItem("phone_book", JSON.stringify(objData));
    }
}

export default removeData;