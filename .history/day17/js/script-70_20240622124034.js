import {students} from "./student.js"

const loadData =()=>{
    let html="";

    student.forEach((student)=>{
        html+=`<tr><td>Ali
        <td><td> 1<td>
        <td>12<td>   <tr>`
     
    })

    const tbody = document.querySelector("#tblStudents tbody");
    tbody.innerHTML=html;
}
loadData();