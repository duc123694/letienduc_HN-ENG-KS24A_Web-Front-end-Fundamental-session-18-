let year=prompt("Moi nhap so nam kinh nghiem cua minh");
if(year<1){
    console.log("Mới vào nghề");
}else if(year <3 && year >= 1){
    console.log("Nhân viên có kinh nghiệm");
}else if( year <6 && year >= 4){
    console.log("Chuyên viên");
}else if(year > 6){
    console.log("Quản lý");
}