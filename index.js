const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";
// const BASE_COLOR = "rgb(170, 187, 204)";
const OTHER_COLOR = "rgb(255, 244, 0)";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS)
    // const currentColor = title.style.color;
    // console.log(currentColor);
    // if(currentColor === BASE_COLOR) {
    //     title.style.color = OTHER_COLOR;
    // }else{
    //     title.style.color = BASE_COLOR;
    // }
}

function init(){
    // title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init();