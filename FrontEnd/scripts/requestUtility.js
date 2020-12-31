function sendHttpRequest(method, url,data) {
    var xhttp = new XMLHttpRequest();
    xhttp.responseType = 'json'
    
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
