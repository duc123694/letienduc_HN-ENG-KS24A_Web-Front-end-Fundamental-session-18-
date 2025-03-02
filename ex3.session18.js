let login_name=prompt("Mời nhập tên đăng nhập");
if(login_name==="ADMIN"){
    let password=prompt("Mời nhập mật khẩu");
    if(password==="TheMaster"){
        document.write("Welcome");
    }else if(!password){
        document.write("Cancelled");
    }else{
        document.write("Wrong password")
    }
}else if(!login_name){
    document.write("Cancelled");
}else{
    document.write("I Don’t know you")
}