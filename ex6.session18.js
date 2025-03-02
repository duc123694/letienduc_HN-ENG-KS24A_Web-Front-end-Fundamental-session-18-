let year=prompt("Mời bạn nhập năm");
if(year % 4 === 0 && year % 100 !== 0){
    console.log("Đây là năm nhuận");
}else{
    console.log("Đây ko phải năm nhuận");
}