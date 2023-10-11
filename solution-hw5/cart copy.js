// class Roll {
//     constructor(rollType, rollGlazing, packSize, basePrice) {
//       this.type = rollType;
//       this.glazing = rollGlazing;
//       this.size = packSize;
//       this.basePrice = basePrice;
//     }
//   };

// const cartArray = [];

// const roll1 = new Roll("Original", "Sugar Milk", 1, "$2.49");
// const roll2 = new Roll("Walnut", "Vanilla Milk", 12, "$39.90");
// const roll3 = new Roll("Raisin", "Sugar Milk", 3, "$8.97");
// const roll4 = new Roll("Apple", "Original", 3, "$10.47");

// cartArray.push(roll1, roll2, roll3, roll4);

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
let total = 0;

class cart_item{
    constructor(rollType, rollGlazing, packSize){
        this.rollType= rollType;
        this.rollGlazing=rollGlazing;
        this.packSize=packSize;
        this.img = "../assets/products/" + rolls[this.rollType]["imageFile"];
        this.element = null;
        //this.calcPrice = 
    
    }
};
let items = [];
let roll1 = new cart_item("Original", "Sugar Milk", 1);
let roll2 = new cart_item("Walnut", "Vanilla Milk", 12);
let roll3 = new cart_item("Raisin", "Sugar Milk", 3);
let roll4 = new cart_item("Apple", "Original", 3);
items.push(roll1, roll2, roll3, roll4);


function createElement(item) {
    // make a clone of the notecard template
    const template = document.querySelector('#roll-template');
    const clone = template.content.cloneNode(true);
    
    // connect this clone to our notecard.element
    // from this point we only need to refer to notecard.element
    item.element = clone.querySelector('.rollcard');
  
    const btnDelete = item.element.querySelector('.icon-delete');
    console.log(btnDelete);
    btnDelete.addEventListener('click', () => {
      deleteRoll(item);
    });
    
    // add the notecard clone to the DOM
    // find the notecard parent (#notecard-list) and add our notecard as its child
    const itemListElement = document.querySelector('#roll-list');
    itemListElement.prepend(item.element);
    
    // populate the notecard clone with the actual notecard content
    updateElement(item);
  };


function updateElement(roll) {
        // get the HTML elements that need updating
        const rollImageElement = roll.element.querySelector('.roll-thumbnail');
        const rollTitleElement = roll.element.querySelector('.roll-title');
        const rollBodyElement = roll.element.querySelector('.roll-body');
        
        // copy our rollcard content over to the corresponding HTML elements
        rollImageElement.src = roll.img;
        rollTitleElement.innerText = roll.rollType +' Cinnamon Roll';
        rollBodyElement.innerText = roll.glazing;
      }

  function deleteRoll(rollcard) {
    // remove the notecard DOM object from the UI
    rollcard.element.remove();
  
    // remove the actual Notecard object from our set of notecards
    //rollSet.delete(rollcard);
  
    // update local storage
  }

  function updatePrice(){
    document.querySelector("#total").innerHTML = '$' + total;
  }

for (const objects of items) {
    createElement(objects);
}

updatePrice();



// //CART--------------------------------------------------------------------------
// const cartArray = [];

// const roll1 = new Roll("Original", "Sugar Milk", 1, "$2.49");
// const roll2 = new Roll("Walnut", "Vanilla Milk", 12, "$39.90");
// const roll3 = new Roll("Raisin", "Sugar Milk", 3, "$8.97");
// const roll4 = new Roll("Apple", "Original", 3, "$10.47");

// cartArray.push(roll1, roll2, roll3, roll4);

// console.log("hi");

// document.addEventListener("load", function () {
//   const doc = document.querySelector('body');

//   // Loop through the array and create list items for each element
//   cartArray.forEach(item => {
//     const cartItems = document.createElement("div");
//     cartItems.classList.add("cart-item")

//     const img = document.createElement("img");
//     cartItems.appendChild(img)

//     const cartDesc = document.createElement("div");
//     cartDesc.classList.add("cart-description")
//     cartDesc.innerText = item.glazing
//     cartItems.appendChild(cartDesc)

//     const cartPrice = document.createElement("div");
//     cartPrice.classList.add("cart-price")
//     cartPrice.innerText = item.basePrice
//     cartItems.appendChild(cartPrice)

//     doc.appendChild(cartItems)
//   });
// });








// class Roll {
//     constructor(rollType, rollGlazing, packSize, basePrice, image) {
//       this.type = rollType;
//       this.glazing = rollGlazing;
//       this.size = packSize;
//       this.basePrice = basePrice;
//       this.image = image;

//       this.element = null;
//     }
//   };


//   const cartArray = [];

//   const imgStr = "../assets/products/";
//   const roll1 = new Roll("Original", "Sugar Milk", 1, "$2.49", imgStr+"apple-cinnamon-roll.jpg");
//   const roll2 = new Roll("Walnut", "Vanilla Milk", 12, "$39.90",imgStr+"apple-cinnamon-roll.jpg");
//   const roll3 = new Roll("Raisin", "Sugar Milk", 3, "$8.97",imgStr+"apple-cinnamon-roll.jpg");
//   const roll4 = new Roll("Apple", "Original", 3, "$10.47",imgStr+"apple-cinnamon-roll.jpg");
  
//   cartArray.push(roll1, roll2, roll3, roll4);
// // We use this class to represent our notecards. Each notecard object contains
// // data for a single note, and a reference to a DOM element corresponding to
// // that notecard.
// // class Notecard {

// //     // When we create a new Notecard object, the "constructor"
// //     // function is run. In the constructor, "this" refers to the
// //     // newly created Notecard object.
// //     constructor(imageURL, title, body) {
// //       this.noteImageURL = imageURL;
// //       this.noteTitle = title;
// //       this.noteBody = body;
  
// //       this.element = null;
// //     }
// //   }
  
//   // Create an empty Set, which will hold all of our notecard objects. A Set is
//   // similar to an Array, but in a Set, an item can only be added once (there
//   // are no duplicates). Sets also allow for easy removal of items, using the
//   // Set.delete(item) function.
//   const rollSet = new Set();
  
//   // This function creates a new Notecard object, and adds it to rollSet.
//   function addNewRoll(rollType, rollGlazing, packSize, basePrice, image) {
//     // Create a new notecard object. The Notecard constructor takes three
//     // arguments: the image URL, title text,  and body text.
//     const roll = new Roll(rollType, rollGlazing, packSize, basePrice, image);
  
//     // Add the notecard object to our notecard Set, which keeps track of all
//     // the notecards in our application.
//     rollSet.add(roll);
  
//     return roll;
//   }
  
//   function createElement(roll) {
//     // make a clone of the roll template
//     const template = document.querySelector('#roll-template');
//     const clone = template.content.cloneNode(true);
//     //console.log(roll);
    
//     // connect this clone to our roll.element
//     // from this point we only need to refer to roll.element
//     roll.element = clone.querySelector('.rollcard');
//     //console.log(roll);
//     // const btnDelete = roll.element.querySelector('.icon-delete');
//     // console.log(btnDelete);
//     // btnDelete.addEventListener('click', () => {
//     //   deleteNote(roll);
//     // });
    
//     // add the roll clone to the DOM
//     // find the roll parent (#roll-list) and add our roll as its child
//     const rollListElement = document.querySelector('#roll-list');
//     rollListElement.prepend(roll.element);
    
//     // populate the notecard clone with the actual notecard content
//     updateElement(roll);
//   }
  
//   function updateElement(roll) {
//     // get the HTML elements that need updating
//     const rollImageElement = roll.element.querySelector('.roll-thumbnail');
//     const rollTitleElement = roll.element.querySelector('.roll-title');
//     const rollBodyElement = roll.element.querySelector('.roll-body');
    
//     // copy our rollcard content over to the corresponding HTML elements
//     rollImageElement.src = roll.image;
//     rollTitleElement.innerText = roll.type;
//     rollBodyElement.innerText = roll.glazing;
//   }
  
//   function deleteRoll(rollcard) {
//     // remove the notecard DOM object from the UI
//     rollcard.element.remove();
  
//     // remove the actual Notecard object from our set of notecards
//     rollSet.delete(rollcard);
  
//     // update local storage
//     saveToLocalStorage();
//   }
  
  
//   /**** EXERCISE 6 CODE BELOW ***************************************************/
  
//   function submitNote() {
//     const noteEditorTitle = document.querySelector('#note-editor-title');
//     const editorTitleText = noteEditorTitle.value;
  
//     const noteEditorBody = document.querySelector('#note-editor-body');
//     const editorBodyText = noteEditorBody.value;
  
//     const noteEditorImage = document.querySelector('#note-editor-image');
//     const editorImageURL = noteEditorImage.src;
  
//     const notecard = addNewRoll(editorImageURL, editorTitleText, editorBodyText);
//     createElement(notecard);
  
//     saveToLocalStorage();
//   }
  
//   function saveToLocalStorage() {
//     const rollcardArray = Array.from(rollCardSet);
//     console.log(rollcardArray);
    
//     const rollcardArrayString = JSON.stringify(rollcardArray);
//     console.log(rollcardArrayString);
  
//     localStorage.setItem('storedRolls', rollcardArrayString);
//   }
  
// //   function retrieveFromLocalStorage() {
// //     const rollcardArrayString = localStorage.getItem('storedRolls');
// //     const rollcardArray = JSON.parse(rollcardArrayString);
// //     for (const rollData of rollcardArray) {
// //       const rollcard = addNewRoll(rollData.noteImageURL, rollData.noteTitle,
// //         rollData.noteBody);
// //       createElement(rollcard);
// //     }
// //   }
// for (const rollData of cartArray) {
//     const rollcard = addNewRoll(rollData.type, rollData.glazing,
//     rollData.size, rollData.basePrice, rollData.image);
//     createElement(rollcard);
// }
  
//   if (localStorage.getItem('storedRolls') != null) {
//     retrieveFromLocalStorage();
//   }
