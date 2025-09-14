let count=0
let ele=document.getElementById("count")
let val=setInterval(function(){
    count++
    ele.textContent="Timer:" + count
    if(count==5){
    let img_ele=document.getElementById("image")
    img_ele.src="https://thumbs.dreamstime.com/b/funny-bomb-face-cartoon-mascot-character-expressions-panic-vector-illustration-isolated-white-background-funny-bomb-face-182684447.jpg"
    }
    if(count==8){
        let h2_ele=document.getElementById("images")
        h2_ele.textContent="!....oops the deadline is a head get ready"
        h2_ele.style.color="red"
        ele.style.color="red"
        }
    if(count==10){
        let img_ele=document.getElementById("image")
        img_ele.src="https://tse2.mm.bing.net/th/id/OIP.oOPxvGJ8r5tiYFBs1dsJCwHaHo?pid=Api&P=0&h=180"
        clearInterval(val)
    }
},1000)