let $breakfast, $brunch, $lunch, $dinner, $desserts, $drinks, $delete, $table;

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
    $table = document.getElementById('table');
}

prepareEvents = () => {
    $breakfast.addEventListener('click', updateBreakfastMenu);
    $brunch.addEventListener('click', updateBrunchMenu);
    $lunch.addEventListener('click', updateLunchMenu);
    $dinner.addEventListener('click', updateDinnerMenu);
    $desserts.addEventListener('click', updateDessertsMenu);
    $drinks.addEventListener('click', updateDrinksMenu);
    $delete.addEventListener('click', closeModal);
}

openModal = () => {
    document.getElementById('modal').classList.add('is-active');
}

updateBreakfastMenu = async () => {
    let menu = await axios.get("https://fake-restaurant-menu.firebaseio.com/.json")
        menu.data.Breakfast.forEach(item => {
            addNewItem(item.name, item.price)
        });
        openModal();
}

updateBrunchMenu = async () => {
    let menu = await axios.get("https://fake-restaurant-menu.firebaseio.com/.json")
        menu.data.Brunch.forEach(item => {
            addNewItem(item.name, item.price)
        });
        openModal();
}

updateLunchMenu = async () => {
    let menu = await axios.get("https://fake-restaurant-menu.firebaseio.com/.json")
        menu.data.Lunch.forEach(item => {
            addNewItem(item.name, item.price)
        });
        openModal();
}

updateDinnerMenu = async () => {
    let menu = await axios.get("https://fake-restaurant-menu.firebaseio.com/.json")
        menu.data.Dinner.forEach(item => {
            addNewItem(item.name, item.price)
        });
        openModal();
}

updateDessertsMenu = async () => {
    let menu = await axios.get("https://fake-restaurant-menu.firebaseio.com/.json")
        menu.data.Desserts.forEach(item => {
            addNewItem(item.name, item.price)
        });
        openModal();
}

updateDrinksMenu = async () => {
    let menu = await axios.get("https://fake-restaurant-menu.firebaseio.com/.json")
        menu.data.Drinks.forEach(item => {
            addNewItem(item.name, item.price)
        });
        openModal();
}

addNewItem = (name, price) => {
    const newItem = createMenuItem(name, price);
    $table.appendChild(newItem);
}

createMenuItem = (name, price) => {
    let newName = document.createElement('td');
    newName.innerText = name;

    let newPrice = document.createElement('td');
    newPrice.innerText = price;

    let newItem = document.createElement('tbody');
    newItem.appendChild(newName)
    newItem.appendChild(newPrice)
    
    return newItem;
}

closeModal = () => {
    let list = document.getElementsByTagName('tbody');
    for (let i = list.length - 1; i >= 0; --i) {
        list[i].remove();
      }

    document.getElementById('modal').classList.remove('is-active');
}

document.addEventListener('DOMContentLoaded', main);