import {students} from "./student.js"

document.getElementById("btnShowLowScores").addEventListener("click",()=>{

    setRowColorsForLowScores();

});

const setRowColorsForLowScores =() =>{

    const tableRows = document.querySelectorAll("#tblStudents tbody tr");

    tableRows.forEach((tr)=>{
    const score = tr.querySelector("td:last-child").textContent;
    if(score<50){tr.classList}

    });
}


const loadData =()=>{
    let html="";

    students.forEach((student,index)=>{

        html+=`     <tr>
                    <td>${index+1}</td>
                    <td>${student.name}</td>
                    <td>${student.name}</td>
                    </tr>`;
      
     
    })

    const tbody = document.querySelector("#tblStudents tbody");
    tbody.innerHTML=html;
}
loadData();