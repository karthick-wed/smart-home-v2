var date = new Date();
const todaydate = document.getElementById("Date")
const todaytime = document.getElementById("time")
const todayday = document.getElementById("Day")
const noofday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function printDate()
{
    var date = new Date();
    var day = date.getDate();
    var month= date.getMonth()+1;
    var year = date.getFullYear();
    todaydate.innerHTML= day + "/" + month + "/" + year;
}
printDate();
function printDay(){
    var date = new Date();
    var today = date.getDay();
    var day = noofday[today];
    todayday.innerHTML=day;
}
printDay();
function printtime(){
var date = new Date();
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
    if(hour == 0){
        hour=12;
    }
    if (hour>12)
    {
        hour=hour-12;
        document.getElementById("ampm").innerHTML="PM";
    }
    if(hour < 10)
    {
        hour = "0"+ hour;
    }
    if(min < 10){
        min = "0"+min;
    }
    if(sec < 10){
        sec = "0" + sec;
    }
    document.getElementById("hours").innerHTML=hour;
    document.getElementById("mins").innerHTML=min;
    document.getElementById("sec").innerHTML=sec;
    setTimeout(printtime,1000);
}
printtime();
document.getElementById("img-home-nigth").style.display ="none"
const btn_1 = document.getElementById("check")
const home_morning = document.querySelector(".img-home")
const home_ac = document.querySelector(".img-ac") 
const home_light = document.querySelector(".img-light")
const control_1_h1 = document.getElementById("control-1-h1")
const alert_msg = document.querySelector(".alert-msg")
const alert_msg_h1 = document.getElementById("msg_h1")
const img_ac = document.querySelector(".img_ac_on")
btn_1.addEventListener("change",function(){
    if(this.checked)
    {
        control_1_h1.textContent = "Night"
        home_morning.style.filter = 'brightness(20%)';
        home_ac.style.filter = 'brightness(20%)';
        home_light.style.filter = 'brightness(20%)';
        alert_msg.style.top ="60px"
        alert_msg_h1.textContent ="Changed into night"
        img_ac.style.filter = 'brightness(30%)';

    }
    else
    {
        control_1_h1.textContent = "Day"
        home_morning.style.filter = 'brightness(100%)';
        home_ac.style.filter = 'brightness(100%)';
        home_light.style.filter = 'brightness(100%)';
        alert_msg_h1.textContent ="Changed into day"
        alert_msg.style.top="60px";
        img_ac.style.filter = 'brightness(100%)';
        
    }
    
})
function clos()
{
    alert_msg.style.top="-15%";
}
const btn_2 = document.getElementById("Ac-check")
btn_2.addEventListener("change",function(){
    if(this.checked)
    {
        img_ac.style.display = "block"
        home_ac.style.display ="none"
        alert_msg.style.top ="60px"
        alert_msg_h1.textContent ="Ac on"
    }
    else
    {
        img_ac.style.display = "none"
        home_ac.style.display ="block"
        alert_msg.style.top ="60px"
        alert_msg_h1.textContent ="Ac off"
    }
})

/*if (btn_1 && btn_2) {
    console.log("Nah, I'd win");
} else {
    console.log("Not both clicked");
}*/
console.log(btn_1.value)