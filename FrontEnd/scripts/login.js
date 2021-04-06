import {sendHttpRequest} from './requestUtility.js'

var usern = document.getElementById("username");
var pass = document.getElementById("password");
var users = [];
var password;
const submit = document.getElementById("submitBtn");


// //to be edited
// submit.addEventListener("click", (e) => {
//     e.preventDefault();
//     // var flag = false;
//     var flag = true;
//     for (var i = 0; i < users.length; i++) {
//         if (usern.value == users[i] && pass.value == password) {
//             flag = true;
//             break;
//         } else {
//             flag = false;
//         }
//     }
//     if (flag == true) {
//         localStorage.setItem("userAuth", true);
//         //TODO post request and get the state with user id.
//         localStorage.setItem("userID", 1)
//         location.replace("HomePage.html");
//     } else {
//         window.alert("خطأ في كلمة السر او المستخدم");
//     }
// });
$(document).ready(function () {
    $("#myBtn").click(function () {
        var url = "https://127.0.0.1:8000/signIn"
        sendHttpRequest("POST", url, {username: usern.value, password: pass.value}).then(responseData => {
            if (responseData["success"] == 'true') {
                localStorage.setItem("userAuth", true);
                localStorage.setItem("usertoken", responseData["token"]);
                localStorage.setItem("userID", usern.value)
                location.replace("HomePage.html");
            } else {
                window.alert("خطأ في كلمة السر او المستخدم");
            }
        })
    })
});