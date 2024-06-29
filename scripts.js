let display = document.getElementById('display');

function clearDisplay(){
    display.innerText = '0';
}

function appendNumber(number){
    if(display.innerText ==='0'){
        display.innerText = number;
    }else{
        display.innerText += number;
    }
}

function calculate(){
    try{
        display.innerText = eval(display.innerText);
    }catch{
        display.innerText = 'Error';
    }
}