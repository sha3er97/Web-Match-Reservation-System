function addMatch(match_data) {
    //create container for list item
    $(document).ready(function () {
        listItem = `
        <li value="`+ match_data["match_id"] + `" onclick="viewMatch(this)" class="list-group-item list-group-item-action">
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

        $(document).ready(function () {
            $("#matches_list").append(listItem)
        })

    })
}
function loadList() {

}

function viewMatch(elm) {
    console.log("item with id : " + elm.getAttribute('value') + " is clicked")
    localStorage.setItem("match_id", elm.getAttribute('value'))
    console.log(localStorage.getItem("match_id"))
    window.document.location.href = "./match.html"
}

function getMatchDetails()
{
    match_id = localStorage.getItem("match_id")
    console.log(match_id)
}