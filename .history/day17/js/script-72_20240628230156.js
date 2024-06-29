import {students} from "./student.js"

document
.querySelector("#tblStudents tbody")
.addEventListener("click",(e)=>{
 //tbody icinde uzerinde tiklanan her elementin click olayinin burada yakalanmasi eventPropogation sayesinde olur.


 if(!e.target.classList.contains("btn-del")) return;
 console.log(e.target);

 const name = e.target.closest("tr").children[1].textContent;
 console.log(name);

 const res = confirm(´${name} isimli kaydi silmek istediginize emin misiniz?´)
});

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