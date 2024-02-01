document.addEventListener('DOMContentLoaded', function () {
    const menuData = [
        { name: 'Butter Chicken', price: '$14.99', description: 'Tender chicken cooked in a rich tomato and butter sauce.' },
        { name: 'Vegetable Biryani', price: '$12.99', description: 'Fragrant basmati rice with mixed vegetables and aromatic spices.' },
        { name: 'Paneer Tikka Masala', price: '$13.49', description: 'Grilled paneer cubes in a creamy tomato and masala sauce.' },
        { name: 'Chicken Korma', price: '$15.99', description: 'Chicken pieces simmered in a flavorful cashew and almond sauce.' },
        { name: 'Palak Paneer', price: '$11.49', description: 'Cottage cheese cubes in a spinach-based curry.' },
        // Add more items as needed
    ];

    const menuList = document.getElementById('menu-list');

    menuData.forEach(item => {
        const listItem = document.createElement('li');
        const itemName = document.createElement('h3');
        const itemDescription = document.createElement('p');
        const itemPrice = document.createElement('p');

        listItem.classList.add('indian-dish'); // Add a class for additional styling

        itemName.textContent = item.name;
        itemDescription.textContent = item.description;
        itemPrice.textContent = `Price: ${item.price}`;

        listItem.appendChild(itemName);
        listItem.appendChild(itemDescription);
        listItem.appendChild(itemPrice);

        menuList.appendChild(listItem);
    });
});
