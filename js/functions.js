//calculate from Celsius to Fahrenheit and kelvinn 
function celsiusInput(celsiusValue){
    let fahrenheitValue = parseFloat((celsiusValue*9/5)+32)
    let kelvinValue = parseFloat(celsiusValue+273.15)
    document.getElementsByClassName('Fahrenheit')[0].value = fahrenheitValue
    document.getElementsByClassName('Kelvin')[0].value = kelvinValue
}

//calculate from Fahrenheit to Celsius and kelvin 
function fahrenhetInput(fahrenheitValue){
    let celsiusValue = parseFloat((fahrenheitValue-32)*5/9)
    let kelvinValue = parseFloat(celsiusValue+273.15)
    document.getElementsByClassName('Celsius')[0].value = celsiusValue
    document.getElementsByClassName('Kelvin')[0].value = kelvinValue
}

//calculate from kelvin to Celsius and Fahrenheit 
function kelvinInput(kelvinValue){
    let celsiusValue = parseFloat(kelvinValue-273.15)
    let fahrenheitValue = parseFloat(((kelvinValue-273.15)*9/5)+32)
    document.getElementsByClassName('Celsius')[0].value = celsiusValue
    document.getElementsByClassName('Fahrenheit')[0].value = fahrenheitValue
}

export {kelvinInput,fahrenhetInput,celsiusInput} 