let listProduct;
// Toán tử nulish trong javascript
if (localStorage.getItem('listProduct') !== null) {
  listProduct = JSON.parse(localStorage.getItem('listProduct'));
} else {
  listProduct = [];
}


var url_string = window.location.href;
var url = new URL(url_string);
var index = url.searchParams.get('product-id');


document.getElementById('title').innerHTML = listProduct[index].name;
