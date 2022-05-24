function search(id) {
    const searchInput = document.getElementById(id);

    searchInput.addEventListener('input', () => {
        let contacts = document.querySelectorAll('.contact');
        let value = searchInput.value;

        contacts.forEach(item => {
                let name = item.querySelector('.name').textContent;
                let phone = item.querySelector('.phone').textContent;
                let email = item.querySelector('.email').textContent;
                let address = item.querySelector('.address').textContent;

                if(!(name.includes(value) || phone.includes(value) || email.includes(value) || address.includes(value))) {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'flex';
                }
            });
    });
}

export default search;