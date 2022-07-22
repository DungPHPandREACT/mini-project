let listProduct;
// Toán tử nulish trong javascript
if (localStorage.getItem('listProduct') !== null) {
  listProduct = JSON.parse(localStorage.getItem('listProduct'));
} else {
  listProduct = [];
}

document.getElementById('add').onclick = function () {
  // Lấy dữ liệu từ ô input và textarea của người dùng nhập
  const name = document.getElementById('name-product').value;
  const price = document.getElementById('price-product').value;
  const description = document.getElementById('description').value;

  //   Tạo một object mới chứa thông tin sản phẩm
  const product = {
    // name: name,
    name,
    price,
    description,
  };

  listProduct.push(product);
  //   Cập nhật dữ liệu vào localStorage
  localStorage.setItem('listProduct', JSON.stringify(listProduct));

  renderProducts(listProduct);
};

function deleteProduct(index) {
  listProduct.splice(index, 1);
  //   Cập nhật dữ liệu vào localStorage
  localStorage.setItem('listProduct', JSON.stringify(listProduct));
  renderProducts(listProduct);
}

function updateProduct(index) {
  // Hiển thị giá trị lên thẻ input và textarea
  document.getElementById('name-product').value = listProduct[index].name;
  document.getElementById('price-product').value = listProduct[index].price;
  document.getElementById('description').value = listProduct[index].description;

  document.getElementById('update').style.display = 'block';
  document.getElementById('add').style.display = 'none';
}

// -Update:
// +Khi click vào button Update Product thì sẽ lấy được những thông tin mới nhất
// trong các thẻ input và textarea để cập nhật vào dữ liệu

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
              <button class="btn btn-secondary" onclick="updateProduct('${i}')">Update</button>
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
