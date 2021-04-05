import {sendHttpRequest} from './requestUtility.js'

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
    // button.setAttribute("value", user["User_ID"])
    // let text = document.createTextNode("Approve");
    // button.appendChild(text)

    let button2 = document.createElement("button")
    button2.classList.add("btn")
    button2.classList.add("btn-danger")
    button2.setAttribute("value", user["User_ID"])
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