// import "./requestUtility.js";
import {sendHttpRequest} from './requestUtility.js'
let nextCount=0;
let userauth = true;
function addMatch(match_data)
 {
    //create container for list item
        let listItem = `
        <li value="`+ match_data["match_id"] + `"id="Match_list_item" class="container-fluid" style="cursor: pointer; background: #E4E4E4;color: rgb(2, 11, 88);border-radius: 40px; padding: 16px; margin: 16px;">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-sm-auto">
                        <div class="container">
                            <div class="row justify-content-center"><img src="images/stadium.png" class="rounded" height="50px" width="50px" alt="..."></div>
                            <div class="row justify-content-center"><p>`+ match_data["Stadium"] + `</p></div>
                        </div>
                    </div>
                    <div class="col-sm-auto">
                        <div class="container">
                            <div class="row justify-content-center"><img src="images/calendar.png" class="rounded" height="50px" width="50px" alt="..."></div>
                            <div class="row justify-content-center"><p>`+ match_data["Match_Date"] + `</p></div>
                        </div>
                    </div>
                </div>
                    
                <div class="row justify-content-center">
                    <div class="col-md-auto">
                        <div class="container">
                            <div class="row justify-content-center">
                                <img name="Home_image" src = `+ match_data["Home_image_url"] + ` class="rounded" height="100px" width="100px">
                            </div>
                            <div class="row justify-content-center">
                                <h1 name="Home_Name">`+ match_data["Home_name"] + `</h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-auto">
                        <div class="container">
                            <div class="row justify-content-center">
                                <img src="images/time.png" class="rounded" height="50px" width="50px">
                            </div>
                            <div class="row justify-content-center">
                                <h1 name="Match_time">`+ match_data["match_time"] + `</h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-auto">
                        <div class="container">
                            <div class="row justify-content-center">
                                <img name="Away_image" src =`+ match_data["Away_image_url"] + ` class="rounded" height="100px" width="100px">
                            </div>
                            <div class="row justify-content-center">
                                <h1 name="Away_Name">`+ match_data["Away_name"] + `</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </li>
    <br>
        `
    
    $("#matches_list").append(listItem)
    console.log('li[value="'+match_data["match_id"]+'"]')
    $('li[value="'+match_data["match_id"]+'"]').click(function()
    {
        console.log("item is clicked");
        let value = $(this).val();
        console.log("item with id : " + value + " is clicked")
        localStorage.setItem("match_id", value)
        console.log(localStorage.getItem("match_id"))
        window.document.location.href = "./match.html"
    });
}


function loadMatchesList(weekNumber) {
    // $("#week_number").text("week "+weekNumber)  
    let Data ="";
    //http get request to get the next list of matches.
    const match_data = {
        "match_id": 1,
        "Stadium": "WE-el slam",
        "Match_Date": "3 jun",
        "Home_image_url": "images/ahly.png",
        "Home_name": "Ahly",
        "match_time": "17:00",
        "Away_image_url": "images/ahly.png",
        "Away_name": "Zamalk"
    }
    $("#matches_list").empty();
    let url = "https://reqres.in/api/users?page=2"
    sendHttpRequest('GET',url).then(
        responseData=>
        {
            Data = responseData["data"];
            Data = Data.slice(weekNumber*9,(weekNumber+1)*9)  
            console.log(Data)
            for (var match in Data)
            {
                //addMatch(Data[match])
                addMatch(match_data);
            } 
        
        })
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
            logout();
        });
        let span = document.createElement("span");
        span.classList.add("fas.fa-user");
        link2.innerText="log out";
        link2.href="";
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
        link2.appendChild(span2);
        item2.appendChild(link2);
        $("#Navauth").append(item2);
    }
}

$(document).ready(function(){
    userauth = localStorage.getItem("userAuth");
    if(userauth == "true")
    {
        userauth=true;
    }
    else
    {
        userauth = false;
    }
    updateNavBar(userauth);
    loadMatchesList(nextCount)
    $("#LoadNextWeek").click(function() {
    nextCount+=1;
    loadMatchesList(nextCount);
    })
    
    $("#active").click(function() {
        nextCount = 0;    
        loadMatchesList(nextCount);
        })
})
