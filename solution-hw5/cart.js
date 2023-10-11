// //all pricings------------------------------------------------------------------
const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }
};

const glazingPrices = {
    'keep original': 0,
    'sugar milk': 0,
    'vanilla milk': 0.5,
    'double chocolate': 1.5,
};

const packSizePrices = {
    '1': 1,
    '3': 3,
    '6': 5,
    '12': 10,
};

//------------------------------------------------------------------------------
let total = 0;

class cart_item {
    constructor(rollType, rollGlazing, packSize) {
        this.rollType = rollType;
        this.rollGlazing = rollGlazing;
        this.packSize = packSize;
        this.img = "../assets/products/" + rolls[this.rollType]["imageFile"];
        this.element = null;
        this.price = (rolls[rollType].basePrice + glazingPrices[rollGlazing]) * packSizePrices[packSize];

    }
};
let items = [];
let roll1 = new cart_item("Original", "sugar milk", 1);
let roll2 = new cart_item("Walnut", "vanilla milk", 12);
let roll3 = new cart_item("Raisin", "sugar milk", 3);
let roll4 = new cart_item("Apple", "keep original", 3);
items.push(roll1, roll2, roll3, roll4);


function createElement(item) {
    const template = document.querySelector('#roll-template');
    const clone = template.content.cloneNode(true);

    item.element = clone.querySelector('.rollcard');

    const btnDelete = item.element.querySelector('.icon-delete');
    console.log(btnDelete);
    btnDelete.addEventListener('click', () => {
        deleteRoll(item);
    });

    const itemListElement = document.querySelector('#roll-list');
    itemListElement.prepend(item.element);

    updateElement(item);
};


function updateElement(roll) {
    // get the HTML elements that need updating
    const rollImageElement = roll.element.querySelector('.roll-thumbnail');
    const rollTitleElement = roll.element.querySelector('.roll-title');
    const rollBodyElement = roll.element.querySelector('.roll-body');
    const rollPackElement = roll.element.querySelector('.roll-pack');
    const rollPriceElement = roll.element.querySelector('.roll-price');


    // copy our rollcard content over to the corresponding HTML elements
    rollImageElement.src = roll.img;
    rollTitleElement.innerText = roll.rollType + ' Cinnamon Roll';
    rollBodyElement.innerText = roll.rollGlazing;
    rollPackElement.innerText = 'Pack Size: ' + roll.packSize;
    rollPriceElement.innerText = '$' + roll.price.toFixed(2);
    total += roll.price;

}

function deleteRoll(rollcard) {
    total -= rollcard.price; 
    rollcard.element.remove();
    updatePrice();

}

function updatePrice() {
    document.querySelector("#total").innerHTML = '$' + total.toFixed(2); 
}


for (const objects of items) {
    createElement(objects);
}

updatePrice();



