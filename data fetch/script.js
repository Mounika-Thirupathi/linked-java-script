fetch("https://jsonplaceholder.typicode.com/todos")
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)

let element=document.getElementById("container");
for(let i=0;i<data.length;i++){
    let card=document.createElement("div")
    card.classList.add("get")
    card.innerHTML=`
            <p>ID:${data[i].id}</p>
            <p>title:${data[i].title}</p>
            <p>user id:${data[i].userid}</p>
            <p>completed:${data[i].completed?"True":"false"}</p>
        `;
    element.appendChild(card)

}
})
