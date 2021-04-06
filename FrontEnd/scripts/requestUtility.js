function sendHttpRequest(method, url,data,token) {
    var xhttp = new XMLHttpRequest();
    xhttp.responseType = 'json'
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhttp.setRequestHeader("Accept", "application/json, text-plain, */*")
    xhttp.setRequestHeader("X-CSRF-TOKEN", token)
    xhttp.open(method, url);
    const promise = new Promise((resolve,reject)=>{
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                resolve(xhttp.response)
            }
        };
        xhttp.send(JSON.stringify(data));
    });
    return promise
}
export {sendHttpRequest};