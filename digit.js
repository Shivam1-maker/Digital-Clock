function ShowTime(){
    var date = new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    var session='PM';

    if(h==0){
        h=12;
    }
    if(h>12){
        h=h-12;
        session="AM";
    }
    h=(h<10)?'0'+h:h;
    m=(m<10)?'0'+m:m;
    s=(s<10)?'0'+s:s;

     var time= h+":"+m+":"+s+" "+session;
     document.getElementById("Digital Clock Display").innerHTML=time;
     document.getElementById("Digital Clock Display").textContent=time;
     setTimeout(ShowTime, 1000);
} 
ShowTime(); 