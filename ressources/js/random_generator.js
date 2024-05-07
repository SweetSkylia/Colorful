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
    for (let i = 0; i < 6; i++) {
        
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var j = 0; j < 6; j++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        colorArray.push(color);
        
    }
    // console.log(columns);
    // console.log(colorArray);
    for (var i = 0; i < columns.length; i++) {
        // console.log(columns[i] + " | " + colorArray[i])
        columns[i].style.backgroundColor = colorArray[i];
    }
}

