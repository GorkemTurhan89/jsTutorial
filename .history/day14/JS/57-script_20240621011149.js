import {countries} from "../data/countries.js";
console.log(countries[227].name.common);

const setOptions = () =>{

    let options = "";
    for(let country of co
        untries){
    /*     console.log(country.name.common) */
        options += `<option class="text-success"> ${country.name.common} </option>`;
    }
    document.getElementById("contriesSelect").innerHtml = options;
}
setOptions();