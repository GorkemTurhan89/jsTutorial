import {countries} from "../../day14/data/countries.js";

console.log(countries[227].name.common); // Turkey

const setOptions = ()=>{

     let options = "";

    for(let country of countries){
        // console.log(country.name.common);
        options += `<option value="${country.ccn3}">${country.name.common}</option>`;

    }

    document.getElementById("countriesSelect").innerHTML = options;

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
    let aream = country.area;
    let mapLink = `<a href="https://maps.google.com/maps?q=${country.latlng.toString()}" 
    target="_blank">Go To Map<a/>`;
    

        document.querySelector("#countriesTable tr:nth-child(1) td").innerHTML = capitalCity;
        document.querySelector("#countriesTable tr:nth-child(2) td").innerHTML = currency;
        document.querySelector("#countriesTable tr:nth-child(3) td").innerHTML = language;
        document.querySelector("#countriesTable tr:nth-child(4) td").innerHTML = aream;
        document.querySelector("#countriesTable tr:nth-child(5) td").innerHTML = mapLink
}


//fillTable(getCountry(533));
document.querySelector("#countriesSelect").onchange =(event) =>{
    let countryCode = event.target.value;
    let country = getCountry(countryCode);
    fillTable(country);
}
getCountry(533);
setOptions();