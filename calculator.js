let screen = document.getElementById("screen");
let powerBtn = document.getElementById("powerBtn");


let isOn = false;
function press(value){
    if(isOn){
        screen.value += value;
        liveResult(); 
    }
}
function liveResult(){
    try{
        if(screen.value !== ""){
            screen.value = eval(screen.value);
        }
    }catch{
        
    }
}
function calculate(){
    if(isOn){
        try {
            screen.value = eval(screen.value);
        } catch {
            screen.value = "Error";
        }
    }
}
function allClear(){
    if(isOn){
        screen.value = "";
    }
}
function deleteLast(){
    if(isOn){
        screen.value = screen.value.slice(0, -1);
        liveResult();
    }
}
function togglePower(){
    isOn = !isOn;
    if(isOn){
        powerBtn.innerText = "ON";
        screen.value = "";
        screen.placeholder = "";
    } else {
        powerBtn.innerText = "OFF";
        screen.value = "";
        screen.placeholder = "OFF";
    }
}
document.addEventListener("keydown", function(e){
    if(!isOn) return;
    if((e.key >= "0" && e.key <= "9") || "+-*/.".includes(e.key)){
        screen.value += e.key;
        liveResult();
    }
    if(e.key === "Enter"){
        calculate();
    }
    if(e.key === "Backspace"){
        deleteLast();
    }
    if(e.key === "Escape"){
        allClear();
    }
});
function percent(){
    if(!isOn) return;

    if(screen.value === "") return;

    screen.value += "/100";
}