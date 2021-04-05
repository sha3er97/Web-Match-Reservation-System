import {sendHttpRequest} from './requestUtility.js'

function addStadium() {
    let url = ""
    var name = document.getElementById("name");
    var rows = document.getElementById("rows");
    var seats = document.getElementById("seats");

    sendHttpRequest('POST', url, {
        name: name.value,
        number_of_rows: Number(rows.value),
        number_of_seats_per_row: Number(seats.value)
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