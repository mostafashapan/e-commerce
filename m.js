var form = document.forms["myForm"];
var table = document.getElementById("myTable");
var fName = document.forms["myForm"]["fullName"];
var sal = document.forms["myForm"]["salary"];
var city = document.forms["myForm"]["country"];
var FamName = document.forms["myForm"]["FamilyName"];
var but = document.forms["myForm"]["myButton"];
var id = 0;

but.addEventListener("click", validateForm);
//but.addEventListener("submit", validateForm);


function validateForm(){
    var x = fName.value;
    if (x === "" || x.length < 3){
        alert("Name is required must be more than 3 characters");
        return false;
    }
    var y = sal.value;
    if(y === "" || y <= 1000){
        alert("salary is required and must be more than 1000");
        return false;   
    } 
    
    id++;
    var rowCount = table.rows.length;
    var newRow = table.insertRow(rowCount);
    
    var newCell1 = newRow.insertCell(0);
    var newtext1 = document.createTextNode(id);
   
    newCell1.appendChild(newtext1);
    
    var newCell2 = newRow.insertCell(1);
    var newText2 = document.createTextNode(fName.value);
 
    newCell2.appendChild(newText2);
    
    var newCell3 = newRow.insertCell(2);
    var newText3  = document.createTextNode(sal.value);
    
    newCell3.appendChild(newText3);
    
    var newCell4 = newRow.insertCell(3);
    var newText4  = document.createTextNode(city.value);
   
    newCell4.appendChild(newText4);
    
    var newCell5 = newRow.insertCell(4);
    var newText5  = document.createTextNode(FamName.value);
    
    newCell5.appendChild(newText5);
    

    var newCell6 = newRow.insertCell(5);
    
    var aDelete = document.createElement('a');
    aDelete.setAttribute('href', '#');
    aDelete.addEventListener("click",function(e){
        e.preventDefault();
        removeRow(this);  
    });
    var D = document.createTextNode('Delete');
    aDelete.appendChild(D);
    newCell6.appendChild(aDelete);
    
    
    var br = document.createElement('br');
    newCell6.appendChild(br);


    var aEdit = document.createElement('A');
    aEdit.setAttribute('href', '#');
    aEdit.addEventListener("click",function(e){
        e.preventDefault();
        editRow(this);   
    });
    var t = document.createTextNode('Edit');
    aEdit.appendChild(t);
    newCell6.appendChild(aEdit);
    
    var br = document.createElement('br');
    newCell6.appendChild(br);
    
    var aUpdate = document.createElement('A');
    aUpdate.setAttribute('href', '#');
    aUpdate.addEventListener("click",function(e){
        e.preventDefault();
        editRow(this);
        
    });
    var u = document.createTextNode('Update');
    aUpdate.appendChild(u);
    newCell6.appendChild(aUpdate);

    table.appendChild(newRow);
    }
    
    
function removeRow(r) {
            var i = r.parentNode.parentNode.rowIndex;
            console.log(i);
            document.getElementById("myTable").deleteRow(i);
        }


function editRow(s){
    var w = s.parentNode.parentNode.rowIndex;
    console.log(w);
    

	
    var fname = document.getElementById('myTable').rows[w].cells[1];
    console.log(fname);
    var salary = document.getElementById('myTable').rows[w].cells[2];
    console.log(salary);
    var cityEgypt = document.getElementById('myTable').rows[w].cells[3];
    console.log(cityEgypt);
    var famName = document.getElementById('myTable').rows[w].cells[4];
    console.log(famName);
    
	
   var name_data = fname.innerHTML;
    var salary_data = salary.innerHTML;
    var city_data = cityEgypt.innerHTML;
    var famName_data = famName.innerHTML;
	
    fname.innerHTML="<input type='text' id='name_text' value='"+name_data+"'>";
    salary.innerHTML="<input type='text' id='salary_text' value='"+salary_data+"'>";
    cityEgypt.innerHTML="<input type='text' id='city_text' value='"+city_data+"'>";
    famName.innerHTML = "<input type='text id='famName_text' value='"+famName_data+"'>";
    
        
    var fname_val=document.getElementById("name_text").value;
    var salary_val=document.getElementById("salary_text").value;
    var city_val=document.getElementById("city_text").value;
    var famName_val=document.getElementById("famName_text").value;
        
    table.rows[w].cells["1"].innerHTML=fname_val;
    table.rows[w].cells["2"].innerHTML.innerHTML=salary_val;
    table.rows[w].cells["3"].innerHTML.innerHTML=city_val;
    table.rows[w].cells["4"].innerHTML.innerHTML=famName_val;
}