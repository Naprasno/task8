function isPrimeNum() {
    let num = prompt("Введите число");
    if ((num > 1) && (num <= 1000)){
        let result = "простое";
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                result = "составное"; // если поделилось
                break;
            }
        }

    alert(`Число ${num} ${result}`);

    }
    else {
        alert("данные неверны")
    }
}

isPrimeNum();