function clearScreen() {
    document.getElementById("result").value = "";
}
function display(value) {
    if(value === '%')
    {
        var currval = parseFloat(document.getElementById("result").value);
        var result = currval / 100;
        document.getElementById("result").value = result;
    }
    else{
        document.getElementById("result").value += value;
    }
    
}
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

function backspace() {
    var currentInput = document.getElementById("result").value;
    document.getElementById("result").value = currentInput.slice(0, -1);
}