setInterval(showtime,1000);   
function showtime(){
    let time = new Date();  //for reference date is object  //https://www.w3schools.com/jsref/jsref_obj_date.asp
    let hours= time.getHours();
    let min=time.getMinutes();
    let sec=time.getSeconds();
    // am_pm="AM"; // here we are definingn its AM before itself
     let am_pm; 
    if(hours>12){
        hours-=12;  //hours=hours-12 which denotes its is pm
        am_pm ="PM";
    }
    // if(hours==0)
    if(hours==0 || hours<12){ 
        hours=12;
        am_pm="AM"
    }

hours = hours<10?"0"+hours:hours;
min= min<10?"0"+min:min;
sec= sec<10?"0"+sec:sec;

let result_time=hours+":"+min+":"+sec+ " "+am_pm;
document.getElementById("clock").innerHTML=result_time;
}
showtime()