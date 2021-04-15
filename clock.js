const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");


function getTime(){
    const date = new Date();
    const Hours = date.getHours();
    const mins = date.getMinutes();
    const sec = date.getSeconds();
    console.log(`${Hours}:${mins}`);
    clockTitle.innerText = `${Hours}:${mins}:${sec}`;
}

function init(){
    getTime();
    //clockTitle = clockTitle.innerHTML();
}

init();