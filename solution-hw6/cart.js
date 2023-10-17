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
let items = [];
function retrieveFromLocalStorage() {
    const  rollArrayString = localStorage.getItem('items');
    const rollArray = JSON.parse(rollArrayString);
    if(rollArray != null){
        items = rollArray;
    }
    else{
        items =[];
    }
    
}

retrieveFromLocalStorage()
console.log(items);


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

function createElement(item, index) {
    const template = document.querySelector('#roll-template');
    const clone = template.content.cloneNode(true);

    item.element = clone.querySelector('.rollcard');

    const btnDelete = item.element.querySelector('.icon-delete');
    console.log(btnDelete);
    btnDelete.addEventListener('click', () => {
        deleteRoll(item);
    });

    
    console.log("Image Path:", item.img); 



    const itemListElement = document.querySelector('#roll-list');
    itemListElement.prepend(item.element);

    updateElement(index);
}

function updateElement(index) {
    if (index >= 0 && index < items.length) {
        const roll = items[index];

        const rollImageElement = roll.element.querySelector('.roll-thumbnail');
        const rollTitleElement = roll.element.querySelector('.roll-title');
        const rollBodyElement = roll.element.querySelector('.roll-body');
        const rollPackElement = roll.element.querySelector('.roll-pack');
        const rollPriceElement = roll.element.querySelector('.roll-price');

        rollImageElement.src = roll.img;
        rollTitleElement.innerText = roll.rollType + ' Cinnamon Roll';
        rollBodyElement.innerText = roll.rollGlazing;
        rollPackElement.innerText = 'Pack Size: ' + roll.packSize;
        rollPriceElement.innerText = '$' + roll.price.toFixed(2);
        total += roll.price;
    }
}

function deleteRoll(rollcard) {
    const indexToRemove = items.findIndex(
        (item) =>
            item.rollType === rollcard.rollType &&
            item.rollGlazing === rollcard.rollGlazing &&
            item.packSize === rollcard.packSize
    );

    if (indexToRemove !== -1) {
        items.splice(indexToRemove, 1);

        localStorage.setItem('items', JSON.stringify(items));
        console.log(items);
    }

    total -= rollcard.price; 
    rollcard.element.remove();
    updatePrice();
}

function updatePrice() {
    document.querySelector("#total").innerHTML = '$' + total.toFixed(2); 
}

for (let i = 0; i<items.length; i++) {
    
    createElement(items[i], i);
}

updatePrice();



