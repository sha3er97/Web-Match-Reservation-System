import {sendHttpRequest} from './requestUtility.js'

$(document).ready(function () {
    $("#myBtn").click(function () {
        var url = "https://127.0.0.1:8000/signUp"
        var first_name = $("#first_name").val();
        var last_name = $("#last_name").val();
        var email = $("#email").val();
        var role = $("#type").val();
        var username = $("#username").val();
        var password = $("#password").val();
        var birth_date = $("#birth_date").val();
        var city = $("#city").val();
        var address = $("#address").val();
        //radio button of gender
        var gender = Number($('input[name=radio]:checked').val())
        sendHttpRequest("POST", url,
            {
                username: username,
                password: password,
                firstname: first_name
                ,
                lastname: last_name,
                birthdate: birth_date,
                gender: gender,
                city: city,
                address: address,
                email: email,
                role: role
            }).then(responseData => {
            if (responseData["success"] == 'true') {
                localStorage.setItem("usertoken", responseData["token"]);
                location.replace("signin.html");
            } else {
                window.alert("خطأ في تسجيل الحساب وحاول مرة اخرى");
            }
        })
    })
});