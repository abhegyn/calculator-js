let textContentLeft = "" , textContentRight= "";

let finalContent;

const screen = document.querySelector("#screen");

//flag to check if an operator has been entered or not
let flag = false;
let count = 0;
let op = "";


const resetState = (()=>{
  flag = false;
  textContentLeft = "";
  textContentRight= "";
  finalContent = 0;
});


const addd = document.querySelector("#plus");

addd.addEventListener("click", ()=>{
  op = "+";
  flag = true;
  count++;
  if (count>1) {
    alert("Enter a Number after an operator")
    textContentLeft = textContentRight = "";
  }else{ 
    console.log(count) ;
  }
  console.log("flag is true");
});


const minuss = document.querySelector("#minus");

minuss.addEventListener("click", ()=>{
  op="-";
  flag = true;
  count++;
  if (count>1) {
    alert("Enter a Number after an operator")
    textContentLeft = textContentRight = "";
  }else{ 
    console.log(count) ;
  }
  console.log("flag is true");
});


const multiplyy = document.querySelector("#multiply");

multiplyy.addEventListener("click", ()=>{
  op="x";
  flag = true;
  count++;
  if (count>1) {
    alert("Enter a Number after an operator")
    textContentLeft = textContentRight = "";
  }else{ 
    console.log(count) ;
  }
  console.log("flag is true");
});

const dividee = document.querySelector("#divide");

dividee.addEventListener("click", ()=>{
  op="/";
  flag = true;
  count++;
  if (count>1) {
    alert("Enter a Number after an operator")
    textContentLeft = textContentRight = "";
  }else{ 
    console.log(count) ;
  }
  console.log("flag is true");
});


const equals = document.querySelector(".equate");
equals.addEventListener("click", ()=>{
  operate(textContentLeft, textContentRight,op);
  screen.textContent = finalContent;
  flag = false;
  textContentRight = "";
});

const operate = ((someLeft, someRight, op)=>{
  switch(op){
    case "+":{
      finalContent= Number(someLeft) + Number(someRight); 
      break;
    };
    case "-":{
      finalContent= Number(someLeft) - Number(someRight);
      break;
    };
    case "x":{
      finalContent= Number(someLeft) * Number(someRight);
      break;
    };
    case "/":{
      finalContent= Number(someLeft) / Number(someRight);
      break;
    };
    default:{
      console.log("how did we get here?");
    };
    

  }

});

const rightZero = ((textContentRight)=>{
   if ((Number(textContentRight)) != 0) return false;
   else return true;  
})

const onebtn = document.querySelector("#one");
onebtn.addEventListener("click", ()=>{
  if(flag){
    textContentRight += '1';
  } else {
    textContentLeft += '1';
  }
});

const twobtn = document.querySelector("#two");
twobtn.addEventListener("click", ()=>{
  if(flag){
    textContentRight += '2';
  } else {
    textContentLeft += '2';
  }
});
const threebtn = document.querySelector("#three");
threebtn.addEventListener("click", ()=>{
  if(flag){
    textContentRight += '3';
  } else {
    textContentLeft += '3';
  }
});
const fourbtn = document.querySelector("#four");
fourbtn.addEventListener("click", ()=>{
  if(flag){
    textContentRight += '4';
  } else {
    textContentLeft += '4';
  }
});
const fivebtn = document.querySelector("#five");
fivebtn.addEventListener("click", ()=>{
  if(flag){
    textContentRight += '5';
  } else {
    textContentLeft += '5';
  }
});
const sixbtn = document.querySelector("#six");
sixbtn.addEventListener("click", ()=>{
  if(flag){
    textContentRight += '6';
  } else {
    textContentLeft += '6';
  }
});
const sevenbtn = document.querySelector("#seven");
sevenbtn.addEventListener("click", ()=>{
  if(flag){
    textContentRight += '7';
  } else {
    textContentLeft += '7';
  }
});
const eightbtn = document.querySelector("#eight");
eightbtn.addEventListener("click", ()=>{
  if(flag){
    textContentRight += '8';
  } else {
    textContentLeft += '8';
  }
});
const ninebtn = document.querySelector("#nine");
ninebtn.addEventListener("click", ()=>{
  if(flag){
    textContentRight += '9';
  } else {
    textContentLeft += '9';
  }
});
const zerobtn = document.querySelector("#zero");
zerobtn.addEventListener("click", ()=>{
  if(flag && rightZero() ){
    textContentRight += '0';
  } else if (flag == false) {
    textContentLeft += '0';
  } else if (flag == true && rightZero()==false ) {
    alert("dont do that 😡");
    
  }

});
