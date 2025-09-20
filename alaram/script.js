let count = 0;
let timer = null; 

function Start_watch() {
    if (timer !== null) return; 
    timer = setInterval(function () {
        count++;
        let ele = document.getElementById("alarm");
        ele.textContent = " ⏳Count : " + count;
    }, 1000);
}

function Stop_watch() {
    clearInterval(timer);
    timer = null; 
}

function Reset_watch() {
    clearInterval(timer);
    timer = null;
    count = 0;
    document.getElementById("alarm").textContent = "⏳Count : " + count;
}

