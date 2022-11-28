let startButton = document.getElementById("btnOne");

btnOne.onclick = function () {
    let flagPrompt = prompt("What is the Winter Grinch's password?")
    if ((flagPrompt == "33")){
        window.location.href='https://lainey-moffett.github.io/Saving-Winter-/levelTwo.html';
        else {
        alert("Sorry, that is incorrect. Please try again!")
    }
    }
}
