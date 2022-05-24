function computedScroll() {
    const headerClientHeight = document.querySelector('.header').clientHeight;
    const windowHigh = document.documentElement.clientHeight;
    const contactHeight = document.querySelector('.contact').clientHeight;
    const margin = 2;
    const numberContacts = Math.ceil((windowHigh-headerClientHeight+200)/(contactHeight+margin));

    return numberContacts;
}

export default computedScroll;