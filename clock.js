const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const Hours = date.getHours();
    const mins = date.getMinutes();
    const sec = date.getSeconds();
    clockTitle.innerText = `
    ${Hours < 10 ? `0${Hours}` : Hours}:${mins < 10 ? `0${mins}` : mins}:${sec < 10 ? `0${sec}` : sec}
    `;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
    //clockTitle = clockTitle.innerHTML();
}

init();