setTimeout(function () { location.reload(true); }, 300000);

const currentDiv = document.querySelector(".site");
const counterDiv = document.createElement("div");
const d = new Date; 
const fullDate = [('0'+d.getHours()).slice(-2),
                 ('0'+d.getMinutes()).slice(-2),
                 ('0'+d.getSeconds()).slice(-2)].join(':');

counterDiv.class = 'counter';
counterDiv.style.textAlign = 'center';
counterDiv.innerHTML += '<br>Dernière actualisation : ' + fullDate;
document.body.insertBefore(counterDiv, currentDiv);
