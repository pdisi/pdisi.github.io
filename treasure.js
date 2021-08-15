var clicks = 5
var treasureLocation = Math.floor(Math.random() * 9)
var bombLocation = Math.floor(Math.random() * 9)
var compLocation = Math.floor(Math.random() * 9)

while (treasureLocation == bombLocation){
   treasureLocation = Math.floor(Math.random() * 9)
   bombLocation = Math.floor(Math.random() * 9)
}

document.getElementById("clicks").innerHTML = clicks;

const treasure = (location) =>{
  if (location == treasureLocation) {
    document.getElementById(location).innerHTML = "&#x1f308"
    setTimeout(function(){ alert("YOU WIN!"); }, 1);
    window.location.reload(true)
  } else if (location == bombLocation){
    document.getElementById(location).innerHTML = "&#x2620"
    setTimeout(function(){ alert("GAME OVER!"); }, 1);
    window.location.reload(true)
  } else {
    document.getElementById(location).innerHTML = "&#x1f332"
    clicks -= 1
    document.getElementById("clicks").innerHTML = clicks;
    console.log(clicks);
    if (clicks == 0) {
    setTimeout(function(){ alert("GAME OVER!"); }, 1);
    window.location.reload(true)
    }
  }
}
function computer() {
    var cpu = Math.floor(Math.random() * 9)
    if (cpu == treasureLocation) {
    document.getElementById(cpu).innerHTML = "&#x1f308"
    setTimeout(function(){ alert("COMPUTER WINS, YOU LOSE!"); }, 1);
    window.location.reload(true)
  } else if (cpu == bombLocation){
    document.getElementById(cpu).innerHTML = "&#x2620"
    setTimeout(function(){ alert("COMPUTER LOSES, YOU WIN?"); }, 1);
    window.location.reload(true)
  } else {
    document.getElementById(cpu).innerHTML = "&#x1f332"
  }
}
