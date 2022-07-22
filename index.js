let listProduct, cart;
if (localStorage.getItem('listProduct') !== null) {
  listProduct = JSON.parse(localStorage.getItem('listProduct'));
} else {
  listProduct = [];
}

if (localStorage.getItem('cart') !== null) {
  cart = JSON.parse(localStorage.getItem('cart'));
} else {
  cart = [];
}

function renderProducts(listProduct) {
  const content = document.getElementById('content');
  if (listProduct.length === 0) {
    content.innerHTML = 'Chưa có sản phẩm';
  } else {
    let stringHTML = '';
    for (let i = 0; i <= listProduct.length - 1; i++) {
      stringHTML += `
        <div class="card col-3" style="margin: 5px">
            <img
            src="https://www.feedough.com/wp-content/uploads/2016/08/product-mix-03.png"
            class="card-img-top"
            alt="..."
            />
            <div class="card-body">
            <h5 class="card-title">${listProduct[i].name}</h5>
            <p class="card-price">Price: ${listProduct[i].price} VNĐ</p>
            <p class="card-text">
                ${listProduct[i].description}
            </p>
            <button class="btn btn-primary" onclick="addToCart('${i}')">Add to cart</button>
            </div>
        </div>
      `;
    }

    document.getElementById('container-products').innerHTML = stringHTML;
  }
}

function addToCart(index) {
  // Tìm kiếm sản phẩm đấy đã có trong giỏ hàng hay chưa
  //   +Nếu chưa có: thêm mới
  //   +Nếu có rồi: thì thay đổi số lượng
  cart.push(listProduct[index]);
  console.log(cart);
  localStorage.setItem('cart', JSON.stringify(cart));
}

renderProducts(listProduct);
