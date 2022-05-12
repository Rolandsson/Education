let reqBtn          = document.querySelector('.request-btn');
let reqInput        = document.querySelector('.request-input');
let respResultDiv   = document.querySelector('.response-result');

reqBtn.addEventListener('click', event => {
    let url = reqInput.value;

    query(url, response => {
        let data = JSON.parse(response);
        respResultDiv.textContent = data.super_secret_password;
    });

    console.log("End of function")
});

axios.get("http://localhost:8080/scores").then(response => {
    let data = response.data;
    let timesRated = data.casual.timesRated;
    let rating = data.casual.rating;
    respResultDiv.textContent = `Times rated: ${timesRated} with rating ${rating} out of 5`;
});