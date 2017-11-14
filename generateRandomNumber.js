
function generateRandomNumber(){
    var r=Math.floor((Math.random() * 255) + 0);
    var g=Math.floor((Math.random() * 255) + 0);
    var b=Math.floor((Math.random() * 255) + 0);

    var color='{r: ' + r + ' g: ' + g + ' b: ' + b+'}';

    return color;

    
}

console.log(generateRandomNumber());
// {r:100, g: 100, b: 100}