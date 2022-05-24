function setData(key, value) {
    if(localStorage.getItem("phone_book")!== null && localStorage.getItem("phone_book")!== undefined) {
        let objData = JSON.parse(localStorage.getItem("phone_book"));
        objData[key] = value;
        localStorage.setItem("phone_book", JSON.stringify(objData));
    } else {
        let obj = {};
        obj[key] = value;
        localStorage.setItem("phone_book", JSON.stringify(obj));
    }
}

export default setData;