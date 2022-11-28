let answerButton = document.getElementById("answerButton");

answerButton.onclick = function(){
    let answerPrompt = prompt("What is the message?");
    if (answerPrompt == "I am going to steal all of the snowmen in town and melt them!"){
        alert("Congratulations! You have successfully completed the first base! Thanks to you, we were able to protect all of the snowmen! That Winter Grinch is no match for you, agent! The flag is nQVxDV8j.");
        let flagPrompt = prompt("What is the flag name?");
        if ((flagPrompt == "nQVxDV8j")){
            window.location.href='https://www.google.com/';

        } else {
            alert("Sorry, that is incorrect.  Please try again.");
        }
    } else {
        alert("Sorry, that is incorrect.  Please try again.");
    }
}