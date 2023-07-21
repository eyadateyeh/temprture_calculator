import { celsiusInput, fahrenhetInput,kelvinInput } from "./functions.js"

$(".Celsiusbtn").click(function(){
  celsiusInput(parseFloat(document.getElementsByClassName('Celsius')[0].value))
});

$(".Fahrenheitbtn").click(function(){
  fahrenhetInput(parseFloat(document.getElementsByClassName('Fahrenheit')[0].value))
});

$(".Kelvinbtn").click(function(){
  kelvinInput(parseFloat(document.getElementsByClassName('Kelvin')[0].value))
});


// export function calculateTemprture(change){
//     if(change == 1){
//       celsiusInput(parseFloat(document.getElementsByClassName('Celsius')[0].value))
//     }

//     if (change==2){
//        fahrenhetInput(parseFloat(document.getElementsByClassName('Fahrenheit')[0].value))
//     }

//     if (change==3){
//         kelvinInput(parseFloat(document.getElementsByClassName('Kelvin')[0].value))
//     }
// }