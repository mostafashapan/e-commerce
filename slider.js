var lef=document.getElementsByClassName("left")[0]
//lef.addEventListener("click",left);
var righ=document.getElementsByClassName("right")[0]
righ.addEventListener("click",nextn )
lef.addEventListener("click",nextl)
var picture=document.getElementsByClassName("picture")[0]
var wor=document.getElementsByClassName("work")


var arrimg=["cell3.jpg","cell5.jpg","apple1.jpg"];
var arrsrc=["file:///C:/Users/mosta/Desktop/PYRANOVA/project/cell3.jpg","file:///C:/Users/mosta/Desktop/PYRANOVA/project/cell5.jpg","file:///C:/Users/mosta/Desktop/PYRANOVA/project/apple1.jpg"]

//picture.src="cell3.jpg"



var interval= setInterval(left, 1000)

function left(){
    
    
    

    if (picture.src==="file:///C:/Users/mosta/Desktop/PYRANOVA/project/cell3.jpg"){

        picture.src=arrimg[1] 
    }
    else if(picture.src==="file:///C:/Users/mosta/Desktop/PYRANOVA/project/apple1.jpg"){
  
        picture.src=arrimg[0]}
else if(picture.src==="file:///C:/Users/mosta/Desktop/PYRANOVA/project/cell5.jpg"){

    picture.src=arrimg[2]
   

}
twits()
}
function nextn() {
    

    
    
      if(picture.src===arrsrc[2]){
        
      
        picture.src=arrimg[0];
        
  
  
      }
     else if(picture.src===arrsrc[1]){
        
      
        picture.src=arrimg[2];
        
  
      }
     else  if(picture.src===arrsrc[0]){
      
    
        picture.src=arrimg[1];
      
  
      }
    
twits()



    
    
    
}
function nextl() {
    
    
    if(picture.src===arrsrc[2]){
      
    
      picture.src=arrimg[1];
      

    }
   else if(picture.src===arrsrc[1]){
      
    
      picture.src=arrimg[0];


    }
   else  if(picture.src===arrsrc[0]){
    
  
      picture.src=arrimg[2];
    



    }
  




  twits()
  
  
}




    function twits(){
   var inshape="ID3_Iconsic_twitter_in.png";
   var outshape="ID3_Iconsic_twitter_ct.png";

    var wor=document.getElementsByClassName("work")
for (let index = 0; index < 3; index++) {
    
    wor[index].src=outshape;
}
    
    

    
       if(picture.src===arrsrc[2]){
          
        
         wor[2].src=inshape; 
        
        }
        else if(picture.src===arrsrc[1]){
          
        
          wor[1].src=inshape;
          
    
    
        }
        else  if(picture.src===arrsrc[0]){
        
      
        wor[0].src=inshape;
    
    
    
    
        }}





