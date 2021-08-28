let arr = [1,3,5,0,20,4,"апвп",null,':%'];
let ln1 = arr.length
let countEven = 0 //кол-во чет
let countOdd = 0 //кол-во нечет

for (let i = 0; i < ln1; ++i){    
    if(arr[i] == 0){    
     console.log(arr[i]) //нулевой элемент выводится отдельно, остальное считаем
    }
    if (arr[i]>0){  
        let result = arr[i]%2
        if (result == 0) {
            countEven=countEven+1
        } else if (result == 1) {
            countOdd=countOdd+1
        }
    }
}
console.log(`Кол-во четных ${countEven}`)
console.log(`Кол-во нечетных ${countOdd}`)
