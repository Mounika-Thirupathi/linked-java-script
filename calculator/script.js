let element=document.getElementById("container")

let div1=document.createElement("div")
div1.id="button1"
let btn1=document.createElement("button")
btn1.classList.add("buttons")
btn1.textContent="1"
div1.appendChild(btn1)



let btn2=document.createElement("button")
btn2.classList.add("buttons")
btn2.textContent="2"
div1.appendChild(btn2)


let btn3=document.createElement("button")
btn3.classList.add("buttons")
btn3.textContent="3"
div1.appendChild(btn3)
element.appendChild(div1)


let div2=document.createElement("div")
div2.id="button2"
let btn4=document.createElement("button")
btn4.classList.add("buttons")
btn4.textContent="4"
div2.appendChild(btn4)



let btn5=document.createElement("button")
btn5.classList.add("buttons")
btn5.textContent="5"
div2.appendChild(btn5)


let btn6=document.createElement("button")
btn6.classList.add("buttons")
btn6.textContent="6"
div2.appendChild(btn6)
element.appendChild(div2)


let div3=document.createElement("div")
div3.id="button3"
let btn7=document.createElement("button")
btn7.classList.add("buttons")
btn7.textContent="7"
div3.appendChild(btn7)



let btn8=document.createElement("button")
btn8.classList.add("buttons")
btn8.textContent="8"
div3.appendChild(btn8)


let btn9=document.createElement("button")
btn9.classList.add("buttons")
btn9.textContent="9"
div3.appendChild(btn9)
element.appendChild(div3)


let div4=document.createElement("div")
div4.id="button4"
let btn10=document.createElement("button")
btn10.classList.add("buttons")
btn10.textContent="+"
div4.appendChild(btn10)



let btn11=document.createElement("button")
btn11.classList.add("buttons")
btn11.textContent="-"
div4.appendChild(btn11)


let btn12=document.createElement("button")
btn12.classList.add("buttons")
btn12.textContent="*"
div4.appendChild(btn12)
element.appendChild(div4)

let div5=document.createElement("div")
div5.id="button5"
let btn13=document.createElement("button")
btn13.classList.add("buttons")
btn13.textContent="/"
div5.appendChild(btn13)



let btn14=document.createElement("button")
btn14.classList.add("buttons")
btn14.textContent="//"
div5.appendChild(btn14)


let btn15=document.createElement("button")
btn15.classList.add("buttons")
btn15.textContent="="
div5.appendChild(btn15)
element.appendChild(div5)


let div6=document.createElement("div")
div6.id="button6"
let btn16=document.createElement("button")
btn16.classList.add("buttons")
btn16.textContent="C"
btn16.style.padding="7px 30px"
div6.appendChild(btn16)
element.appendChild(div6)



let display = document.querySelector("input");
let buttons = document.querySelectorAll(".buttons");
for (let i = 0; i < buttons.length; i++) {
    
    let btn = buttons[i];

    btn.addEventListener("click", function() {
        let value = btn.textContent; 

        if (value === "=") {
            try {
                display.value = eval(display.value); 
            } catch {
                display.value = "Error";  
            }
        } else if (value === "C") {
            display.value = "";  
        } else {
            display.value += value; 
        }
    });
}
