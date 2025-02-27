const homeScoreElem = document.getElementById("home-score");
const guestScoreElem = document.getElementById("guest-score");
let home = 0;
let guest = 0;

homeScore.textContent = home;
guestScore.textContent = guest;

function homeScore(num){
    home += num;
    homeScoreElem.textContent = home;
}

function guestScore(num){
    guest += num;
    guestScoreElem.textContent = guest;
}