let startButton = document.getElementById("bttnTwo");
//Questions
let reminder = "Please put only the number in your answer."
let Q1 = "Question 1: A sweet bread, Babka, is typically eaten on Christmas Eve in ___. 1. Poland, 2. Japan,  3. Greece, 4. Peru   " + reminder;//1
let Q2 = "Question 2: Spiced Hot Chocolate is a tradition in 1. Greece, 2. Japan, 3. Peru, 4. Poland  " + reminder;//3
let Q3 = "Question 3:  Christmas Eve meals in ___ come from the popular fast food chain KFC. 1. Peru, 2. Japan, 3. Greece, 4. Poland  " + reminder;//4
let Q4 = "Question 4:  This country features a dish called Melomakarona when the big Christmas Feast is served. 1. Poland, 2. Peru, 3. Greece, 4. Japan  " + reminder;//2
//let Q1 = "Question 1:  What are baby seals called?  A. Pups, B. Cubs, C. Nestlings, D. Joeys.  " + reminder;//A
//let Q2 = "Question 2:  What do penguins eat?  A. Plants, B. Plants and Meat, C. Fish, D. They only drink water.  " + reminder;//C
//let Q3 = "Question 3:  What color is a polar bear's fur?  A. White, B. Black, C. Silver, D. Transparent.  " + reminder;//D


let round4 = function(){
    alert("Correct!  Click 'OK' for your next question.");
    let answer4 = prompt(Q4);
    if (answer4 == "3"){//4.correct
        alert("Congratulations, you got all four questions right!  The flag name is KBYVD65A");
        let flagName = prompt("What is the flag name?");
        if (flagName == "KBYVD65A"){
            window.location.href='https://lainey-moffett.github.io/Saving-Winter-/indexOne.html';
        } else {
            while (flagName != "KBYVD65A"){
                alert("Sorry, that is incorrect.  Please try again.");
                let flagName = prompt("What is the flag name?");
                if (flagName == "KBYVD65A") break;
            }
            //LINK TO NEXT PAGE
        }
    } else {//4.incorrect
        while (answer4 != "2"){
            alert("Sorry, that is incorrect.  Please try again.");
            let answer4 = prompt(Q4);
            if (answer4 == "2") break;
        }
            alert("Congratulations, you got all four questions right!  The flag name is KBYVD65A");
            let flagName = prompt("What is the flag name?");
            if (flagName == "KBYVD65A"){
                window.location.href='https://lainey-moffett.github.io/Saving-Winter-/indexOne.html';
            } else {
                while (flagName != "KBYVD65A"){
                    alert("Sorry, that is incorrect.  Please try again.");
                    let flagName = prompt("What is the flag name?");
                    if (flagName == "KBYVD65A") break;
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
        while (answer3 != "2"){
            alert("That is incorrect.  Please try again");
            let answer3 = prompt(Q3);
            if (answer3 == "2") break;
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

bttnTwo.onclick = function(){
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
