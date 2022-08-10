let dispValue=0
let savedValue=[];
let savedOperator = [];
let clicked = false
let display = document.querySelector(".textDisp");
let messages = document.querySelector('.Messages')
let footerIcon = document.querySelector('footer img');

function add(num1,num2){
 console.log(Number(num1)+Number(num2))
 let x = ((Number(num1)+Number(num2)).toPrecision(12))
 
 if(x.includes('e')){
       
    x = Number(x).toPrecision(7)
    console.log(x,'hi')
    display.innerHTML = (x)
    savedValue=[Number(num1)+Number(num2)]
    return
}


 
 display.innerHTML = Number(x)
 savedValue=[Number(num1)+Number(num2)]
 return

 

}
function multiply(num1,num2){
  console.log(Number(num1)*Number(num2))
  let x = ((Number(num1)*Number(num2)).toPrecision(12))
  if(x.includes('e')){
       
    x = Number(x).toPrecision(7)
    console.log(x,'hi')
    display.innerHTML =(x)
 savedValue=[Number(num1)*Number(num2)]
 return
}
 display.innerHTML = Number(x)
 savedValue=[Number(num1)*Number(num2)]
 return
   
    

}
function subtract(num1,num2){
 console.log(Number(num1)-Number(num2))
 let x = ((Number(num1)-Number(num2)).toPrecision(12))
 if(x.includes('e')){
       
    x = Number(x).toPrecision(7)
    console.log(x,'hi')
    display.innerHTML = (x)
    savedValue=[Number(num1)-Number(num2)]
    return
    
}
 display.innerHTML = Number(x)
 savedValue=[Number(num1)-Number(num2)]
 return

}
function divide(num1,num2){
    if(num2==0){
        messages.style = 'color:green; font-size:450%;  -webkit-text-stroke: 5px black;font-family:"Lucida Sans";'
        
        messages.innerHTML = 'LMA0 nice try bud'
        
        console.log('LMAO')
        dispValue = 0;
        display.innerHTML = 0;
        savedValue=[];
        savedOperator = [];

        return
    }
    console.log(Number(num1)/Number(num2))
    let x = ((Number(num1)/Number(num2)).toPrecision(12))
    if(x.includes('e')){
       
        x = Number(x).toPrecision(7)
        console.log(x,'hi')
        display.innerHTML = (x)
        savedValue=[Number(num1)/Number(num2)]
        return
    }

    display.innerHTML = Number(x)
    savedValue=[Number(num1)/Number(num2)]
    return

}

function decimal(num){
    if(num.length>=12){
        messages.innerHTML='Character Limit Has Been Reached'
    }
    String(num)
    for(let i = 0;i<num.length;i++){
        if (num[i] === '.'){
            return
        }
    }
    let newNum = (num)+'.';
    console.log(newNum)
    dispValue = newNum
    display.innerHTML = dispValue


}
function percent(num){
     displayCharLimit()
     dispValue = String((Number(num)/100).toPrecision(12))
     if(dispValue.includes('e')){
       
        dispValue = Number(dispValue).toPrecision(7)
        
        display.innerHTML = (dispValue)
        console.log('hi')
        return
    }
     display.innerHTML = (Number(dispValue.substring(0,12)))
    
     console.log(dispValue.substring(0,12));

}
function posNeg(num){
    if(num.length>=12){
        messages.innerHTML = "Character Limit Has Been Reached"
        return
    }
    if(Number(num)==0){
        num='-'+num;console.log(num);
        display.innerHTML =(num);
        return
    }
    if(Number(num)>0){
        num='-'+num;console.log(num);
        display.innerHTML =(num);
        return
    }
    if(Number(num)<0){
        num=String(Number(num*(-1)));
        display.innerHTML =(num);
        return
    }



}
function clear(){
    dispValue = 0;
    savedValue = [];
    savedOperator = [];
    clicked = false
    display.innerHTML = 0
    messages.innerHTML = ''
}
function equals(num1,num2,operator){
 if(operator[0]=='equals'){
     savedValue=[display.innerHTML]
     return
 }
 return
}
function operate(operator,num1,num2){
    switch(operator[0]){
            case 'addition':
                add(num1,num2)
                break
            case 'divide':
                divide(num1,num2)
                break
            case 'multiply':
                multiply(num1,num2)
                break
            case 'subtract':
                subtract(num1,num2)
                break
            case 'equals':
               equals(num1,num1,operator)
               break
        }
    }
function refreshDisp(newVal,buttNum){
    console.log(buttNum, " ",String(dispValue).length)
    
    if(buttNum == 'num0' && Number(display.innerHTML) === 0 && String(dispValue).length == 1){
        console.log('fuck')
        dispValue = '0'
        display.innerHTML = (dispValue)
        return
    }
    if(dispValue.length>=12){
        messages.innerHTML = 'Character Limit Has Been Reached'
        display.innerHTML = (dispValue);
        return
    }
    if(dispValue == 0 && String(dispValue).length== 1){console.log(dispValue = newVal,'you should be here'); display.innerHTML = dispValue;return}
    console.log(dispValue= (dispValue)+((newVal)));
    display.innerHTML = (dispValue)
    
    
}

function clickedOperator(operator,symbol,num){
    savedValue.push(num)
    savedOperator.push(operator)
    if(savedValue.length>1){
        operate(savedOperator,savedValue[0],savedValue[1])
        savedOperator = [savedOperator[1]]
        
    }
 
   
    dispValue = 0;
    console.log(num,symbol,savedValue,savedOperator,dispValue)
    
}

function displayCharLimit(){
    messages.innerHTML = ''
}

let button0 = document.querySelector(".num0");
let button1 = document.querySelector(".num1");
let button2 = document.querySelector(".num2");
let button3 = document.querySelector(".num3");
let button4 = document.querySelector(".num4");
let button5 = document.querySelector(".num5");
let button6 = document.querySelector(".num6");
let button7 = document.querySelector(".num7");
let button8 = document.querySelector(".num8");
let button9 = document.querySelector(".num9");

let numButtonArray = [button0,button1,button2,button3, button4,button5,button6,button7,button8,button9]
for(let i = 0;i<numButtonArray.length;i++){
    numButtonArray[i].addEventListener('click',(e)=> refreshDisp(e.target.innerHTML,numButtonArray[i].className))}
    



let buttonAdd = document.querySelector(".addition");
let buttonSub = document.querySelector(".subtract");
let buttonDiv = document.querySelector(".divide");
let buttonMult = document.querySelector(".multiply");
let buttonPercent = document.querySelector(".percent");
let buttonPosNeg = document.querySelector(".negpos");
let buttonDecimal = document.querySelector(".decimal");
let buttonEqual = document.querySelector(".equals");
let buttonClear = document.querySelector(".clear");

let operatorButtonArray = [buttonAdd, buttonSub,buttonDiv,buttonMult,buttonEqual]
operatorButtonArray.forEach(function(element){element.addEventListener('click', function(e){clickedOperator(e.target.className,e.target.innerHTML,display.innerHTML);
    if(e.target.className!='equals'){displayCharLimit()}})})



buttonPercent.addEventListener('click',()=>percent(display.innerHTML))
buttonPosNeg.addEventListener('click',()=>posNeg(display.innerHTML))
buttonDecimal.addEventListener('click',function(e){decimal(dispValue)})
buttonClear.addEventListener('click', clear)

function grayIcon() {
    footerIcon.src = "img/github-gray.svg";
}

function whiteIcon() {
    footerIcon.src = "img/github-white.svg";
}
footerIcon.addEventListener('mouseenter', grayIcon);
footerIcon.addEventListener('mouseleave', whiteIcon);