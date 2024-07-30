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