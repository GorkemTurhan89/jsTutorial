import {countries} from "../data/countries.js";
console.log(countries[227].name.common);

const setOptions = () =>{
    let options = "";
    for(let country of countries){
        console.log(country.name.common)
        options += `<option>`
    }

}
setOptions();