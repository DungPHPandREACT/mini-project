const listProduct = [];

document.getElementById('add').onclick = function () {
  const name = document.getElementById('name-product').value;
  const price = document.getElementById('price-product').value;
  const description = document.getElementById('description').value;

  const product = {
    // name: name,
    name,
    price,
    description,
  };

  listProduct.push(product);

  renderProducts(listProduct);
};

function deleteProduct(index) {
  listProduct.splice(index, 1);
  renderProducts(listProduct);
}

function renderProducts(listProduct) {
  const content = document.getElementById('content');
  if (listProduct.length === 0) {
    content.innerHTML = 'Chưa có sản phẩm';
  } else {
    let stringHTML = '';
    for (let i = 0; i <= listProduct.length - 1; i++) {
      stringHTML += `
        <tr>
            <th scope="row">${i + 1}</th>
            <td>${listProduct[i].name}</td>
            <td>${listProduct[i].price}</td>
            <td>${listProduct[i].description}</td>
            <td>
              <button class="btn btn-secondary">Update</button>
              <button class="btn btn-danger" onclick="deleteProduct('${i}')">Delete</button>
            </td>
          </tr>
    `;
    }

    document.getElementById('content').innerHTML = stringHTML;
  }
}
renderProducts(listProduct);
// Task 4: Mỗi lần click vào button Add Product thì sẽ thêm sản phẩm mới lên trên bảng
