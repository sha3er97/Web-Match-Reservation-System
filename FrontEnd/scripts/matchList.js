// import "./requestUtility.js";
import {sendHttpRequest} from './requestUtility.js'
let currentWeekNumber =0;

function addMatch(match_data) {
    // 
    //create container for list item
        let listItem = `
        <li value="`+ match_data["match_id"] + `" id="Match_list_item" class="list-group-item list-group-item-action">
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
            console.log(Data)
            for (var match in Data)
            {
                //addMatch(Data[match])
                addMatch(match_data);
            } 
        
        })
    }


function getCurrentWeek()
{
    //TODO
    //get the current week from data base to fetch it. 
    let url = "https://reqres.in/api/unknown/2"
    sendHttpRequest('GET',url).then(
        responseData=>
        {
          console.log(responseData["data"]["id"])
          return responseData["data"]["id"]  
        })    
}
$(document).ready(function(){
    currentWeekNumber = getCurrentWeek()
    loadMatchesList(currentWeekNumber)
        
    $("#LoadNextWeek").click(function() {
    loadMatchesList(currentWeekNumber+1);
    })
    
    $("#active").click(function() {
        loadMatchesList(currentWeekNumber);
        })
})
