const bunPrices = {
    'Original Cinnamon Roll': 2.49,
    'Apple Cinnamon Roll': 3.49,
    'Raisin Cinnamon Roll': 2.99,
    'Walnut Cinnamon Roll': 3.49,
    'Double-Chocolate Cinnamon Roll': 3.99,
    'Strawberry Cinnamon Roll': 3.99,
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

let selectedBun = 'Original Cinnamon Roll';
let selectedGlazing = 'keep original';
let selectedPackSize = '1';

function calculateTotalPrice() {
    if (selectedBun && selectedGlazing && selectedPackSize) {
      const bunPrice = bunPrices[selectedBun];
      const glazingPrice = glazingPrices[selectedGlazing];
      const packSizePrice = packSizePrices[selectedPackSize];
  
      const totalPrice = (bunPrice + glazingPrice) * packSizePrice;
  
      document.getElementById("totalPrice").textContent = `$${totalPrice.toFixed(2)}`;
    }
  }
  

function glazingChange(element) {
    const glazingName = element.value;
    selectedGlazing = glazingName;
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
    calculateTotalPrice();
}