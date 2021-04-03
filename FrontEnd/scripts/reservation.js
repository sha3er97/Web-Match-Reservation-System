
import {sendHttpRequest} from './requestUtility.js'
let seats_map = new Map()
let userauth = localStorage.getItem("userAuth");;
let prevButton = -1;
let userID = localStorage.getItem("userID");
let selectedSeatId =0;
let match_id = localStorage.getItem("match_id")

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
        return responseData["Data"];
    })
}
function get_seats_list(match_id)
{
    //get the seats of the stadium at this match.
    url = ""
    sendHttpRequest("GET",url).then(responseData=>{
        for (seat in  responseData["Data"])
        {
            //make composite key : "row,col"
            seats_map[seat["row"].toString()+","+seat["col"].toString()] = seat["state"]
        }
    })
}
function update_seat_state(stadium_name,match_id,seat_row,seat_col)
{
    url = ""
    sendHttpRequest("POST",url,{user_id:userID,stadium_name:stadium_name,match_id:match_id,row:seat_row,col:seat_col,state:1}).then(responseData=>
        {
            if(responseData["state"] == "success")
            {
                window.location.replace("./success.html")
            }
            else
            {
                window.location.replace("./homepage.html")
            }
        })
}


//get the match data and stadium data and seats of stadium states on document loded.
var match_data={"match_id":1,
"Stadium" : "WE-el slam",
"Match_Date":"2 jun",
"Home_image_url" : "images/ahly.png",
"Home_name": "AL Ahly",
"match_time" : "17:00",
"Away_image_url" :  "images/ahly.png",
"Away_name" :"AL Zamalk",
"main_referee":"Referee name",
"lineman_1":"firstlineman",
"lineman_2":"secondlineman"
}
var stadium_data = {
    "name":"We - el slam",
    "rows":4,
    "cols":9
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
{"id":23,"state":1},
{"id":24,"state":1},
{"id":25,"state":0},
{"id":26,"state":1},
{"id":27,"state":1},
{"id":28,"state":0},
{"id":29,"state":1},
{"id":30,"state":1},
{"id":31,"state":0},
{"id":32,"state":1},
{"id":33,"state":1},
{"id":34,"state":0},
{"id":35,"state":1}]





function stadiumView()
{
    let index=0
    let table = document.createElement("table")
    table.classList.add("table.table-responsive");
    table.style.margin="0px auto";
    table.style.border="none";
    table.style.borderCollapse="collapse";
    document.getElementById("seats").appendChild(table)
    
    //loop on rows and coloumns to add button.
    for(let i=0;i<stadium_data["rows"];i++)
    {
        let row = document.createElement("tr")
        row.style.border="none";
        row.style.borderCollapse="collapse";
        for(let j=0;j<stadium_data["cols"];j++)
        {
            let col = document.createElement("td")
            col.style.border="none";
            col.style.borderCollapse="collapse";
            let button = document.createElement("button")
            button.classList.add("rounded-circle")
            button.setAttribute("value",i.toString()+","+j.toString())
            button.style.border="black"
            button.style.borderStyle="solid"
            button.style.width="50px"
            button.style.height="50px"
            
            if(seats[index]["state"]==1)
            {
                button.style.backgroundColor="grey"
                button.disabled = true;
            }
            else
            {
                button.style.backgroundColor="aquamarine"
                if(userauth == false)
                {   
                    button.disabled = true;
                }
            }
            //using seats map    if key is exist then the seat is reserved.
            if(seats.has(i.toString()+","+j.toString()))
            {
                button.style.backgroundColor="grey"
                button.disabled = true;
            }
            else
            {
                button.style.backgroundColor="aquamarine"
                if(userauth == false)
                {   
                    button.disabled = true;
                }
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
        table.appendChild(row)
    }
    console.log(document.getElementById("report-form").children)
}
function view_match_data(match_data)
{
    $('p[name = "stadium_name"]').text(match_data["Stadium"]);
    $('p[name = "match_date"]').text(match_data["Match_Date"]);
    $('h1[name="Home_Name"]').text(match_data["Home_name"]);
    $('h1[name="Match_time"]').text(match_data["match_time"]);
    $('h1[name="Away_Name"]').text(match_data["Away_name"]);
    $('img[name="Away_image"]').attr("src",match_data["Away_image_url"]);
    $('img[name="Home_image"]').attr("src",match_data["Home_image_url"]);
    $('h1[name="lineman1_Name"]').text(match_data["lineman_1"])
    $('h1[name="lineman2_Name"]').text(match_data["lineman_2"])
    $('h1[name="main_referee"]').text(match_data["main_referee"])
    
    
}
function logout()
{
    //change user auth state to false , then forward to home page.
    userauth = false;
    localStorage.setItem("userAuth",false);
    window.document.location.href = "HomePage.html"
}    
//userauth is bool True if user is loged in ,, false if guest.
function updateNavBar(userauth)
{
    console.log("user auth state is :",userauth);
    console.log("type of userauth : ",typeof userauth);
    if(userauth == true)
    {
        console.log("inside true procedure");
        //add profile button.
        let item = document.createElement("li");
        item.classList.add("nav-item");
        let link = document.createElement("a");
        link.classList.add("nav-link");
        link.href = "profile.html";
        link.innerText="My Profile";
        item.appendChild(link);
        $("#home_profile").append(item);
        //add My Tickets button.
        item = document.createElement("li");
        item.classList.add("nav-item");
        link = document.createElement("a");
        link.classList.add("nav-link");
        link.href = "Tickets.html";
        link.innerText="My tickets";
        item.appendChild(link);
        $("#home_profile").append(item);

        //add log out button instead of login.
        let item2 = document.createElement("li");
        item2.classList.add("nav-item");
        let link2 = document.createElement("a");
        link2.classList.add("nav-link");
        link2.addEventListener("click",function()
        {
            logout(userauth);
        });
        let span = document.createElement("span");
        span.classList.add("fas.fa-user");
        link2.innerText="log out";
        link2.appendChild(span);
        item2.appendChild(link2); 
        $("#Navauth").append(item2);
    }
    else//guest
    {
        //add signup and login  button.
        let item = document.createElement("li");
        item.classList.add("nav-item");
        let link = document.createElement("a");
        link.classList.add("nav-link");
        link.href = "signup.html";
        let span = document.createElement("span");
        span.classList.add("fas.fa-user");
        link.innerText="Sign Up";
        link.appendChild(span);
        item.appendChild(link);
        $("#Navauth").append(item);

        let item2 = document.createElement("li");
        item2.classList.add("nav-item");
        let link2 = document.createElement("a");
        link2.classList.add("nav-link");
        link2.href = "signin.html";
        let span2 = document.createElement("span");
        span2.classList.add("fas.fa-sign-in-alt");
        link2.innerText="Login";
        link2.href="signin.html";
        link2.appendChild(span2);
        item2.appendChild(link2);
        $("#Navauth").append(item2);
    }
}
// get request to get match data and stadium data.
$(document).ready(function() {

    // match_data = get_Match_Data(match_id);
    // stadium_data = get_Stadium_data(match_data["Stadium"]); 
    // seats = get_seats_list(match_id);
    view_match_data(match_data);

    if(userauth == "true")
    {
        userauth=true;
    }
    else
    {
        userauth = false;
    } 
    console.log("user auth type is : ",userauth)
    updateNavBar(userauth)
    
    if(userauth == false)
    {
        //guest
        // $("#Reservation_section").hide();
        stadiumView();
        $("#Confirmation_section").hide();
        // $("#myBtn").hide();
        
    }
    else{
        stadiumView();
    }
    
    $("#myBtn").click(function(){
        if(selectedSeatId!=-1){
        console.log("selected seat id is : "+selectedSeatId)
        // update_seat_state(stadium_data["name"],match_data["Stadium"],selectedSeatId);
        //TODO Post request.
        comma = selectedSeatId.indexOf(',')
        seat_row = Number(selectedSeatId.slice(0,comma))
        seat_col = Number(selectedSeatId.slice(comma,selectedSeatId.lenght()))  
        // update_seat_state(stadium_data["name"],match_id,seat_row,seat_col);
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
        if(prevButton !=-1)
        {
            $("button[value = "+prevButton.toString()+"]").css("background-color", "aquamarine");
        }
        prevButton = id;
        console.log($(this).attr('value'));
        }
    })
});
