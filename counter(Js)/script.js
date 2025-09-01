
function Increment(){
   let currentValue= document.getElementById("counter").textContent
   currentValue=parseInt(currentValue)
   let count=document.getElementById("counter").textContent=currentValue+1
   count=parseInt(count)
   if(count>0){
    document.getElementById("counter").style.color="blue"
   }
   else if(count<0){
    document.getElementById("counter").style.color="red"
   }else{
    document.getElementById("counter").style.color="black"
   }
}

function Decrement(){
    let currentValue=document.getElementById("counter").textContent
    currentValue=parseInt(currentValue)
    let count =document.getElementById("counter").textContent=currentValue-1
    count=parseInt(count)
   if(count>0){
    document.getElementById("counter").style.color="blue"
   }
   else if(count<0){
    document.getElementById("counter").style.color="red"
   }else{
    document.getElementById("counter").style.color="black"
   }


}

function Reset(){
    document.getElementById("counter").textContent=0
    document.getElementById("counter").style.color="black"
}

