import {students} from "./student.js"

const loadData =()=>{
    let html="";

    students.forEach((student)=>{
        let i=1
        html+=`<tr><td>1
        <td><td>${student.name}<td>
        <td>${student.name}<td>   <tr>`
        i++;
     
    })

    const tbody = document.querySelector("#tblStudents tbody");
    tbody.innerHTML=html;
}
loadData();