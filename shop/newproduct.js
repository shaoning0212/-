document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productDescription = document.getElementById('productDescription').value;
    const productImage = document.getElementById('productImage').files[0];
    const productCategory = document.getElementById('productCategory').value;
    
    // 將商品資訊發送到後端
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('productPrice', productPrice);
    formData.append('productDescription', productDescription);
    formData.append('productImage', productImage);
    formData.append('productCategory', productCategory);

    fetch('/api/addProduct', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('商品上架成功！');
            // 清空表單
            document.getElementById('productForm').reset();
        } else {
            alert('商品上架失敗！');
        }
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('cancelButton').addEventListener('click', function() {
    // 清空表單欄位內容
    document.getElementById('productName').value = "";
    document.getElementById('productPrice').value = "";
    document.getElementById('productDescription').value = "";
    document.getElementById('productImage').value = "";
    // 清空規格和尺寸欄位內容
    const specInputs = document.querySelectorAll('#sizeInputs input[type="number"], #sizeInputs input[type="text"]');
    specInputs.forEach(input => {
        input.value = "";
    });
});

document.getElementById('cancelButton').addEventListener('click', function() {
    // 重新載入頁面
    location.reload();
});

document.getElementById('saveOfflineButton').addEventListener('click', function() {
    // 儲存下架功能待添加
    alert('儲存下架功能待添加');
});

document.getElementById('addSpecButton').addEventListener('click', function() {
// 新增更多款式
const sizeInputs = document.getElementById('sizeInputs').querySelector('.flex.items-center');
const newInputDiv = document.createElement('div');
newInputDiv.classList.add('flex', 'items-center', 'space-x-2', 'mb-2');
newInputDiv.innerHTML = `
<input type="number" class="border rounded p-2" placeholder="數量">
<input type="text" class="border rounded p-2" placeholder="款式">
`;
sizeInputs.parentNode.insertBefore(newInputDiv, sizeInputs.nextSibling);
});

document.getElementById('addSizeButton').addEventListener('click', function() {
// 新增更多尺寸
const sizeInputs = document.getElementById('sizeInputs').querySelector('.flex.items-center:last-child');
const newInputDiv = document.createElement('div');
newInputDiv.classList.add('flex', 'items-center', 'space-x-2', 'mb-2');
newInputDiv.innerHTML = `
<input type="text" class="border rounded p-2" placeholder="尺寸">
`;
sizeInputs.parentNode.insertBefore(newInputDiv, sizeInputs.nextSibling);
});