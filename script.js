document.addEventListener('DOMContentLoaded', (event) => {
    const toggles = document.querySelectorAll('.toggle');
    toggles.forEach((toggle) => {
        toggle.addEventListener('click', (event) => {
            event.preventDefault();
            const innerMenu = toggle.nextElementSibling;
            innerMenu.style.display = (innerMenu.style.display == 'none') ? 'block' : 'none';
        });
    });
});
