//set the timer for 30 minutes
let time = new Date()
time.setMinutes(30);

console.log(time.getMinutes())

function timeHolder(){

}

function displayHello(time) {
 document.getElementById("demo").innerHTML = time.getMinutes();
 document.getElementById("demo").innerHTML -= 1;
}

setInterval(displayHello(time), 1000);
