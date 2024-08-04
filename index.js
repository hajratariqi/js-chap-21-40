function add(a,b){
    return a+b
}
function subst(a,b){
    return a-b
}
function divide(a,b){
    return a*b
}
function multiplication(a,b){
    return a*b
}
function calculator(){
    var num1 = +prompt("Enter num one", 2)
    var num2 = +prompt("Enter num two",2)
    var opr = prompt("Enter a oparetor", '+')
    var result = ""
    switch (opr) {
        case opr = '+':
            result += add(num1,num2)
            break;

            case opr = '-':
                result += subst(num1,num2)
                break;

                case opr = '/':
                    result += divide(num1,num2)
                    break;

                    case opr = '*':
                    result += multiplication(num1,num2)
                    break;

        default:
            document.write("Please Enter a valid value!")
            break;
    }
   document.write("The result is ",result);
}
calculator()

var myArr = ["foo", "bar", "baz"];
myArr.length = 0;
myArr.push("bin");
console.log(myArr);

var date = new Date();
console.log(date.getMinutes());

// question one
var fName = prompt("Enter a First Name")
var lName = prompt("Enter a last Name")
var fullName = `${fName} ${lName}`
document.write(fullName)

// question 2
var favPhone = prompt("Enter your favorite Phone")
document.write(`My favorite Phone is ${favPhone} length of ${favPhone.length} <br>`);

// question 3
var find = "pakistan";
document.write(`${find[7]}<br>`);

// question 4
var word = "hello world";
document.write(word[9] + "<br>");

// question 5
var fName = prompt("Enter a First Name")
var lName = prompt("Enter a last Name")
var fullName = fName.concat(lName)
document.write(fullName)

// question 6
var city = "hyderabad";
document.write(city.replace("hydera", "islama"), "<br>");

// question 7
var msg =
  "ali and semi are best friends, they play cricket and football together";
document.write(msg.replace(/and/g, "&"), "<br>");

// // question 8
var capital = "peanuts";
document.write(capital.toUpperCase(), "<br>");

// var question 9
var fLetter = "javascript";
document.write(fLetter[0].toUpperCase() + fLetter.substr(1), "<br>");

// question 11
var num = 35.36;
var string = num.toString();
var result = string.replace('.', '')
document.write(result, "<br>");

// question 12
var username = prompt("Enter username", "hajr@a.")
for (var i = 0; i < username.length; i++) {
   if(username[i] == String.fromCodePoint(64) || username[i] == String.fromCodePoint(46) || username[i] == String.fromCodePoint(33) || username[i] == String.fromCodePoint(44))
console.log('please enter valid name that can not contain any symbol');
   else{
      console.log('hello');
   }
}


//  question 14
var uni = "university of karachi";
console.log(uni.split(' '));
for(var i = 0; i < uni.length; i++){
   document.write(`${uni[i]} <br>`)
}

var inp = "pakistan"
var word = ''
for (var i = 0; i < inp.length; i++) {
   document.write('<br>', inp[i])
   word = inp[i]
   
}

console.log(word);

// QUESTION 15
var str = "The quick brown fox jumps over the lazy dog the"
var find = "the"
var result = ''

for (var i = 0; i < str.length; i++) {
   result += str.slice(i, 4 )
   console.log(result);
}

// question 13
var items = ['cake', 'burger', 'pizza', 'cookies']
var find = prompt("search", 'cakE')
var result 
for(var i =0 ; i < items.length; i++){
    result = find.toLowerCase()
   if(result === items[i]){
    document.write(`${items[i]} available <br>`)
   }
}

// question 14
var pass = prompt("enter a password")
for(var i = 0; i < pass.length; i++){
    if(!isNaN(pass[i] || pass < 6)){
        document.write("Please enter a alphabet", "<br>")
        break
    }
}
if(!isNaN(+pass[0])){
    document.write("password can not be begin with a number", '<br>')
}
else{
    document.write("hnjmk")
}