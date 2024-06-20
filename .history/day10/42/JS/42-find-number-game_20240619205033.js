let numberInput = document.querySelector("#num");
let guessButton = document.querySelector(".btn-guess");
let startButton = document.querySelector(".btn-start");
let resultLabel = document.querySelector("#result");

    const createRandomNumber1 = (min,max) => Math.floor(Math.random()*(max-min+1))+min;
    console.log(createRandomNumber1(1,100));
    let randomNumber1 ;

const startGame = () =>{
     randomNumber1 = createRandomNumber1(1,100);
    startButton.style.display = "none";
    numberInput.style.display= "inline";
    guessButton.style.display="inline";

}

const guessNumber = () => {
    let num = Number(numberInput.value);

    if(num>=1 && num <= 100 && Number.isInteger(num)){
        if(num<randomNumber1) {resultLabel.innerHTML ="Kucuk sayi girdiniz."; 

        }
        else if(num>randomNumber1) {resultLabel.innerHTML="Buyuk sayi girdiniz.";

        }
        else{resultLabel.innerHTML ="Tebrikler dogru tahmin";


            startButton.style.display="inline";
            numberInput.style.display="none";
            guessButton.style.display="none";



        }
        numberInput.value= "";
        numberInput.focus();
    }
    else{
        resultLabel.innerHTML =" Lutfen 1'den 100'e kadar bir sayi giriniz"
    }
    
}