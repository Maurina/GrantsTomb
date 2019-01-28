"use strict"

let questionObject ={
    optionOne : "Tom",
    optionTwo : "Grant",
    optionThree: "Sally",
    optionFour: "Jordan",
    correct: 2,
    question: "Who is burried in Grant's Tomb?",

    check: function(x) {
        if(x===questionObject.correct){
            document.getElementById('response').innerHTML = `You are correct!`
        }else {
            document.getElementById('response').innerHTML = `Try again.`
        }//else
    }//if
   
}; //questionObject

document.getElementById('questionDay').innerHTML = questionObject.question