function updatePrice() {
    const quantity = parseInt(document.getElementById('quantity').value) || 0;
    const itemType = document.getElementById('itemType').value;
    let price;

    switch (itemType) {
        case '1':
            price = 500000;
            break;
        case '2':
            price = 300000;
            break;
        case '3':
            price = 100000;
            break;
        default:
            price = 0;
    }

    document.getElementById('price').value = price;
    updateTotal();
}

function updateTotal() {
    const quantity = parseInt(document.getElementById('quantity').value) || 0;
    const price = parseInt(document.getElementById('price').value) || 0;
    const shippingFee = parseInt(document.getElementById('shippingFee').value) || 0;
    document.getElementById('totalPrice').value = (price * quantity) + shippingFee;
}

function updateShippingFee() {
    let shippingFee = 0;
    const region = document.querySelector('input[name="region"]:checked');

    if (region) {
        if (region.value === 'outer') {
            shippingFee = 30000;
        } else {
            shippingFee = 0;
        }
        document.getElementById('shippingFee').value = shippingFee;
    }
    updateTotal();
}

// Hiển thị tổng tiền khi nhấn nút "Đặt Mua"
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn không gửi form

    // Xóa thông báo lỗi cũ
    const errorCustommerName = document.getElementById('error-custommerName');
    const errorItemType = document.getElementById('error-itemType');
    const errorQuantity = document.getElementById('error-quantity');
    const errorRegion = document.getElementById('error-region');

    errorCustommerName.style.display = 'none';
    errorItemType.style.display = 'none';
    errorQuantity.style.display = 'none';
    errorRegion.style.display = 'none';

    // Kiểm tra tất cả các trường thông tin
    const custommerName = document.getElementById('custommerName').value.trim();
    const itemType = document.getElementById('itemType').value;
    const quantity = document.getElementById('quantity').value.trim();
    const region = document.querySelector('input[name="region"]:checked');

    let hasError = false;

    if (!custommerName) {
        errorCustommerName.style.display = 'block';
        hasError = true;
    }

    if (!itemType) {
        errorItemType.style.display = 'block';
        hasError = true;
    }

    if (!quantity) {
        errorQuantity.style.display = 'block';
        hasError = true;
    }

    if (!region) {
        errorRegion.style.display = 'block';
        hasError = true;
    }

    if (hasError) {
        return; // Dừng lại không gửi form
    }

    // Hiển thị tổng tiền
    const totalPriceField = document.getElementById('totalPrice');
    totalPriceField.style.display = 'block';

    // Tính toán tổng tiền
    updateTotal();
});
