let h2_ele=document.createElement("h2")
h2_ele.textContent="What is the output of 2+3?"

let input_ele=document.createElement("input")



let btn_ele=document.createElement("button")
btn_ele.id="button"
btn_ele.textContent="Save The Country"

let res=document.getElementById("image")
let a=setTimeout(function(){
    res.src="https://as2.ftcdn.net/v2/jpg/07/67/01/93/1000_F_767019338_J54lxLLAOLP4MmnTfHe1vBklsi50uBtA.jpg"
    btn_ele.style.backgroundColor="red"
},5000)

btn_ele.onclick=function(){
    let element=input_ele.value
    if(element==5){
        clearTimeout(a)
        image.src="https://wallpaperaccess.com/full/1386186.jpg"
        btn_ele.style.backgroundColor="green"
}
}


document.body.appendChild(h2_ele)

document.body.appendChild(input_ele)

document.body.appendChild(btn_ele)