const confirm = document.getElementById("Confirm");
const prompt = document.getElementById("Prompt");

function showAlert(){
    alert("This is alert!");
}
function showConfirm(){
   confirm.innerHTML = window.confirm('THis is confirm!') === true ? "Confirmed" : "Sorry babe!";
}
function showPrompt(){
    let txt = window.prompt('This is prompt!');
    prompt.innerHTML =  txt === null || txt == "" ? "Please Fill up the box" : txt ;
}

