function clock()
{
   var date=new Date();
   var hh=date.getHours();
   var mm=date.getMinutes();
   var ss=date.getSeconds();
   var day=date.getDay();
   var dd=date.getDate();
   var mo=date.getMonth();
   var yy=date.getFullYear();
   var am_pm="Am";
   if(hh>12)
   {
        am_pm="pm"
        if(hh>=13)
        {
            hh-=12;
        }
   }
   if(hh==0)
   {
      hh=12; 
   }
    var fullTime=`${hh}:${mm} ${am_pm}`
    document.getElementById("Time").innerHTML=fullTime;
    if(mo==0)
    {
        m0="January"
    }
    else if(mo==1)
    {
        mo="Febraury"
    }
    else if(mo==2)
    {
        mo="March"
    }
    else if(mo==3)
    {
        mo="April"
    }
    else if(mo==4)
    {
        mo="May"
    }
    else if(mo==5)
    {
        mo="June"
    }
    else if(mo==6)
    {
        mo="July"
    }
    else if(mo==7)
    {
        mo="August"
    }
    else if(mo==8)
    {
        mo="September"
    }
    else if(mo==9)
    {
        mo="October"
    }
    else if(mo==10)
    {
        mo="November"
    }
    else
    {
        mo="December"
    }
    
    var fulldate=`${dd}/${mo}/${yy}`
    document.getElementById("Date").innerHTML=fulldate;
    switch(day)
    {
        case 0: day="Sunday"
        document.body.style.backgroundImage="url(sun.jpeg)"
        break;
        case 1: day="Monday"
        document.body.style.backgroundImage="url(mon.jpg)"
        break;
        case 2: day="Tuesday"
        document.body.style.backgroundImage="url(tues.jpeg)"
        break;
        case 3: day="Wednesday"
        document.body.style.backgroundImage="url(wed.jpeg)"
        break;
        case 4: day="Thursday"
        document.body.style.backgroundImage="url(thurs.jpeg)"
        break; 
        case 5: day="Friday"
        document.body.style.backgroundImage="url(fri.jpeg)"
        break;   
        case 6: day="Saturday"
        document.body.style.backgroundImage="url(sat.jpeg)"
        break;    
    }    
    document.getElementById("Day").innerHTML=day;
    document.getElementById("Sec").innerHTML=ss;
    var updateTheTime=setTimeout(clock,1000);
}

function greet()
{
   var date=new Date();
   var hh=date.getHours();
   if(hh>6 && hh<=12)
   {
    document.getElementById("GreetMessage").innerHTML="Good Morning"
    document.getElementById("bgVid").src="sunrise vid.mp4"
    document.getElementById("bgVid").style.width="100%"
   }
   else if(hh>12 && hh<=16)
   {
    document.getElementById("GreetMessage").innerHTML="Good Afternoon"
    document.getElementById("bgVid").src="afternoon vid.mp4"
    document.getElementById("bgVid").style.width="100%"
    document.getElementById("bgVid").style.bottom="0px"
   }
   else if(hh>16 && hh<=20)
   {
    document.getElementById("GreetMessage").innerHTML="Good Evening"
    document.getElementById("bgVid").src="sunset vid.mp4"
    document.getElementById("bgVid").style.width="100%"
    document.getElementById("bgVid").style.bottom="0px"
   }
   else
   {
    document.getElementById("GreetMessage").innerHTML="Good Night"
    document.getElementById("GreetMessage").style.color="white"
    document.getElementById("bgVid").src="moon vid.mp4"
    document.getElementById("bgVid").style.width="100%"
    document.getElementById("bgVid").style.bottom="0px"
   }
}
greet()

function closewind()
{
    document.getElementById("greet").style.display="none"
}
var a=setTimeout(closewind,5000);