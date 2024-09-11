const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}

document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 70) {
                header.classList.add('scrolled');
    }
    else {
                header.classList.remove('scrolled');
    }
})

window.addEventListener('scroll', function() {
    var stickyArrow = document.getElementById('stickyArrow');
    if (window.scrollY > 200) {
        stickyArrow.style.display = 'block';
    } else {
        stickyArrow.style.display = 'none';
    }
});
