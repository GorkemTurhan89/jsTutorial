import {students} from "./student.js"


const loadData =()=>{
    let html="";

    students.forEach((student,index)=>{

        html+=`     <tr>
                    <td>${index+1}</td>
                    <td>${student.name}</td>
                    <td>${student.point}</td>
                    <td><button class="btn btn-danger"</td>
                    </tr>`;
      
     
    })

    const tbody = document.querySelector("#tblStudents tbody");
    tbody.innerHTML=html;
}
loadData();