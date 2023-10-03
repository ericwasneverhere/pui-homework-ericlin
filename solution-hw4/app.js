//all pricings------------------------------------------------------------------
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

//Calulating for the price------------------------------------------------------
let selectedGlazing = 'keep original';
let selectedPackSize = '1';

const queryString = window.location.search.substring(6);
const bunPrice = rolls[queryString].basePrice;
let glazingPrice = glazingPrices[selectedGlazing]; 
let packSizePrice = packSizePrices[selectedPackSize]; 

let selectedBun = queryString;

document.addEventListener("DOMContentLoaded", function () {
  const imgUrl = "../assets/products/" + rolls[queryString].imageFile;
  document.getElementById("roll-image").src = imgUrl;
});

function calculateTotalPrice() {
  const bunPrice = rolls[selectedBun].basePrice; 
  console.log(bunPrice, glazingPrice, packSizePrice);
  const totalPrice = (bunPrice + glazingPrice) * packSizePrice;
  document.getElementById("totalPrice").textContent = `$${totalPrice.toFixed(2)}`;
}

function glazingChange(element) {
  const glazingName = element.value;
  selectedGlazing = glazingName;
  glazingPrice = glazingPrices[selectedGlazing];
  calculateTotalPrice();
}

function bunChange(element) {
  const bunName = element.value;
  selectedBun = bunName;
  calculateTotalPrice();
}

function packingChange(element) {
  const packingSize = element.value;
  selectedPackSize = packingSize;
  packSizePrice = packSizePrices[selectedPackSize];
  calculateTotalPrice();
}

//price for roll when pressed button--------------------------------------------
class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
  }
};
function isClicked() {
  let roll = new Roll(queryString, selectedGlazing, selectedPackSize, bunPrice)
  console.log(roll);
  
}

const addButton = document.querySelector("#add");
console.log(addButton);

addButton.setAttribute("onclick","isClicked()")

