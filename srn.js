

function pracjs(srn){
    var j1=document.getElementById("add1").value;
    var j2=document.getElementById("add2").value;

    switch(srn){
        case("+");
        document.getElementById("output").innerHTML=value1 + value2;
        break;
        case("-");
        document.getElementById("output").innerHTML=value1 - value2;
        break;
        case("*");
        document.getElementById("output").innerHTML=value1 * value2;
        break;
        case("/");
        document.getElementById("output").innerHTML=value1 / value2;
        break;
        
    }
}