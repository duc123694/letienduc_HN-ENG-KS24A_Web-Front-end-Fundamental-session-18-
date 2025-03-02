let a=Number(prompt("Mời bạn nhập cạnh thứ nhất"));
let b=Number(prompt("Mời bạn nhập cạnh thứ hai"));
let c=Number(prompt("Mời bạn nhập cạnh thứ ba"));
if(a + b >c && a+c>b && b+c>a){
    if(a===b && b===c){
        console.log("Đây là tam giác đều");
    }else if(a===b||b===c||a===c&&a ** 2 +b**2 ===c**2||a ** 2+ c** 2 ===b**2|| b**2 + c**2 ===a**2){
        console.log("Đây là tam giác đều vuông cân");
    }else if(a ** 2 +b**2 ===c**2||a ** 2+ c** 2 ===b**2|| b**2 + c**2 ===a**2){
        console.log("Đây là tam giác vuông");
    }else {
        console.log("Đây là tam giác thường")
    }
}else{
    console.log("Độ dài 3 cạnh tam giác sai");
}
