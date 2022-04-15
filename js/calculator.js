// get buttons
var equalTo=document.getElementById('equal-to');
var buttons = document.getElementsByClassName('calc-btn');
var equationDisplay = document.getElementById('equation');
var resultDisplay = document.getElementById('result');
var digit = '';
var number = 0;
var num1 = 0;
var num2 = 0;
var result = 0;
var count='';
for(var button of buttons){
    button.addEventListener('click',function(e){
        if(isNaN(parseFloat(e.target.innerText))==true&&e.target.innerText!='.'){
            count=e.target.innerText;
            num1=number;
            digit=digit+e.target.innerText;
            equationDisplay.innerText=digit;
            digit='';
        }
        else{
            
            digit=digit+e.target.innerText;
            number=parseFloat(digit);
            equationDisplay.innerText=digit;
            num2=number;
        }
    })
}
equalTo.addEventListener('click',function(){
    
    if(count=='+'){
        result=num1+num2;
        resultDisplay.innerText=Math.round(result*100)/100;
        
    }
    if(count=='-'){
        result=num1-num2;
        resultDisplay.innerText=Math.round(result*100)/100;
    }
    if(count=='x'){
        result=num1*num2;
        resultDisplay.innerText=Math.round(result*100)/100;
    }
    if(count=='/'){
        result=num1/num2;
        resultDisplay.innerText=Math.round(result*1000000)/1000000;
    }
    equationDisplay.innerText='00';
    
})
document.getElementById('ac').addEventListener('click',function(){
    equationDisplay.innerText='00';
    resultDisplay.innerText='0';
    digit='';
})


























// debugger;
// for (const button of buttons) {
//     button.addEventListener('click', function () {



//         if (isNaN(parseFloat(button.innerText)) == true && button.innerText != '=') {
//             equation.innerText=digit + button.innerText;
//             num1 = number;
//             digit = '';
//             number = 0;

//             for (const button2 of buttons) {
//                 button2.addEventListener('click',function(){
//                     if (button2.innerText == '=') {
//                         num2 = number;
//                         // break;
//                     }
    
//                     digit = digit + button2.innerText;
//                     number = parseFloat(digit);
//                     equation.innerText =button2.innerText+ digit;
//                 })

                
//             }
//             if(equation.innerText.indexOf('+')!=-1){
//                 result=num1+num2;
//                 resultDisplay.innerText=result;
//                 // break;
//             }
//             if(equation.innerText.indexOf('-')!=-1){
//                 result=num1-num2;
//                 resultDisplay.innerText=result;
//                 // break;
//             }
//             if(equation.innerText.indexOf('*')!=-1){
//                 result=num1*num2;
//                 resultDisplay.innerText=result;
//                 // break;
//             }
//             if(equation.innerText.indexOf('/')!=-1){
//                 result=num1/num2;
//                 resultDisplay.innerText=result;
//                 // break;
//             }

//             // continue;
//         }
//         if (isNaN(parseFloat(button.innerText)) == true) {
//             // if (button.innerText == '=') {
//             //     if (digit.indexOf('+') != -1) {
//             //         result = num1 + num2;
//             //         resultDisplay = result;
//             //     }
//             //     if (digit.indexOf('-') != -1) {
//             //         result = num1 - num2;
//             //         resultDisplay = result;
//             //     }
//             //     if (digit.indexOf('*') != -1) {
//             //         result = num1 * num2;
//             //         resultDisplay = result;
//             //     }
//             //     if (digit.indexOf('/') != -1) {
//             //         result = num1 / num2;
//             //         resultDisplay = result;
//             //     }
//             // }
//             console.log('hello');
//         }
//         else {
//             digit = digit + button.innerText;
//             number = parseFloat(digit);
//             equation.innerText = digit;
//         }

//     })


// }
