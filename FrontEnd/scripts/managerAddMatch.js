import {sendHttpRequest} from './requestUtility.js'

function addMatch() {
    let url = ""
    var home = document.getElementById("home");
    var away = document.getElementById("away");
    var stadium = document.getElementById("stadium");
    var match_date = document.getElementById("match_date");
    var match_time = document.getElementById("match_time");
    var main_referee = document.getElementById("main_referee");
    var lineman_1 = document.getElementById("lineman_1");
    var lineman_2 = document.getElementById("lineman_2");

    sendHttpRequest('POST', url, {
        stadium: stadium.options[stadium.selectedIndex].text,
        home: Number(home.value),
        match_date: match_date.value,
        match_time: match_time.value,
        main_referee: main_referee.value,
        lineman_1: lineman_1.value,
        lineman_2: lineman_2.value,
        away: Number(away.value)
    }).then(
        responseData => {
            let state = responseData["state"];
            console.log(state)
            if (state === true) {
                //reload
                window.location.replace("./Manager_addStadium.html")
                name.setAttribute("value", "")
                rows.setAttribute("value", "")
                seats.setAttribute("value", "")
                alert("data saved successfully")

            }
        })
}