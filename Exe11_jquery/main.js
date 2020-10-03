function productSearch() {
    // var input = $("#myInput").value.toLowerCase().trim();
    var input = document.getElementById('myInput').value.toLowerCase().trim();
    $("#list1 .product-list").show().filter(function () {
        var msg_error = document.getElementById("p-phone");
        if ($(this).text().toLowerCase().trim().indexOf(input) != -1) {
            msg_error.innerHTML = '';
            msg_error.classList.add("display-none");
        } else {
            msg_error.classList.remove("display-none");
        }
        return $(this).text().toLowerCase().trim().indexOf(input) == -1;
    }).hide();
}

