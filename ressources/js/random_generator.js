document.addEventListener('keydown', function(event) {
    if(event.key === " "){
        event.preventDefault;
        GenerateColors();
    } 
})

addEventListener("load", (event) => {});
onload = (event) => {
    GenerateColors();
};

const colorArray = [];
var columns = document.getElementsByClassName('colorcol');

function GenerateColors(){
    colorArray.length = 0;
    for (var i = 0; i < columns.length; i++) {
        colorArray[i] = 'RGB(' + randHexVal() + ',' + randHexVal() + ',' + randHexVal() + ')';  
        columns[i].style.backgroundColor = colorArray[i];
    }
}


function randHexVal() {
    return Math.floor(Math.random() * 256);
}