let hour=Number(prompt("Mời bạn nhập số giờ (0-23)"));
let minute=Number(prompt("Mời bạn nhập số phút(0-59)"));
let second=Number(prompt("Mời bạn nhập số giây(0-59)"));
let hour_12;
if(hour >= 0 && hour < 24 && minute >=0 && minute < 60 && second >= 0 && second < 60){
    if( hour >12){
        hour_12 === hour - 12;
        console.log(`${hour}:${minute}:${second} PM`)
    }
}else{
    console.log("Mời bạn nhập lại");
}