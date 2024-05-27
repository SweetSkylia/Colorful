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
let printHex = document.getElementsByClassName('printHex');
function GenerateColors(){
    const cases = document.querySelectorAll('.random-colors-grid input[type="checkbox"]');
    const casesVerr = [];
    colorArray.length = 0;
    cases.forEach((checkbox, index) => { 
        if (checkbox.checked) {
            casesVerr.push(index + 1);
        }
    });
    for (let i = 0; i < columns.length; i++) {
        //Si cases verrouillées on change pas
        if (casesVerr.includes(i+1)) {
            continue;
        }
        colorArray[i] = 'RGB(' + randHexVal() + ',' + randHexVal() + ',' + randHexVal() + ')';  
        columns[i].style.backgroundColor = colorArray[i];
        printHex[i].textContent = rgbToHex(colorArray[i]);

        printHex[i].style.color = getContrast(rgbToHex(colorArray[i]))
    }
}


function randHexVal() {
    return Math.floor(Math.random() * 256);
}

function rgbToHex(rgb) {
    let [r, g, b] = rgb.match(/\d+/g).map(x => (+x).toString(16).padStart(2, '0'));
    // /\d+/g --> récupère dans le string RGB(200,300,400) les valeurs et stockent comme ça [200,300,400]
    // .map on parcourt l'array et convertit en hexa avec le toString(16)
    //padStart rajoute un 0 si le string correspondant fais moins de 2 de longueur (ex : A -> 0A)
    return `#${r}${g}${b}`;
}

function getLuminance(hex){
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);

    // Appliquer la formule de luminance
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

function getContrast(hex){
    let luminance = getLuminance(hex);
    if (luminance > 0.5) {
        return '#000000';
    } else {
        return '#ffffff';
    }
}