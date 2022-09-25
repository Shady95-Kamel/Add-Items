let fInput=document.querySelector(".fInput");
let sInput=document.querySelector(".sInput");
let tInput=document.querySelector(".tInput");
let foInput=document.querySelector(".foInput");
let addBtn=document.querySelector(".add");
let table= document.querySelector(".fillData");
let filter =document.querySelector(".filter");

addBtn.addEventListener('click',(e)=>{
    e.preventDefault();
   
    let row=table.insertRow(1);
    let cell1=row.insertCell(0)
    let cell2=row.insertCell(1)
    let cell3=row.insertCell(2)
    let cell4=row.insertCell(3)
    let cell5=row.insertCell(4)

 cell1.innerHTML=fInput.value
 cell2.innerHTML=sInput.value
 cell3.innerHTML=tInput.value
 cell4.innerHTML=foInput.value

    row.setAttribute("class","itemRow");

  let deleteBtn=document.createElement("button")
  let remove = document.createTextNode("Delete")
  deleteBtn.setAttribute("class","deleteBtn")
  cell5.appendChild(deleteBtn);
  deleteBtn.appendChild(remove)

  deleteBtn.addEventListener('click',()=>{
   row.remove()
})

})

filter.addEventListener('keyup',(e)=>{
    let tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[1];
      if (td) {
      let txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter.value.toUpperCase()) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
})