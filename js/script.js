console.log("\n\n%c SAVE THE DATE: 1st March, 2024");

function getUrlParams(url) {
  const params = {};
  const urlSearchParams = new URLSearchParams(url.slice(url.indexOf('?') + 1));
  for (const [key, value] of urlSearchParams) {
    params[key] = value;
  }
  return params;
}

const currentUrl = window.location.href;
const queryParams = getUrlParams(currentUrl);
const id = queryParams['id'];

if (id >= users.length) {
  alert("Not a valid url");
  window.location.href = "https://wedding-invitation-one-navy.vercel.app/"
}

const data = id ? users[id] : users[0];

(function ($) {
  "use strict";
  $(".abhishek-falling").sakura("start", {
    blowAnimations: ["blow-soft-left"],
    className: "sakura",
    fallSpeed: 2.5,
    maxSize: 12,
    minSize: 9,
    newOn: 250,
  });
})(jQuery);

// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("my_audio").play();
//   console.log("Shaadi me zaroor aana");
// });
$(document).on("click", function () {
  document.getElementById("my_audio").play();
  console.log("Shaadi me zaroor aana");
});

var marriesDate = new Date(data.date)
var marriesMonth = marriesDate.toLocaleString('default', { month: 'long' });
var marriesDay = marriesDate.getDate() 
var marriesYear = marriesDate.getFullYear()
var countDownDate = marriesDate.getTime();
console.log(countDownDate)
console.log(marriesDate.getDate())
console.log(marriesDate.days)
console.log(marriesDate)


var x = setInterval(function () {
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("time").innerHTML =
    "<div class='container'><div class='days block'>" +
    days +
    "<br>Days</div>" +
    "<div class='hours block'>" +
    hours +
    "<br>Hours</div>" +
    "<div class='minutes block'>" +
    minutes +
    "<br>Minutes</div>" +
    "<div class='seconds block'>" +
    seconds +
    "<br>Seconds</div></div>";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML =
      "<div class='container'><div class='days block'>" +
      "Wedding Day !!" +
      "</div></div>";


  } if (distance < (-86400000)) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "Wedding Completed !!";
  }
}, 1000);


//names
document.getElementById("names").innerHTML = `
        <h1>${data.name1}</h1>
        <h2>&</h2>
        <h1>${data.name2}</h1>
        <h3>Are getting married</h3>
        <p>
          on <span class="date">${marriesDay} ${marriesMonth} ${marriesYear}</span>, At <span
            class="place">
            ${data.address}</span> ${data.district}, ${data.state}.
        </p>
`;
document.getElementById("cardView").innerHTML =`<div class="content top">
       <h2>SAVE THE DATE</h2>
       <h1>The Wedding of</h1>
       <div class="name">
       <h1>${data.name1}</h1>
       <h2>&</h2>
       <h1>${data.name2}</h1>
       </div>
       </div>
       <div class="content bottom">
       <p>Date: ${marriesDay} ${marriesMonth}, ${marriesYear}</p>
       <p>Time: 3:00 PM</p>
       <p2>Location: ${data.address}, ${data.district}, ${data.state}</p2>
      </div>
`;
document.getElementById("place").innerHTML = `<a href="https://www.google.com/maps/place/${data.address},${data.district},${data.state}"
target="_blank">
<div class="venue"><i class="fa-solid fa-location-dot"></i> SEE THE VENUE</div>
</a>`;
