 arrim=["computer1.jpg","computer2.jpg","computer3.jpg","computer4.jpg","computer5.jpg","computer6.jpg"];
 arrwat=["watch1.jpg","watch5.jpg","watch3.jpg","watch4.jpg","watch5.jpg","watch6.jpg"]
apple=["apple1.jpg","apple2.jpg","apple3.jpg","apple4.jpg","apple5.jpg","apple6.jpg"]

 laptops=["lap1.jpg","lap2.jpg","lap3.jpg","lap4.jpg","lap5.jpg","lap6.jpg"]
 
 component=["comp1.jpg", "comp2.jpg","comp3.jpg","comp4.jpg","comp5.jpg","comp6.jpg",]
 accesories=["acc1.jpg","acc2.jpg","acc3.jpg","acc4.jpg","acc5.jpg","acc6.jpg",]

 cellphones=["cell1.jpg","cell2.jpg","cell3.jpg","cell4.jpg","cell5.jpg","cell6.jpg"]
 televisions=["tv1.jpg","tv2.jpg","tv3.jpg","tv4.jpg","tv5.jpg","tv6.jpg"]
 arrimname=["computer1","computer2","computer3","computer4","computer5","computer6"];
 arrwatchname=["watch1","watch5","watch3","watch4","watch5","watch6"]
applename=["apple1","apple2","apple3","apple4","apple5","apple6"]

 laptopsname=["lap1","lap2","lap3","lap4","lap5","lap6"]
 
 componentname=["comp1", "comp2","comp3","comp4","comp5","comp6",]
 accesoriesname=["acc1","acc2","acc3","acc4","acc5","acc6",]

 cellphonesname=["cell1","cell2","cell3","cell4","cell5","cell6"]
 televisionsname=["tv1","tv2","tv3","tv4","tv5","tv6"]
 var dives=document.getElementsByClassName("changephoto");
 var wor=document.getElementsByClassName("work")

 var computer=document.getElementById('comp');
	   computer.addEventListener("click", showproducts);
       var watches=document.getElementById('wat');
       watches.addEventListener("click", showwat);
       var apples=document.getElementById('app');
       apples.addEventListener("click", showapp);
       var lap=document.getElementById('lap');
       lap.addEventListener("click", showlap);
       var components=document.getElementById('compn');
	   components.addEventListener("click", showcomp);
       var acceries=document.getElementById('acc');
       acceries.addEventListener("click", showacc);
       var cellphone=document.getElementById('cellp');
       cellphone.addEventListener("click", showcell);
       var telvision=document.getElementById('telve');
       telvision.addEventListener("click", showtel);
 
 
 var dives=document.getElementsByClassName("changephoto");
 var nameofproduct=document.getElementsByClassName("nameofproduct");
 
 //for (var i = 0; i < dives.length; i++){
     function showproducts() {
         
    

    for (var index =0; index <arrwat.length;index++) {

        all.children[index].className=arrimname[index]
        nameofproduct[index].innerHTML=arrimname[index]
dives[index].src=arrim[index]
var newnamediv= document.getElementsByClassName(arrimname[index])[0]

        newnamediv.style.display="inline-grid"
//nameofproduct[index]=arrim[index].slice(-4)
                 // dives[index].=arrimg[index];




 }
}

function showwat() {
   
    

    for (var index =0; index < arrwat.length;index++) {
        all.children[index].className=arrwatchname[index]
        nameofproduct[index].innerHTML=arrwatchname[index]
           
    dives[index].src=arrwat[index]
    var newnamediv= document.getElementsByClassName(arrwatchname[index])[0]

        newnamediv.style.display="inline-grid"

                 // dives[index].=arrimg[index];




 }
}
function showapp() {
         
    

    for (var index =0; index < apple.length;index++) {
        all.children[index].className=applename[index]
        nameofproduct[index].innerHTML=applename[index]
        
    dives[index].src=apple[index]
    var newnamediv= document.getElementsByClassName(applename[index])[0]

        newnamediv.style.display="inline-grid"

                 // dives[index].=arrimg[index];




 }
}
function showlap() {
         
    

    for (var index =0; index < laptops.length;index++) {
        all.children[index].className=laptopsname[index]
        nameofproduct[index].innerHTML=laptopsname[index] 
    dives[index].src=laptops[index]
    var newnamediv= document.getElementsByClassName(laptopsname[index])[0]

        newnamediv.style.display="inline-grid"

                 // dives[index].=arrimg[index];




 }
}
function showcomp() {
         
    

    for (var index =0; index < component.length;index++) {
        all.children[index].className=componentname[index]
        nameofproduct[index].innerHTML=componentname[index]
        
    dives[index].src=component[index]
    var newnamediv= document.getElementsByClassName(componentname[index])[0]

        newnamediv.style.display="inline-grid"

                 // dives[index].=arrimg[index];




 }
}
function showacc() {
         
    

    for (var index =0; index < accesories.length;index++) {
        all.children[index].className=accesoriesname[index]
        nameofproduct[index].innerHTML=accesoriesname[index]
           
    dives[index].src=accesories[index]
    var newnamediv= document.getElementsByClassName(accesoriesname[index])[0]

        newnamediv.style.display="inline-grid"

                 // dives[index].=arrimg[index];




 }
}
function showcell() {
         
    

    for (var index =0; index <cellphones.length;index++) {
        all.children[index].className=cellphonesname[index]
        nameofproduct[index].innerHTML=cellphonesname[index]
        var newnamediv= document.getElementsByClassName(cellphonesname[index])[0]

        newnamediv.style.display="inline-grid" 
           
    dives[index].src=cellphones[index]

                 // dives[index].=arrimg[index];




 }
}
function showtel() {
         
  

    for (var index =0; index <televisions.length;index++) {
        all.children[index].className=televisionsname[index]
       var newnamediv= document.getElementsByClassName(televisionsname[index])[0]

        newnamediv.style.display="inline-grid"
        nameofproduct[index].innerHTML=televisionsname[index]
           
    dives[index].src=televisions[index]

                 // dives[index].=arrimg[index];




 }
}


/*<form></my><div class="buttons">
<input type="search"  id="searchinput">
<button type="submit" id="searchbutton">search</button>
<button type="reset" id="searchfield">reset</button>
</form>*/
var all=document.getElementsByClassName ("all")[0]
var nameofproduct=document.getElementsByClassName ("nameofproduct")
 var searchfield=document.getElementById("searchinput")
 var searchbutt=document.getElementById("searchbutton")
 var all=document.getElementsByClassName ("all")[0]
 var products= document.getElementsByClassName ("products")[0]


 //searchfield.addEventListener("focus", searchelement);
 //searchfield.addEventListener("blur", finddiv);
 searchbutt.addEventListener('click',searchelement)

/*function finddiv(){
    for (let index = 0; index < array.length; index++) {
        var searcheddiv= document.getElementsByClassName(searchfield.value)[0]
        
    }

   var searcheddiv= document.getElementsByClassName(searchfield.value)[0]
   searcheddiv.style.display="inline-grid" 



}*/


  function   searchelement(){


  
for (let index = 0; index <6; index++) {
    for (var ina = 0; ina <6; ina++) {
   if (arrimname[index]===searchfield.value){
       showcomp()
       break;

   }
 else  if (arrwatchname[index]===searchfield.value){
     showwat()
     break;
}
else if (applename[index]===searchfield.value){

    showapp()
    break;
}
 else if (laptopsname[index]===searchfield.value){
showlap()
break;
}
else if (componentname[index]===searchfield.value){
showcomp()
break;
}
else if (accesoriesname[index]===searchfield.value){
showacc()
break;
}
else if (cellphonesname[index]===searchfield.value){
showcell()
break;
}
else if (searchfield.value===televisionsname[index]){
showtel()
break;
    
}
else  if (arrwatchname[index].charAt(index)===searchfield.value){
    showwat()
    break;
}
else if (applename[index].charAt(index)===searchfield.value){

   showapp()
   break;
}
else if (laptopsname[index].charAt(index)===searchfield.value){
showlap()
break;
}
else if (componentname[index].charAt(index)===searchfield.value){
showcomp()
break;
}
else if (accesoriesname[index].charAt(index)===searchfield.value){
showacc()
break;
}
else if (cellphonesname[index].charAt(index)===searchfield.value){
showcell()
break;
}

else  if (arrwatchname[index].charAt(index)===searchfield.value){
    showwat()
    break;
}
else if (applename[index].substr(index,ina)===searchfield.value){

   showapp()
   break;
}
else if (laptopsname[index].substr(index,ina)===searchfield.value){
showlap()
break;
}
else if (componentname[index].substr(index,ina)===searchfield.value){
showcomp()
break;
}
else if (accesoriesname[index].substr(index,ina)===searchfield.value){
showacc()
break;
}
else if (cellphonesname[index].substr(index,ina)===searchfield.value){
showcell()
break;
}


else if(televisionsname[index].substr(index,ina)===searchfield.value){

showtel()
break;


}





}



}}
/*arrwatchname[index]
  applename[index]
  laptopsname[index]
  componentname[index]
  accesoriesname[index]
  cellphonesname[index]
televisionsname[index]*/
