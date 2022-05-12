let reqBtn          = document.querySelector('.request-btn');
let reqInput        = document.querySelector('.request-input');
let respResultDiv   = document.querySelector('.response-result');

const STATUS_OK = 200;

function query(url, callback) {
    let request = new XMLHttpRequest();

    request.onreadystatechange = () => {
        console.log(request.readyState);
        if(request.readyState == XMLHttpRequest.DONE) {
            if(request.status == STATUS_OK) {
                console.log(request.response);
                /*
                let data = JSON.parse(request.response);
                let timesRated = data.casual.timesRated;
                let rating = data.casual.rating;
                respResultDiv.textContent = `Times rated: ${timesRated} with rating ${rating} out of 5`;
                */
               callback(request.response);
               //respResultDiv.textContent = request.response;
            }
        }
    }
    
    request.open('GET', url);
    request.send();
}

reqBtn.addEventListener('click', event => {
    let url = reqInput.value;

    query(url, response => {
        let data = JSON.parse(response);
        respResultDiv.textContent = data.super_secret_password;
    });

    console.log("End of function")
});


query("http://localhost:8080/scores", response => {
    let data = JSON.parse(response);
    let timesRated = data.casual.timesRated;
    let rating = data.casual.rating;
    respResultDiv.textContent = `Times rated: ${timesRated} with rating ${rating} out of 5`;
    
});

query("config.json", response => {
    let data = JSON.parse(response);
    respResultDiv.textContent = data.super_secret_password;
});