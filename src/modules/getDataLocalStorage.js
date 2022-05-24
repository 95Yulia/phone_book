function getData(key) {
    if(localStorage.getItem("phone_book")!== null && localStorage.getItem("phone_book")!== undefined) {
        let objData = JSON.parse(localStorage.getItem("phone_book"));
        let contactInfo = objData[key];
        return contactInfo;
    }
}

export default getData;