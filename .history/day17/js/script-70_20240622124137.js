import {students} from "./student.js"

const loadData =()=>{
    let html="";

    students.forEach((student)=>{
        html+=`<tr><td>${student.name}
        <td><td>${student.name}<td>
        <td>12<td>   <tr>`
     
    })

    const tbody = document.querySelector("#tblStudents tbody");
    tbody.innerHTML=html;
}
loadData();