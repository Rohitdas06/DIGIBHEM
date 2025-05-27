const display = document.getElementById("display");

let Expression = "";

function addToDisplay(value){
    if(value === "X"){
        Expression += "*";
    }
    else{
        Expression += value;
    }
    display.value = Expression;
}

function clearDisplay(){
    Expression = "";
    display.value = "";
}

function clearOneItem(){
    Expression = Expression.slice(0, -1);
    display.value = Expression;
}

function calculate(){
    try{
        let result = new Function("return " + Expression)();
        display.value = result;
        Expression = result.toString();
    }
    catch(error){
        display.value = "error";
        Expression = "";
    }
}