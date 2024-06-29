import {students} from "./student.js"

const loadData =()=>{
    let html="";

    students.forEach((student,index)=>{

        html+=`<tr><td>${index}
        <td><td>${student.name}<td>
        <td>${student.name}<td>   <tr>`;
      
     
    })

    const tbody = document.querySelector("#tblStudents tbody");
    tbody.innerHTML=html;
}
loadData();