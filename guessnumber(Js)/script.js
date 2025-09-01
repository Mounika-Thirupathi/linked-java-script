let randomNumber = Math.ceil(Math.random() * 100);

function Guess_number() {
    let current = document.getElementById("user_input").value;
    current = parseInt(current);

    if (current === randomNumber) {
        document.getElementById("message").textContent = "🎉 The number is matched!";
    } 
    else if (current > randomNumber) {
        document.getElementById("message").textContent = "⬆️ Too high, try again!";
    } 
    else if (current < randomNumber) {
        document.getElementById("message").textContent = "⬇️ Too low, try again!";
    } 
    else {
        document.getElementById("message").textContent = "⚠️ Enter a valid input";
    }
}




