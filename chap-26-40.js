// question 1
var num = '3.45212'
document.write(`rount of value${Math.round(num)} <br>`)
document.write(`floor of value ${Math.floor(num)} <br>`)
document.write(`ceil of value ${Math.ceil(num)} <br>`)


// question 2
var negivetiveNum = '-4.654'
document.write(`absolute value of ${Math.abs(negivetiveNum)} <br>`)

// question 3
var dics = Math.floor(Math.random()*6)
document.write(dics, "<br>")

// question 4
var game = Math.floor(Math.random()*2)
document.write(`${game} random coin value is ${game == 0 ? 'Heads' : 'tails'}<br>`)

// var queston 5
var weight = prompt('Enter your weight', '50')
var result = weight.replace('kg', '')

document.write(`The weight of user is ${result} kilograms <br>`)