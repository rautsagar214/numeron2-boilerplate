// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

var num1 = Math.round(Math.random() * 100)
var num2 = Math.round(Math.random() * 100)

var Number1 = document.getElementById("number1")
var Number2 = document.getElementById("number2")

Number1.innerHTML = num1;
Number2.innerHTML = num2;

// Iteration 3: Creating variables required to make the game functional 

var score = 0;
var Operator;
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const mul = document.getElementById("mul")
const divide = document.getElementById("divide")
const modulus = document.getElementById("modulus")

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

var Number3 = document.getElementById("number3")
var num3;



// Iteration 5: Creating a randomise function to make the game functional

function randomise() {
    num1 = Math.round(Math.random() * 100)
    num2 = Math.round(Math.random() * 100)
    num3 = Math.round(Math.random() * 100)

    //edge case

    if (num1 < num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }

    //take random Operator
    Operator = Math.round(Math.random() * 5)
    console.log(Operator)

    // switch case if else

    switch (Operator) {
        case 1:
            num3 = num1 + num2;
            break
        case 2:
            num3 = num1 - num2;
            break
        case 3:
            num3 = num1 * num2;
            break
        case 4:
            num3 = num1 / num2;
            break
        case 5:
            num3 = num1 % num2;
            break
        case 0:
            randomise()

    }

    Number1.innerHTML = num1;
    Number2.innerHTML = num2;
    Number3.innerHTML = num3;

    console.log(num1, num2, num3, Operator)
}
randomise()



// Iteration 6: Making the Operators (button) functional
plus.addEventListener("click", () => {
    console.log("plus")
    // console.log(num1, num2, num3)
    if (num1 + num2 == num3) {
        // console.log("plus")
        score++
        console.log(score)
        randomise()
        ResetTimer(TimeDecrement)
    }
    else{
        localStorage.setItem("score",score)
        window.location.href="./gameover.html"
    }
})
minus.addEventListener("click", () => {
    console.log("minus")
    if (num1 - num2 === num3) {
        console.log("minus")
        score++
        console.log(score)
        randomise()
        ResetTimer(TimeDecrement)
    }
    else{
        localStorage.setItem("score",score)
        window.location.href="./gameover.html"
    }
})
mul.addEventListener("click", () => {
    console.log("mul")
    if (num1 * num2 === num3) {
        console.log("mul")
        score++
        console.log(score)
        randomise()
        ResetTimer(TimeDecrement)
    }
    else{
        localStorage.setItem("score",score)
        window.location.href="./gameover.html"
    }
})
divide.addEventListener("click", () => {
    console.log("divide")
    if (num1 / num2 === num3) {
        console.log("div")
        score++
        console.log(score)
        randomise()
        ResetTimer(TimeDecrement)
    }
    else{
        localStorage.setItem("score",score)
        window.location.href="./gameover.html"
    }
})
modulus.addEventListener("click", () => {
    console.log("modulus")
    if (num1 % num2 === num3) {
        console.log("modulus")
        score++
        console.log(score)
        randomise()
        ResetTimer(TimeDecrement)
    }
    else{
        localStorage.setItem("score",score)
        window.location.href="./gameover.html"
    }
})

// Iteration 7: Making Timer functional

 var Timer = document.getElementById("timer")
 var TimeDecrement ;
 function TimeStart (){
     let time = 5
     Timer.innerHTML=time
     
     
     TimeDecrement=setInterval(()=>{
         time--
         if(time===0){
             localStorage.setItem("score",score)
                 window.location.href="./gameover.html"
              }
             Timer.innerHTML=time;
         },1000)
     }
     

 function ResetTimer(){
     clearInterval(TimeDecrement)
     TimeStart()
 }
 TimeStart()