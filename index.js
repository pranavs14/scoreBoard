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

document.querySelectorAll('.score-increment button').forEach(button => {
    button.addEventListener('click', () => {
        const isHome = button.parentElement.previousElementSibling.id === "home-score";
        const increment = parseInt(button.textContent);
        isHome ? homeScore(increment) : guestScore(increment);
    });
});
