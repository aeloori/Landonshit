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

document.addEventListener("keydown",e =>{
    console.log(e.key);
    if(e.key.toLowerCase()=='/'){
        document.getElementById("webSearch").focus();
        document.getElementById('webSearch').addEventListener("keydown", e=>{
           if(e.key=="Enter")
            {
                let query=document.getElementById('webSearch').value;
                let url="https://www.google.com/search?q="+query;
                window.open(url, "_self");
            }
            else if(e.key=="Escape"){
                document.getElementById("webSearch").blur();
            }
        });
    }
});


