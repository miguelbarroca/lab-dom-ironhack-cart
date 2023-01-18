// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector(".price span").innerText;
  let quantity = product.querySelector(".quantity input").value;
  let priceTimesQuantity = price * quantity;
  product.querySelector(".subtotal span").innerText = priceTimesQuantity;
  return priceTimesQuantity;
  //  console.log(price, quantity)
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
    let total = 0;
    document.querySelectorAll('.product').forEach((allProducts) => {
    updateSubtotal(allProducts) 
    total += updateSubtotal(allProducts)
      //console.log(allProducts)
    })
///Hello
  // ITERATION 3
  
  document.querySelector('#total-value span').innerText = total

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
