const body = document.querySelector("body");
//이미지가 모두 로딩 된 후에 화면에 그리기 위해

const IMG_NUMBER = 3;

function handleImgLoad(){
    console.log("finished loading");
    
}

function paintImage(imgNumber){
    const image = new Image(); 
    image.src = `images/${imgNumber}.jpg`;
    body.appendChild(image);
    image.classList.add("bgImage");
  //  image.addEventListener("loadend", handleImgLoad)
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
    const rendomNumber = genRandom();
    paintImage(rendomNumber);
}

init();