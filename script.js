let $breakfast, $brunch, $lunch, $dinner, $desserts, $drinks;
let $delete;

main = () => {
    prepareElements();
    prepareEvents();
}

prepareElements = () => {
    $breakfast = document.getElementById('breakfast');
    $brunch = document.getElementById('brunch');
    $lunch = document.getElementById('lunch');
    $dinner = document.getElementById('dinner');
    $desserts = document.getElementById('desserts');
    $drinks = document.getElementById('drinks');
    $title = document.getElementById('modal-title');
    $delete = document.getElementById('delete');
}

prepareEvents = () => {
    $breakfast.addEventListener('click', openModal);
    $brunch.addEventListener('click', openModal);
    $lunch.addEventListener('click', openModal);
    $dinner.addEventListener('click', openModal);
    $desserts.addEventListener('click', openModal);
    $drinks.addEventListener('click', openModal);
    $delete.addEventListener('click', closeModal);
}

openModal = () => {
    document.getElementById('modal').classList.add('is-active');
}

closeModal = () => {
    document.getElementById('modal').classList.remove('is-active');
}

document.addEventListener('DOMContentLoaded', main);