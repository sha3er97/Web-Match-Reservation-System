
import {sendHttpRequest} from './requestUtility.js'

function get_Match_Data(match_id)
{
    url = ""
    sendHttpRequest("GET",url).then(responseData=>{
        return responseData;
    })
}
function get_Stadium_data(stadium_name)
{
    url = ""
    sendHttpRequest("GET",url).then(responseData=>{
        return responseData;
    })
}
function get_seats_list(stadium_name,match_id)
{
    //get the seats of the stadium at this match.
    url = ""
    sendHttpRequest("GET",url).then(responseData=>{
        return responseData;
    })
}
function update_seat_state(stadium_name,match_id,seat_id)
{
    url = ""
    sendHttpRequest("GET",url,{"id":seat_id,"state":1});
}

//get the match data and stadium data and seats of stadium states on document loded.
var match_data={"match_id":1,
"Stadium" : "WE-el slam",
"Match_Date":"2 jun",
"Home_image_url" : "images/ahly.png",
"Home_name": "AL_Ahly",
"match_time" : "17:00",
"Away_image_url" :  "images/ahly.png",
"Away_name" :"AL_Zamalk",
"main_referee":"Referee name",
"lineman_1":"lineman_1",
"lineman_2":"lineman_2"
}
var stadium_data = {
    "name":"We - el slam",
    "rows":4,
    "cols":6
}

//seats state 0 for free seats and 1 for reserved seats
var seats=[{"id":0,"state":1},
{"id":1,"state":0},
{"id":2,"state":1},
{"id":3,"state":1},
{"id":4,"state":0},
{"id":5,"state":1},
{"id":6,"state":1},
{"id":7,"state":0},
{"id":8,"state":1},
{"id":9,"state":1},
{"id":10,"state":0},
{"id":11,"state":1},
{"id":12,"state":1},
{"id":13,"state":0},
{"id":14,"state":1},
{"id":15,"state":1},
{"id":16,"state":0},
{"id":17,"state":1},
{"id":18,"state":1},
{"id":19,"state":0},
{"id":20,"state":1},
{"id":21,"state":1},
{"id":22,"state":0},
{"id":23,"state":1}]

let selectedSeatId =0;
let match_id = localStorage.getItem("match_id")

// //behaviour of confirm ,, make hhtp post request
// function ConfirmClick() {
//     console.log("selected seat id is : "+selectedSeatId)
//     window.location.replace("./success.html")
// }
function stadiumView()
{
    let index=0
    //loop on rows and coloumns to add button.
    for(let i=0;i<stadium_data["rows"];i++)
    {
        let row = document.createElement("div")
        row.classList.add("row")
        for(let j=0;j<stadium_data["cols"];j++)
        {
            let col = document.createElement("div")
            col.classList.add("col")            
            let button = document.createElement("button")
            button.classList.add("rounded-circle")
            button.setAttribute("value",seats[index]["id"])
            button.style.border="black"
            button.style.borderStyle="solid"
            button.style.width="50px"
            button.style.height="50px"
            if(seats[index]["state"]==1)
            {
                button.style.backgroundColor="grey"
                button.disabled = true;
            }
            else{
            button.style.backgroundColor="aquamarine"
            
            }
            
            button.style.textAlign="center"
            button.style.fontSize="25px"
            button.style.fontFamily="fantasy"
            let text = document.createTextNode(index.toString());
            button.appendChild(text)
            col.append(button)
            row.appendChild(col)
            index+=1
        }
        document.getElementById("seats").appendChild(row)
    }
    console.log(document.getElementById("report-form").children)
}


// get request to get match data and stadium data.
$(document).ready(function() {
    // match_data = get_Match_Data(match_id);
    // stadium_data = get_Stadium_data(match_data["Stadium"]); 
    // seats = get_seats_list(stadium_data["name"],match_id);
    stadiumView()
    $("#myBtn").click(function(){
        if(selectedSeatId!=-1){
        console.log("selected seat id is : "+selectedSeatId)
        // update_seat_state(stadium_data["name"],match_data["Stadium"],selectedSeatId);
        window.location.replace("./success.html")
        }
    });
    $("button").click(function () {
        let index = $(this).text()
        let id = $(this).attr('value')
        // check = confirm("are you sure you want to reserve seat number "+index+" ?")
        // if(check)
        // {
        if($(this).css("background-color")[4] == 2)
        {
            //255 red.
            //toggle color and no seat is selected.
            selectedSeatId=-1
            $(this).css("background-color", "aquamarine"); 
            $("#checkConfirm").text("No seat is selected.")
          
        }
        else
        {
        $("#checkConfirm").text("are you sure you want to reserve seat number "+index+" ?")    
        $(this).css("background-color", "red");
        // }
        selectedSeatId = id;
        console.log($(this).attr('value'));
        }
    })
});
