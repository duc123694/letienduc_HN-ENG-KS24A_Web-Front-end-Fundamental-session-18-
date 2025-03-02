let a=Number (prompt("Mời bạn nhập số a"));
    let b=Number (prompt("Mời bạn nhâp số b"));
    let operation=prompt("Mời bạn nhập các phép toán +;-;*;/");
    let result;
    switch(operation){
        case "+":
            result = a + b;
            break;
    case "-":
            result = a - b;
            break;
    case "*":
            result = a * b
        break;
    case "/":
        result = b !== 0 ? a / b : "Không thể chia cho 0";
        break;
    default:
        result = "Phép toán ko hợp lệ"
    }
    alert("Kết quả: " + result);
