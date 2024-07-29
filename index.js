// function add(a,b){
//     return a+b 
// }
// function subst(a,b){
//     return a-b 
// }
// function divide(a,b){
//     return a*b 
// }
// function multiplication(a,b){
//     return a*b 
// }
// function calculator(){
//     var num1 = +prompt("Enter num one", 2)
//     var num2 = +prompt("Enter num two",2)
//     var opr = prompt("Enter a oparetor", '+')
//     var result = ""
//     switch (opr) {
//         case opr = '+':
//             result += add(num1,num2)
//             break;

//             case opr = '-':
//                 result += subst(num1,num2)
//                 break;

//                 case opr = '/':
//                     result += divide(num1,num2)
//                     break;

//                     case opr = '*':
//                     result += multiplication(num1,num2)
//                     break;
    
//         default:
//             document.write("Please Enter a valid value!")
//             break;
//     }
//    document.write("The result is ",result);
// }
// calculator()


var myArr = ["foo", "bar", "baz"];
myArr.length = 0;
myArr.push("bin");
console.log(myArr);

var date = new Date()
console.log(date.getMinutes());