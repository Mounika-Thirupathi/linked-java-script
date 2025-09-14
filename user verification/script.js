function display(event){
    event.preventDefault();
    let username=document.getElementById("name").value
    document.getElementById("message").textContent=username+"Your request is processing....."
}

function toggle(){
    let button=document.getElementById("pwd")
    if(button.type==="password"){
        button.type="text"
    }
    else{
        button.type="password"
    }
}