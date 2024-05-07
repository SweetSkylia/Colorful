document.addEventListener('keydown', function(event) {
    if(event.key === " " && event.target === document.body){
        event.preventDefault();
        GenerateColors();
    } 
})


onload = (event) => {
    GenerateColors();
};

const colorArray = [];
let columns = document.getElementsByClassName('colorcol');

function GenerateColors(){
    colorArray.length = 0;
    for (let i = 0; i < columns.length; i++) {
        colorArray[i] = 'RGB(' + randHexVal() + ',' + randHexVal() + ',' + randHexVal() + ')';  
        columns[i].style.backgroundColor = colorArray[i];
    }
}


function randHexVal() {
    return Math.floor(Math.random() * 256);
}