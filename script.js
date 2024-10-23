let input = document.querySelector("#text_area");
let color = document.querySelector("#color");
let btn = document.querySelector("#btn");
let p = document.querySelector("#empty");
let output = document.querySelector("#notes");

btn.addEventListener("click", () => {
    
    if(input.value === ""){
        alert("Please enter some text");
        return;
    }

    let div = document.createElement("div");
    notes.appendChild(div);
    div.textContent = input.value;
    div.style.backgroundColor = color.value;
    div.style.width = "180px"
    div.style.height = "200px"
    div.style.padding = "10px 10px"
    div.style.borderRadius = "12px"
    div.style.position = "relative"
    div.style.overflowY = "scroll";
    empty.style.display ="none"


    let del = document.createElement("button");
     del.innerText = "X";
     del.style.width = "30px";
     del.style.height = "30px";
     del.style.position = "absolute";
     del.style.left = "140px"
     div.appendChild(del);

     del.addEventListener("click", () => {
        div.remove();
       

    
});

let edit = document.createElement("button");
edit.innerText = "Edit";
edit.style.width = "50px";
edit.style.position = "absolute";
edit.style.left = "80px";
div.appendChild(edit);

edit.addEventListener("click", () => {
    let newText = prompt("Edit your note:");
    if(newText !== null){
        div.textContent = newText;
        div.appendChild(del);
        div.appendChild(edit);
        
    }
});
input.value = "";

});



