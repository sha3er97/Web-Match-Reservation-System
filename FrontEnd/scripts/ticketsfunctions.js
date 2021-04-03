import { sendHttpRequest } from './requestUtility.js'
//key is seatID which is  unique , value is reservation dictionary. 
let Reservation_map = new Map()
let userID = localStorage.getItem("userID");
function loadMyTickets(i, reservation) {

    let tr = document.createElement("tr")
    var td0 = document.createElement("td");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
    var td7 = document.createElement("td");

    let button = document.createElement("button")
    button.classList.add("btn")
    button.classList.add("btn-danger")
    button.setAttribute("value", reservation["Seat_ID"])
    let text = document.createTextNode("Cancel");
    button.appendChild(text)
    td0.appendChild(document.createTextNode(String(i)));
    td1.appendChild(document.createTextNode(reservation["Home_team"]));
    td2.appendChild(document.createTextNode(reservation["Away_team"]));
    td3.appendChild(document.createTextNode(reservation["Match_date"]));
    td4.appendChild(document.createTextNode(reservation["Match_time"]));
    td5.appendChild(document.createTextNode(reservation["stadium"]));
    td6.appendChild(document.createTextNode(reservation["Seat_ID"]));
    td7.appendChild(button);
    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    var element = document.getElementById("tickets");
    element.appendChild(tr)
}

let reservation_test = {
    "Home_team": "al ahly",
    "Away_team": "al-zamalak",
    "Match_date": "2 jun",
    "Match_time": "19:00",
    "stadium": "el salam",
    "Seat_ID": 5
};

function get_Reservation() {
    //url contain userid to get the reservations of this user.
    let url = "https://reqres.in/api/users?page=2"
    sendHttpRequest('GET', url).then(
        responseData => {
            let Data = responseData["data"];
            console.log(Data)
            var i = 2
            for (var reservation in Data) {
                // Reservation_map[reservation["Seat_ID"]] = reservation;
                // loadMyTickets(reservation);
                Reservation_map[reservation_test["Seat_ID"]] = reservation_test;
                loadMyTickets(i, reservation_test);
                i += 1;
            }

        })
}
$(document).ready(function () {
    get_Reservation();
    //cancel reservation button.
    $("button").click(function () {
        let ID = $(this).attr('value')
        var reservation = Reservation_map[String(ID)]
        let url = ""
        sendHttpRequest('POST', url,{user_id:userID,seat_id:reservation["Seat_ID"],stadium:reservation["stadium"],Match_time:reservation["Match_time"]}).then(
            responseData => {
                let state = responseData["state"];
                console.log(state)
                if (state == "success")
                {
                    //reload
                    window.location.replace("./Ticket.html")
                }
            })       
    })
})
