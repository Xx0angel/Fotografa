// Functions Open Menu
document.querySelector('.btn-menu').addEventListener('click', () => {
    document.querySelector('#list1').classList.toggle('show');
});

document.querySelector('.btn-menu').addEventListener('click', () => {
    document.querySelector('#list2').classList.toggle('show-two');
});

// Functions close Menu
document.querySelector('.close-menu').addEventListener('click', () => {
    document.querySelector('#list1').classList.toggle('show');
})

document.querySelector('.close-menu').addEventListener('click', () => {
    document.querySelector('#list2').classList.toggle('show-two');
})