import {students} from "./student.js"

document.getElementById("btnShowLowScores").addEventListener("click",()=>{



});

const setRowColorsFor


const loadData =()=>{
    let html="";

    students.forEach((student,index)=>{

        html+=`<tr><td>${index+1}<td>
                    <td>${student.name}<td>
                    <td>${student.name}<td>
                    </tr>`;
      
     
    })

    const tbody = document.querySelector("#tblStudents tbody");
    tbody.innerHTML=html;
}
loadData();