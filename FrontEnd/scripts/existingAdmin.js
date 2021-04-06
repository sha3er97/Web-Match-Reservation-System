import {sendHttpRequest} from './requestUtility.js'

let User_map = new Map()

function loadActiveUser(i, user) {
    let tr = document.createElement("tr")
    var td0 = document.createElement("td");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
    var td7 = document.createElement("td");
    var td8 = document.createElement("td");
    var td9 = document.createElement("td");
    // var td10 = document.createElement("td");
    var td11 = document.createElement("td");

    // let button = document.createElement("button")
    // button.classList.add("btn")
    // button.classList.add("btn-success")
    // button.setAttribute("value", user["username"])
    // let text = document.createTextNode("Approve");
    // button.appendChild(text)

    let button2 = document.createElement("button")
    button2.classList.add("btn")
    button2.classList.add("btn-danger")
    button2.setAttribute("value", user["username"])
    let text2 = document.createTextNode("Cancel");
    button2.appendChild(text2)

    td0.appendChild(document.createTextNode(String(i)));
    td1.appendChild(document.createTextNode(user["firstName"]));
    td2.appendChild(document.createTextNode(user["lastName"]));
    td3.appendChild(document.createTextNode(user["email"]));
    td4.appendChild(document.createTextNode(user["role"]));
    td5.appendChild(document.createTextNode(user["username"]));
    td6.appendChild(document.createTextNode(user["birthDate"]));
    td7.appendChild(document.createTextNode(user["city"]));
    td8.appendChild(document.createTextNode(user["address"]));
    td9.appendChild(document.createTextNode(user["gender"]));
    // td10.appendChild(button);
    td11.appendChild(button2);

    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);
    tr.appendChild(td9);
    // tr.appendChild(td10);
    tr.appendChild(td11);

    var element = document.getElementById("users");
    element.appendChild(tr)
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
    "username": 5
};

function get_Users() {
    //url contain userid to get the reservations of this user.
    // let url = "https://reqres.in/api/users?page=2"
    let url = "https://127.0.0.1:8000/getAllUser"
    
    sendHttpRequest('GET', url).then(
        responseData => {
            let Data = responseData["users"];
            console.log(Data)
            var i = 1
            for (var user in Data) {
                User_map[user["username"]] = user;
                loadPendingUser(user);
                // User_map[user_test["username"]] = user_test;
                // loadActiveUser(i, user_test);
                i += 1;
            }

        })
}

$(document).ready(function () {
    get_Users();
    //cancel reservation button.
    $("button").click(function () {
        let ID = $(this).attr('value')
        var user = User_map[String(ID)]
        let url = "https://127.0.0.1:8000/removeUser"
        sendHttpRequest('POST', url,{username:user}).then(
            responseData => {
                let state = responseData["success"];
                console.log(state)
                if (state == true)
                {
                    //reload
                    window.location.replace("./sysAdmin_exisitingUsers.html")
                }
                else
                {
                    window.alert("something wrong happen, try again")
                }
            })
    })
})