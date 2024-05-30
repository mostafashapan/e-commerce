
        var uploadimage = document.getElementById("uploadimage");
        var newproductprice = document.getElementById("newproductprice");
        var newproductname = document.getElementById("newproductname");
        var all = document.getElementsByClassName("all")[0];
        var addnewproduct = document.getElementById("addnewproduct");

        
        
        
        var uploadimg=document.getElementById("uploadimage")
                var appending=document.getElementById("appending")
                var nam=document.getElementById("nam")
                var pric=document.getElementById("pric")
                addnewproduct.addEventListener("click",adddiv)
                
                function adddiv(){
                  
                    appending.children[0].src=uploadimage.value.slice(12)
                    appending.children[2].innerHTML=newproductname.value
                    appending.children[4].innerHTML=newproductprice.value
                

                 

                    all.insertAdjacentHTML("beforeend",appending.innerHTML)

                   
                    
                    
                
                    
                    
                    
                    
                    
                    
                    }