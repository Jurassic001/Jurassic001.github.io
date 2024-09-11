var countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

var countdownfunction = setInterval(function() {

  var now = new Date().getTime();
  
  // Find the distance between now and the countdown date
  var distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Update the countdown element
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
  // If the countdown is over, write some text and stop checking every second
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("countdown").innerHTML = "";
  }
}, 1000);
