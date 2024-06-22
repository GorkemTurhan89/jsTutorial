import {countries} from "../../day14/data/countries.js";

console.log(countries[227].name.common); // Turkey

const setOptions = ()=>{

    let options = "";

    for(let country of countries){
        // console.log(country.name.common);
        options += `<option class="text-success">${country.name.common}</option>`;

    }

    document.getElementById("contriesSelect").innerHTML = options;

}

const getCountry = (code)=>{
   let filteredCountry = countries.filter((country)=>country.ccn3==code);
    console.log(Object.keys(filteredCountry[0].currencies).join("-")); 
    return filteredCountry[0];
}

const fillTable = (country)=>{
    let capitalCity =country.capital.
}



getCountry(533);
setOptions();