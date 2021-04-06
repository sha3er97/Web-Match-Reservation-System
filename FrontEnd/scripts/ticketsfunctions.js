import { sendHttpRequest } from './requestUtility.js'
//key is seatID which is  unique , value is reservation dictionary. 
let Reservation_map = new Map()
let userID = localStorage.getItem("userID");
//teams name map
let teams_map = new Map();
teams_map['1'] = "Al Ahly"
teams_map['2'] = "Al Zamalk"
teams_map['3'] = "Pyramids"
teams_map['4'] = "Al Masry"
teams_map['5'] = "Masr ElMkasa"
teams_map['6'] = "Ismali"
teams_map['7'] = "Enppi"
teams_map['8'] = "Talaa elgesh"
teams_map['9'] = "elMahla"
teams_map['10'] = "Elathad"
teams_map['11'] = "Makawloon"
teams_map['12'] = "Smoha"
teams_map['13'] = "Al Gona"
teams_map['14'] = "Wadi degla"
teams_map['15'] = "Aswan"
teams_map['16'] = "Ahly Bank"
teams_map['17'] = "Intag"
teams_map['18'] = "Cermeka"

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
    var td8 = document.createElement("td");

    let button = document.createElement("button")
    button.classList.add("btn")
    button.classList.add("btn-danger")
    button.setAttribute("value", reservation["id"])
    let text = document.createTextNode("Cancel");
    button.appendChild(text)
    td0.appendChild(document.createTextNode(String(i)));
    td1.appendChild(document.createTextNode(teams_map[reservation["home"].tostring()]));
    td2.appendChild(document.createTextNode(teams_map[reservation["away"].tostring()]));
    td3.appendChild(document.createTextNode(reservation["match_date"]));
    td4.appendChild(document.createTextNode("19:00"));
    td5.appendChild(document.createTextNode(reservation["stadium"]));
    td6.appendChild(document.createTextNode(reservation["row"]));
    td7.appendChild(document.createTextNode(reservation["column"]));
    td8.appendChild(button);

    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);
    
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
    let url = "https://127.0.0.1:8000/userreservations"
    sendHttpRequest('GET', url,{username:userID}).then(
        responseData => {
            let Data = responseData["seatsid"];
            console.log(Data)
            var i = 1
            for (var reservation in Data) {
                Reservation_map[reservation["id"]] = reservation;
                loadMyTickets(reservation);
                // Reservation_map[reservation_test["Seat_ID"]] = reservation_test;
                // loadMyTickets(i, reservation_test);
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
        let url = "https://127.0.0.1:8000/cancelreservation"
        sendHttpRequest('POST', url,{seat_id:reservation["id"]}).then(
            responseData => {
                let state = responseData["success"];
                console.log(state)
                if (state == true)
                {
                    //reload
                    window.location.replace("./Ticket.html")
                }
            })       
    })
})
