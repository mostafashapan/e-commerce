


    

var numofbuy=document.getElementById("numofbuy")
var addbutton1=document.getElementById("add1")
var addbutton2=document.getElementById("add2")
var addbutton3=document.getElementById("add3")
var addbutton4=document.getElementById("add4")
var addbutton5=document.getElementById("add5")
var addbutton6=document.getElementById("add6")
addbutton1.addEventListener("click",countcart1)
addbutton2.addEventListener("click",countcart1)
addbutton3.addEventListener("click",countcart1)
addbutton4.addEventListener("click",countcart1)
addbutton5.addEventListener("click",countcart1)
addbutton6.addEventListener("click",countcart1)
function countcart1(){


numofbuy.value++;

totalprice.value=
750*numofbuy.value;


}
var totalprice=document.getElementById("totalprice");
function total(){

750*numofbuy.value


}