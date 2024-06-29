import {students} from "./student.js"

document
.querySelector("#tblStudents tbody")
.addEventListener("click",(e)=>{
 //tbody icinde uzerinde tiklanan her elementin click olayinin burada yakalanmasi eventPropogation sayesinde olur.


 if(!e.target.classList.contains("btn-del")) {
    deleteRow(e.target);
 }else{
    toggleRow(e.target);
 }

});



const deleteRow = (btn) => {  btn.name = e.target.closest("tr").children[1].textContent;

    const res = confirm(`${name} isimli kaydi silmek istediginize emin misiniz?`)
   
    
    if(res) {

    }
};

const toggleRow = (el) => {
    el.closest("tr").classList.
}

const loadData =()=>{
    let html="";

    students.forEach((student,index)=>{

        html+=`     <tr>
                    <td>${index+1}</td>
                    <td>${student.name}</td>
                    <td>${student.point}</td>
                    <td><button class="btn btn-danger btn-sm btn-del">🔥<button>
                    </td>
                    </tr>`;
      
     
    });

    const tbody = document.querySelector("#tblStudents tbody");
    tbody.innerHTML=html;
}
loadData();