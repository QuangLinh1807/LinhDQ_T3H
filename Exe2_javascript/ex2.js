var signInBtn = document.getElementById('sign-in-btn');
var isError = false;


function validate() {
    var inputList = document.getElementsByClassName("myclass");
    for (var input of inputList) {
        if (input.value.trim() != "") {
            input.classList.remove("input-invalid");

            var msg_error = document.querySelector("p#p-" + input.id);
            msg_error.classList.add("display-none");

        }
    }
}

function signin() {
    var inputList = document.getElementsByClassName("myclass");
    var isError = false;
    for (var input of inputList) {
        if (input.value.trim() == "") {
            // Set border red
            // Add class input-invalid to input empty
            input.classList.add("input-invalid");

            // Show message error
            var msg_error = document.querySelector("p#p-" + input.id);
            msg_error.classList.remove("display-none");

            isError = true;
        }
    }
    var checkbox = document.getElementById("checkbox");
    if (isError || checkbox.checked == false) {
        //Show error
        alert("Form invalid, please check again.");
        return false;
    }
    document.getElementById("myForm").submit();
}

function checkMaxLengthEmail(input, max, msg) {
    var msg_error = document.querySelector("p#p-" + input.id);
    if (input.value.length > max) {
        //Show msg
        msg_error.innerHTML = msg;
        msg_error.classList.remove("display-none");
    } else {
        //Hide msg
        msg_error.innerHTML = '';
        msg_error.classList.add("display-none");
    }
}

function checkFormatEmail(input) {
    debugger;
    var email = input.value;
    var msg_error = document.querySelector("p#p-" + input.id);

    if (email.indexOf('@') == '-1') {
        msg_error.innerHTML = "Email phải chứa ký tự @";
        msg_error.classList.remove("display-none");
    } else {
        if (email.indexOf('@') != email.lastIndexOf('@')) {
            msg_error.innerHTML = "Email không hợp lệ";
            msg_error.classList.remove("display-none");
        } else {
            msg_error.innerHTML = '';
            msg_error.classList.add("display-none");
        }
    }

}

//password
function checkMaxLengthPassword(input, min, max) {
    var inputList = document.getElementById("password").value;
    var msg_error = document.querySelector("p#p-" + input.id);
    var chara1 = inputList.indexOf('@');
    var chara2 = inputList.indexOf('$');
    var chara3 = inputList.indexOf('*');
    var chara4 = inputList.indexOf('-');
    if (input.value.length > max || input.value.length < min || (chara1 == -1 && chara2 == -1 && chara3 == -1 && chara4 == -1)) {
        debugger;
        //Show msg
        msg_error.innerHTML = 'Password từ 8 đến 16 ký tự và chứa các ký tự @, $, *,-';
        msg_error.classList.remove("display-none");
    } else {
        //Hide msg
        msg_error.innerHTML = '';
        msg_error.classList.add("display-none");
    }
}

//zip
function checkMaxLengthZip(input, min, max) {
    var msg_error = document.querySelector("p#p-" + input.id);
    if (input.value > max || input.value < min) {
        debugger;
        //Show msg\
        msg_error.innerHTML = 'Zip is numberic 1000-5000';
        msg_error.classList.remove("display-none");
    } else {
        //Hide msg
        msg_error.innerHTML = '';
        msg_error.classList.add("display-none");
    }
}




