import { sendHttpRequest } from './requestUtility.js'
$(document).ready(function () {
    $("#myBtn").click(function () {
        url = "https://127.0.0.1:8000/signUp"
        first_name = $("#first_name").val();
        last_name = $("#last_name").val();
        email = $("#email").val();
        role = $("#type").val();
        username = $("#username").val();
        password = $("#password").val();
        birth_date = $("#birth_date").val();
        city = $("#city").val();
        address = $("#address").val();
        //radio button of gender
        gender=Number($('input[name=radio]:checked').val())
        sendHttpRequest("POST", url,
         { username: username, password: password,firstname:first_name
            ,lastname:last_name,birthdate:birth_date,gender:gender,city:city,address:address,email:email,role:role }).then(responseData => {
            if (responseData["success"] == 'true') {
                localStorage.setItem("usertoken", responseData["token"]);
                location.replace("signin.html");
            } else {
                window.alert("خطأ في تسجيل الحساب وحاول مرة اخرى");
            }
        })
    })
});