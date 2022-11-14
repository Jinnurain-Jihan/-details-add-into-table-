let entry=document.getElementById("entry");
entry.addEventListener("click", result);
let row=1;
function result(){
      let name=document.getElementById("name").value;
      let age=document.getElementById("age").value;
      let grade=document.getElementById("grade").value;

      if( name=="" || age=="" || grade==""){
            alert("please fill all the boxes");
            return;
      }
      var display=document.getElementById("display");
      var newRow=display.insertRow(row);
      var cell1=newRow.insertCell(0);
      var cell2=newRow.insertCell(1);
      var cell3=newRow.insertCell(2);
      cell1.innerHTML=name;
      cell2.innerHTML=age;
      cell3.innerHTML=grade;
      row ++;
}