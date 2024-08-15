const x = document.getElementById("display");

async function getData(){
    const res = await fetch('http://127.0.0.1:5500/apiTest.txt');
    const data = await res.text();

    x.innerText = data;
}