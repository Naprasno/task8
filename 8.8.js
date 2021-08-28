let fruits = new Map([
    ["apple", "green"],
    ["strawberry", "red"],
    ["blueberry", "blue"]
  ]);
  
  fruits.forEach((value, key, map) => {
    console.log(`Ключ — ${key}, значение — ${value}`); 
  });
  