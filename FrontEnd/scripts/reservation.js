//get the match data and stadium data and seats of stadium states on document loded.
match_data={"match_id":1,
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
    "stadium_id" : 1,
    "name":"We - el slam",
    "rows":3,
    "cols":2
}

//seats state 0 for free seats and 1 for reserved seats
var seats=[{"id":0,"state":1},
{"id":1,"state":0},
{"id":2,"state":1},
{"id":3,"state":1},
{"id":4,"state":0},
{"id":5,"state":1}]

// get request to get match data and stadium data.
$(document).ready(function() {
    stadiumView()
});

function stadiumView()
{
    index=0
    //loop on rows and coloumns to add button.
    for(i=0;i<stadium_data["rows"];i++)
    {
        row = document.createElement("div")
        row.classList.add("row")
        for(j=0;j<stadium_data["cols"];j++)
        {
            col = document.createElement("div")
            col.classList.add("col-sm-auto")            
            button = document.createElement("button")
            button.classList.add("rounded-circle")
            button.setAttribute("value",seats[index]["id"])
            button.style.border="black"
            button.style.borderStyle="solid"
            button.style.width="50px"
            button.style.height="50px"
            button.style.backgroundColor="aquamarine"
            button.style.textAlign="center"
            button.style.fontSize="25px"
            button.style.fontFamily="fantasy"
            var text = document.createTextNode(index.toString());
            button.appendChild(text)
            col.append(button)
            row.appendChild(col)
            index+=1
        }
        document.getElementById("seats").appendChild(row)
    }
    console.log(document.getElementById("report-form").children)
}