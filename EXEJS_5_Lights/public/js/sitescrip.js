// const light = document.querySelectorAll('.light');
// let arrcl = ["white","red","yellow","lime","aqua","fuchsia"];
// function randomColor() {
//     light.forEach(element => {
//         const colorChange = getRandomInt(0, arrcl.length);
//         element.style.background = arrcl[colorChange];
//     });
//     setTimeout(randomColor, 300);
// }
// let setColor = setTimeout(randomColor, 300);

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
// }

const light = document.querySelectorAll('.light');
const btnStart = document.querySelector('#btnStart');
let count = 0;
function rd() {
    light.forEach(e => {
        const top = getRandomInt(0,800);
        const left = getRandomInt(0,1200);
        e.style.top = top +"px";
        e.style.left = left +"px";
    });
    rdplace = setTimeout(rd, 500);
    count++;
    timeOut(count);
};

btnStart.addEventListener('click', function(){
    rdplace = setTimeout(rd, 500);
}, {one: true});

function timeOut(count){
    if(count == 20){
        clearTimeout(rdplace);
        
    }
    
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}