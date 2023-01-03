let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
 
let dd = document.getElementById('dd');
let ss = document.getElementById('ss');
let mm = document.getElementById('mm');
let hh = document.getElementById('hh');

let day_dot = document.querySelector('.day_dot');
let min_dot = document.querySelector('.min_dot');
let hr_dot = document.querySelector('.hr_dot');
let sec_dot = document.querySelector('.sec_dot');

let endDate = '01/01/2024 00:00:00';
//date format mm/dd/yy

let x = setInterval(function(){
let now = new Date(endDate).getTime();
let countDown = new Date().getTime();
let distance = now - countDown;

//time calculation for days, hrs, mins, secs
let d = Math.floor(distance / (1000 * 60 * 60 * 24));
let h = Math.floor((distance  % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let m = Math.floor((distance % (1000 * 60 * 60)) /  (1000 * 60));
let s = Math.floor((distance % (1000 * 60)) /  (1000));

//output the result in element with id
days.innerHTML = d + "<br><span>Days</span>";
hours.innerHTML = h + "<br><span>Hours</span>";
minutes.innerHTML = m + "<br><span>Minutes</span>";
seconds.innerHTML = s + "<br><span>Seconds</span>";

//animate stroke
dd.style.strokeDashoffset = 440 - (440 * d)  / 365;
//365 days in a year
hh.style.strokeDashoffset = 440 - (440 *  h)  / 24;
//24hrs in a day
mm.style.strokeDashoffset = 440 - (440 *  m)  / 60;
//60 mins an hour
ss.style.strokeDashoffset = 440 - (440 *  s)  / 60;
//60 secs a minute

//animate circle dots
day_dot.style.transform = 'rotateZ(' + (d * 0.986) + 'deg)';

hr_dot.style.transform = 'rotateZ(' + (h * 15) + 'deg)';

min_dot.style.transform = 'rotateZ(' + (m * 6) + 'deg)';

sec_dot.style.transform = 'rotateZ(' + (s * 6) + 'deg)';

//if countdown is over
if(distance < 0){
    clearInterval(c);
    document.getElementById("time").style.display = 'none'
    document.querySelector(".newYear").style.display = 'block'

}
})