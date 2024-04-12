let celsius = document.querySelector("#celcNum");
let fahrenheit = document.querySelector("#pharenNum");
celsius.addEventListener('input',function(){
    let celc = this.value;
    let faren = (celc * 9/5) + 32;
    if(!faren.isInteger){
        faren = faren.toFixed(4);
    }
    fahrenheit.value = faren;
});
fahrenheit.addEventListener('input',function(){
    let fahren = this.value;
    let celc =  [(fahren - 32) * 5] / 9;
    if(!celc.isInteger){
        celc = celc.toFixed(4);
    }
    celsius.value = celc;
});