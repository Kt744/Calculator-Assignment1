function calculate() {
var x=parseInt(document.getElementById('num1').value);
var y=parseInt(document.getElementById('num2').value);
var z=document.getElementById('operation').value
if(z== "Add") {
    document.getElementById('opt').innerHTML=x+y;
}
else if(z== "Sub") {
    document.getElementById('opt').innerHTML=x-y;
}
else if(z== "Mul") {
    document.getElementById('opt').innerHTML=x*y;
}
else if(z=="Div") {
    document.getElementById('opt').innerHTML=x/y;
}
}
document.getElementById('btn').onclick=calculate;

