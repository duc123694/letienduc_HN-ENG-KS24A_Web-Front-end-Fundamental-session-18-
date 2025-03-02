let math=Number(prompt("Moi nhap diem mon toan")); 
let literature=Number(prompt("Moi nhap diem mon van"));
let english =Number(prompt("Moi nhap diem mon anh"));
const avgPoint = (math + literature + english)/3
if (avgPoint >= 8 ){
    console.log("Học lực giỏi");
}else if(avgPoint >= 6.5 && avgPoint<8){
    console.log("Học lực khá");
}else if(avgPoint >=5 && avgPoint < 6.5){
    console.log("Học lực trung bình");
}else {
    console.log("Học lực yếu");
}