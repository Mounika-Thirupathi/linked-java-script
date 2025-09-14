let element = document.getElementById("container");

let button_values = [
    ["1","2","3"],
    ["4","5","6"],
    ["7","8","9"],
    ["+","-","*"],
    ["/","=","c"],
    // ["//","%","X"]
];

button_values.forEach(row => {
    let div_ele = document.createElement("div");
    div_ele.classList.add("division");

    row.forEach(val => {
        let btn = document.createElement("button");
        btn.classList.add("buttons");
        btn.textContent = val;
        div_ele.appendChild(btn);
    });

    element.appendChild(div_ele);
});


let input_ele = document.querySelector("input");
let but_ele = document.querySelectorAll(".buttons");


for (let i = 0; i < but_ele.length; i++) {
    let btn = but_ele[i];

    btn.onclick = function() {
        let value = btn.textContent;

        if (value === "=") {
            try {
                input_ele.value = eval(input_ele.value);  
            } catch {
                input_ele.value = "Error";  
            }
        } else if (value === "C") {
            input_ele.value = "";  
        } else {
            input_ele.value += value;  
        }
    };
}
