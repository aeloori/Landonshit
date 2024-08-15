const monthList=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];


function getClock(){
    const clockCal=new Date();

    let hour=clockCal.getHours().toString().padStart(2,0);
    let minutes=clockCal.getMinutes().toString().padStart(2,0);
    let seconds=clockCal.getSeconds().toString().padStart(2,0);

    let time=hour+":"+minutes+":"+seconds;
    // console.log(time);
    document.getElementById("clock").textContent=time;

    let date=clockCal.getDate();
    let month=clockCal.getMonth();
    let year=clockCal.getFullYear();
    let todaysDate=date+"-"+monthList[month]+"-"+year;
    // console.log(todaysDate);
    document.getElementById('date').textContent=todaysDate;
}

getClock();

setInterval(getClock,1000);

