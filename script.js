const id= document.getElementById("id");
const advice= document.getElementById("advice");
const url='https://api.adviceslip.com/advice';



clicked();
function clicked(){
    fetch(url, {cache: "no-cache"})
    .then((response) => response.json())
    .then((data) =>{
        id.textContent= data.slip.id;
        advice.textContent= data.slip.advice;
    });

};