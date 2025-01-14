// ITERATION 1

// fiquei na dúvida sobre o ponto dentro da função query selector (.price)
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');

  let price2 = price.innerText; 
  let quantity2 = quantity.value ;


  let total = quantity2 * price2;

  let subtotal = product.querySelector('.subtotal span');

  subtotal.innerHTML = total;
  return total

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
   /*  const singleProduct = document.querySelector(' .product');
  updateSubtotal(singleProduct); */

  // ITERATION 2
  //... your code goes here
  let allProducts = document.getElementsByClassName('product');

  let count = 0;
  for (let i of allProducts) {
    count += updateSubtotal(i);
  }


  console.log(count);

  // ITERATION 3
  //... your code goes here
  let totalValue = document.querySelector('#total-value span');
totalValue.innerHTML = count;

};

// a partir daqui eu já me perdi e tive que consultar na internet e nos reposítórios de outros colegas para poder entender o que estava ocorrendo
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

 //... your code goes here
  let removeButton = product.getElementsByTagName('button')
 
  for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].onclick = function (target) {
      console.log(target);
    };
  }
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