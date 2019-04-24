calculationMade = false;

function insertVal(num){
    if (calculationMade){
            document.getElementById("textField").value = "";
            calculationMade = false;
        }
    document.getElementById("textField").value += num;
}
function clearScreen(){
    document.getElementById("textField").value = "";
    }

function calculate(){
    try{
        calculation = document.getElementById("textField").value;
        if (!calculation){
            return 
        } else{
            calculation = calculation.replace("X","*")
            document.getElementById("textField").value = eval(calculation);
            calculationMade = true;
        }
    }catch{
        document.getElementById("textField").value = "ERROR";
        calculationMade = true;
    }
}