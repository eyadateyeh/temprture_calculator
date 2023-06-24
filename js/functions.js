function calculateTemprture(change){
    if(change == 1){
      celsiusInput(parseFloat(document.getElementsByClassName('Celsius')[0].value))
    }

    if (change==2){
       fahrenhetInput(parseFloat(document.getElementsByClassName('Fahrenheit')[0].value))
    }

    if (change==3){
    kelvinInput(parseFloat(document.getElementsByClassName('Kelvin')[0].value))
    }
}

//calculate from Celsius to Fahrenheit and kelvin 
function celsiusInput(celsiusValue){
    fahrenheitValue = parseFloat((celsiusValue*9/5)+32)
    kelvinValue = parseFloat(celsiusValue+273.15)
    document.getElementsByClassName('Fahrenheit')[0].value = fahrenheitValue
    document.getElementsByClassName('Kelvin')[0].value = kelvinValue
}

//calculate from Fahrenheit to Celsius and kelvin 
function fahrenhetInput(fahrenheitValue){
    celsiusValue = parseFloat((fahrenheitValue-32)*5/9)
    kelvinValue = parseFloat(celsiusValue+273.15)
    document.getElementsByClassName('Celsius')[0].value = celsiusValue
    document.getElementsByClassName('Kelvin')[0].value = kelvinValue
}

//calculate from kelvin to Celsius and Fahrenheit 
function kelvinInput(kelvinValue){
    celsiusValue = parseFloat(kelvinValue-273.15)
    fahrenheitValue = parseFloat(((kelvinValue-273.15)*9/5)+32)
    document.getElementsByClassName('Celsius')[0].value = celsiusValue
    document.getElementsByClassName('Fahrenheit')[0].value = fahrenheitValue
}