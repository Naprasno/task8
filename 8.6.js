let arr = [1,1,1,1];
let ln1 = arr.length
// console.log(`Длина массива ${ln1}`); //длина массива
	
let el;  //элемент
let count = 1; //кол-во совпадений

for (let i = 0; i < ln1; ++i){
    el = arr[i];
    for (var j = i+1; j < ln1; ++j){
        if (el === arr[j]){
            count++;
            break;
        }
    }
}

// console.log(`Кол-во совпадений ${count}`) //кол-во совпадений

if (count == arr.length) {
    console.log("true");
}
else{
    console.log("false");
}
