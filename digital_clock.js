let name = prompt("Enter Your Name") ;
document.querySelector("#namespan").innerHTML = name;
const days = ["Sunday" , " Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];



function showtime() {
    let datetime = new Date();
    let day =days[datetime.getDay()]
    let hh = datetime.getHours();
    let mm = datetime.getMinutes();
    let ss = datetime.getSeconds();
    let mms = datetime.getMilliseconds();

// if (hh > 12){
//     session = "PM";
// }

document.querySelector("#hours").innerHTML = hh;
document.querySelector("#minutes").innerHTML = mm;
document.querySelector("#seconds").innerHTML = ss;
document.querySelector("#millisecond").innerHTML = mms;
document.querySelector("#day").innerHTML = day;

}

setInterval(showtime,12);