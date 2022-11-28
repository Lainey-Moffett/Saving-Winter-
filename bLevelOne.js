let startButton = document.getElementById("startButton");
//Questions
let reminder = "Please put only the number in your answer."
let Q1 = "Question 1:  Which animal has babies that are called pups?  1. Seal, 2. Polar Bear, 3. Penguin, 4. Narwhal.  " + reminder;//1
let Q2 = "Question 2:  Which animal can hold its breath for a maximum of 15 minutes?  1. Polar Bear, 2. Emperor Penguin, 3. Harp Seal, 4. Arctic Hare.  " + reminder;//3
let Q3 = "Question 3:  Which animal has transparent fur?  1. Harp Seal, 2. Arctic Wolves, 3. Arctic Hare, 4. Polar Bear.  " + reminder;//4
let Q4 = "Question 4:  From what do polar bears get the water they need?  1. Salt water, 2. Seal blubber, 3. Seagulls, 4. Ice.  " + reminder;//2
//let Q1 = "Question 1:  What are baby seals called?  A. Pups, B. Cubs, C. Nestlings, D. Joeys.  " + reminder;//A
//let Q2 = "Question 2:  What do penguins eat?  A. Plants, B. Plants and Meat, C. Fish, D. They only drink water.  " + reminder;//C
//let Q3 = "Question 3:  What color is a polar bear's fur?  A. White, B. Black, C. Silver, D. Transparent.  " + reminder;//D


let round4 = function(){
    alert("Correct!  Click 'OK' for your next question.");
    let answer4 = prompt(Q4);
    if (answer4 == "2"){//4.correct
        alert("Congratulations, you got all four questions right!  The flag name is mu3vb7Fw");
        let flagName = prompt("What is the flag name?");
        if (flagName == "mu3vb7Fw"){
            window.location.href='https://www.google.com/';
        } else {
            while (flagName != "mu3vb7Fw"){
                alert("Sorry, that is incorrect.  Please try again.");
                let flagName = prompt("What is the flag name?");
                if (flagName == "mu3vb7Fw") break;
            }
            //LINK TO NEXT PAGE
        }
    } else {//4.incorrect
        while (answer4 != "2"){
            alert("Sorry, that is incorrect.  Please try again.");
            let answer4 = prompt(Q4);
            if (answer4 == "2") break;
        }
            alert("Congratulations, you got all four questions right!  The flag name is flagThree");
            let flagName = prompt("What is the flag name?");
            if (flagName == "flagThree"){
                window.location.href='https://www.google.com/';
            } else {
                while (flagName != "flagThree"){
                    alert("Sorry, that is incorrect.  Please try again.");
                    let flagName = prompt("What is the flag name?");
                    if (flagName == "flagThree") break;
                }
                //LINK TO NEXT PAGE
            }
    }

}
let round3 = function(){
    alert("Correct!  Click 'OK' for your next question.");
    let answer3 = prompt(Q3);
    if (answer3 == "4"){//3.correct
        round4();
    } else {//3.incorrect
        while (answer3 != "4"){
            alert("That is incorrect.  Please try again");
            let answer3 = prompt(Q3);
            if (answer3 == "4") break;
        }
        round4();
    }
}
let round2 = function(){
    alert("Correct!  Click 'OK' for your next question.");
    let answer2 = prompt(Q2);
    if (answer2=="3"){//2.correct
        round3();
    } else {//2.incorrect
        while (answer2 != "3"){
            alert("That is incorrect.  Please try again.");
            let answer2 = prompt(Q2);
            if (answer2 = "3") break;
        }
        round3();
    }
}

startButton.onclick = function(){
    let answer1 = prompt(Q1);
    if (answer1 =="1"){//1.correct  C---
        round2();
    } else {//1.incorrect I---
        while (answer1 != "1"){
            alert("That is incorrect.  Please try again.");
            let answer1 = prompt(Q1);
            if (answer1 == "1") break;
        }
        round2();
    }

}

/**IF THE PROMPTS/ALERTS AREN'T WORKING WELL, USE THIS CODE INSTEAD.  IT USES TEXT INPUT.

 let startButton = document.getElementById("startButton");
 let Question = document.getElementById("Question");
 let input = document.getElementById("input");
 let submitButton = document.getElementById("submitButton");
 let incorrect = document.getElementById("incorrect");
 //Questions
 let reminder = "Please put only the letter in your answer, and make sure it is capitalized."
 let Q1 = "Question 1:  What are baby seals called?  A. Pups, B. Cubs, C. Nestlings, D. Joeys.  " + reminder;//A
 let Q2 = "Question 2:  What do penguins eat?  A. Plants, B. Plants and Meat, C. Fish, D. They only drink water.  " + reminder;//C
 let Q3 = "Question 3:  What color is a polar bear's fur?  A. White, B. Black, C. Silver, D. Transparent.  " + reminder;//D
 let Q4 = "Question 4:  From what do polar bears get the water they need?  A. Salt water, B. Seal blubber, C. Seagulls, D. Ice.  " + reminder;//B
 
 startButton.onclick = function(){
     Question.innerHTML = Q1;
     input.style.visibility = "visible";
     submitButton.style.visibility = "visible";
 }
 
 submitButton.onclick = function(){
     let answer1 = input.value;
     if (answer1 == "A"){//1.correct
         Question.innerHTML = Q2;
         submitButton.onclick = function(){
             let answer2 = input.value;
             if (answer2 == "C"){//2.correct
               Question.innerHTML = Q3;
                 submitButton.onclick = function(){
                     let answer3 = input.value;
                     if(answer3 == "D"){//3.correct
                        Question.innerHTML = Q4;
                        submitButton.onclick = function(){
                            let answer4 = input.value;
                            if (answer4 == "B"){//4.correct
                                Question.innerHTML = "Congratulations, you got all four right!  See the alert to get the flag name.";
                                alert("Congratulations, you got all four questions right!  The flag name is flagThree");
                                let flagName = prompt("What is the flag name?");
                                if (flagName == "flagThree"){
                                    //LINK PAGES TOGETHER
                                } else {
                                    alert("Sorry, that is incorrect.  Please try again (You can do this by pressing submit for question four again).");
                                }
                            } else {//4.incorrect
                                Question.innerHTML = "Sorry, that is incorrect.  Please try again.  " + Q4;
                            }
                        }
                    } else {//3.incorrect
                        Question.innerHTML = "Sorry, that is incorrect.  Please try again.  " + Q3;                        
                    }
                }
            } else {//2.incorrect
                Question.innerHTML = "Sorry, that is incorrect.  Please try again.  " + Q2;                
            }
        }
    } else {//1.incorrect
        Question.innerHTML = "Sorry, that is incorrect.  Please try again.  " + Q1;
        //NOTE:  This works instead of having to call a while loop (which was working for prompts but not for text input) for while the answer is incorrect.  Looking back at the text adventure project, I had to delete the buttons at all 'end game' scenarios to prevent going back to change answers.  However, this time, I am actually using this.
    }
}
 * 
 */