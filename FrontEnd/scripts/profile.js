import {sendHttpRequest} from './requestUtility.js'

var globalUser;

function loadProfile(user) {
    var firstName = document.getElementById("firstName");
    firstName.setAttribute("value", user["firstName"])
    var lastName = document.getElementById("lastName");
    lastName.setAttribute("value", user["lastName"])
    var verification = document.getElementById("verification");
    let text2 = document.createTextNode(user["verification"]);
    verification.appendChild(text2)
    var username = document.getElementById("username");
    let text3 = document.createTextNode(user["username"]);
    username.appendChild(text3)
    var role = document.getElementById("role");
    let text4 = document.createTextNode(user["role"]);
    role.appendChild(text4)
    var genderM = document.getElementById("male");
    var genderF = document.getElementById("female");

    if (user["gender"] === "Male") {
        genderM.checked = true;
    } else {
        genderF.checked = true;
    }
    var address = document.getElementById("address");
    address.setAttribute("value", user["address"])
    var city = document.getElementById("city");
    city.setAttribute("value", user["city"])
    var email = document.getElementById("email");
    email.setAttribute("value", user["email"])
    var birth_date = document.getElementById("birth_date");
    birth_date.setAttribute("value", Date.parse(user["birth_date"].toString()))
}

function submitClick() {
    let url = ""
    sendHttpRequest('POST', url, {
        user_id: globalUser["User_ID"],
        firstName: globalUser["firstName"],
        lastName: globalUser["lastName"],
        email: globalUser["email"],
        role: globalUser["role"],
        birthDate: globalUser["birthDate"],
        city: globalUser["city"],
        address: globalUser["address"],
        gender: globalUser["gender"],
        verification: globalUser["verification"]
    }).then(
        responseData => {
            let state = responseData["state"];
            console.log(state)
            if (state === true) {
                //reload
                window.location.replace("./profile.html")
                alert("data saved successfully")
            }
        })
}

let user_test = {
    "firstName": "john",
    "lastName": "doe",
    "email": "user@gmail.com",
    "role": "manager",
    "birthDate": "2 jun",
    "city": "cairo",
    "address": "address dummy",
    "gender": "male",
    "verification": "pending",
    "User_ID": 5
};

function get_Profile_Data() {
    //url contain userid to get the reservations of this user.
    let url = "https://reqres.in/api/users?page=2"
    sendHttpRequest('GET', url).then(
        responseData => {
            let Data = responseData["data"];
            console.log(Data)
            for (var user in Data) {
                loadProfile(user);
                // loadProfile(user_test);
            }

        })
}

$(document).ready(function () {
    get_Profile_Data();
})