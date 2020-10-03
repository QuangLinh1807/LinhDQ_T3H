$(document).ready(function () {
    //search
    $("#search").keyup(function () {
        // search1($(this));
        var input = $(this).val().toLowerCase();
        $('.product').show().filter(function () {
            return $(this).text().toLowerCase().indexOf(input) == -1;
        }).hide();
    });

    //order
    $('.order').change(function () {
        var orderType = $(this).val();
        var products = $('.product');
        console.log(orderType);
        console.log(products);
        var orderProduct = sortProduct(products, orderType);
        products.remove();
        $('#products').append(orderProduct);
    });
    function sortProduct(products, type) {
        var results = [];
        var prices = [];
        debugger;
        products.each(function (index) {
            var product = $(this);
            var priceArr = product.find('h2').text().split('$');
            var price = priceArr[priceArr.length - 1];

            prices[index] = price;

            product.addClass(price);
        });
        //if else giá trị value
        if (type == 2) {
            var orderPrices = prices.sort(function (a, b) { return a - b });
        } else if (type == 1) {
            var orderPrices = prices.sort(function (a, b) { return b - a });
        } else {
            location.reload();
        }
        $.each(orderPrices, function (index, value) {
            results[index] = $('.' + value);
        });
        return results;
    }

    //card
    $('.buy').click(function (event) {
        event.preventDefault();
        var curentQuantityProduct = $('.card_number').text();
        var inputQuantity = 1;
        var quantity = parseInt(curentQuantityProduct) + parseInt(inputQuantity);
        $('.card_number').text(quantity);

        var newName = $(this).parent().parent().parent().find('.card-title').text();
        var newCode = $(this).parent().parent().parent().find('i:first').text();

        var listProduct = $('.list-order-product tr');
        var hasOrderProduct = false;

        listProduct.each(function (index, product) {

            var code = $(this).find('.code').text();
            var quantity = $(this).find('.quantity').text();
            var newQuantity = 0;

            if (code == newCode) {
                hasOrderProduct = true;
                newQuantity = parseInt(quantity) + parseInt(inputQuantity);

                $(this).find('.quantity').text(newQuantity);
            }
        });

        if (hasOrderProduct == false) {
            // Render order-product html
            var htmlProduct = '<tr>'
                + '<th scope="row">1</th>'
                + '<td class="name">' + newName + '</td>'
                + '<td class="code">' + newCode + '</td>'
                + '<td class="quantity">' + inputQuantity + '</td>'
                + '</tr>';

            $('.list-order-product').append(htmlProduct);
        }
    });

    //validate

});
