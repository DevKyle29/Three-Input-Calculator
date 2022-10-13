function calc(){
    let input1 = parseInt(document.getElementById("input1").value);
    let input2 = parseInt(document.getElementById("input2").value);
    let oper   = document.getElementById("operators").value;

    if (oper === '+'){
        document.getElementById("result").value = input1+input2;
    }
    if (oper === '-'){
        document.getElementById("result").value = input1-input2;
    }
    if (oper === '*'){
        document.getElementById("result").value = input1*input2;
    }
    if (oper === '/'){
        document.getElementById("result").value = input1/input2;
    }
}