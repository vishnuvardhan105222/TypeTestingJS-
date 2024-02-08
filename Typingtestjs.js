let timer = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let result = document.getElementById("result");
let quoteInput = document.getElementById("quoteInput");
quoteInput.placeholder = "Type here.....!!";
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let spinner = document.getElementById("spinner");

let options = {
    method: "GET",
};

let url = "https://apis.ccbp.in/random-quote";
fetch(url, options)
    .then(function(response) {
        spinner.classList.remove("d-none");
        return response.json();
    })
    .then(function(jsonData) {
        quoteDisplay.textContent = jsonData.content;
        quoteDisplay.style.textAlign = "justify";
        spinner.classList.add("d-none");
    });
let countdown = 0;
let intervalId = setInterval(function() {
    countdown = countdown + 1;
    timer.textContent = countdown + "seconds";
}, 1000);

submitBtn.addEventListener("click", function(event) {
    let quoteInputValue = quoteInput.value;
    if (quoteInputValue === quoteDisplay.textContent) {
        let currentTime = Math.round((event.timeStamp) / 1000);
        result.textContent = "You typed in " + currentTime + "seconds";
        clearInterval(intervalId);
    } else if (quoteInputValue !== quoteDisplay.textContent) {
        result.textContent = "You typed  incorrect sentence";
    }
});
resetBtn.addEventListener("click", function() {
    location.reload();
    quoteInput.value = '';
})