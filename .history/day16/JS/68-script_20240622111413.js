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
//fillTable fuctiom
const fillTable = (country)=>{
    let capitalCity =country.capital.join("-");
    let currency =Object.keys(country.currencies).join("-");
    let language =Object.keys(country.capital).join("-");
    let area = country.area;
    let mapLink = `<a href="https://maps.google.com/maps?q=${country.latlng.toString()}" target="_blank">`;

        document.querySelector("#countriesTable tr:nth-child(1) td").innerHTML
}



getCountry(533);
setOptions();