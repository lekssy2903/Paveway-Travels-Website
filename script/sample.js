const storeInventory = [
  {
    item: "Laptop",
    price: 1000,
    quantity: 5,
    inStock: true
  },
  {
    item: "Mouse",
    price: 25,
    quantity: 0,
    inStock: true
  },
  {
    item: "Keyboard",
    price: 50,
    quantity: 10,
    inStock: true
  }
];




 function calculateInventoryValue(products) {
  let total = 0;

// =========================================================//
//  firstly  you will need to loop through the product array 
//  for loop will ready all the product one after the other 
// ============================================================// /


  for (let i = 0; i < products.length; i++) {
    // ==================================================================================================================================///
    // if condition check if products inStock if true that's why i write if (products[i].inStock) and if the quantify is grater than o 
    //  you can also write the condition statement like 
    // " if(products[i].inStock === true && products[i].quantity > 0 )"
    // ===================================================================================================================================///
    if (products[i].inStock && products[i].quantity > 0) {
        // ====================================================================
        // now the condition //
        // any product that is available multiply it with its quantity 
        // and add in in the let variable  "let total = 0 " 
        // =========================================================================//
      total += products[i].price * products[i].quantity;

    //  "" total += "  means each of the available product add them randomly 
    }
  }

  return total;
// return total means .. give out this response when this function is called with parament 
}


console.log(calculateInventoryValue(storeInventory));  
// console.log will show you the out put in your dev tools ,, f12 in chrome
//  the out put will 5500

