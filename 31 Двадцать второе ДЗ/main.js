// Задача 1
function calculateFinalPrice(basePrice, discountPercent, taxRate) {
    const discountAmount = basePrice * (discountPercent / 100);
    const priceAfterDiscount = basePrice - discountAmount;
    const taxAmount = priceAfterDiscount * taxRate;
    return priceAfterDiscount + taxAmount;
}

console.log("=== Задача 1 ===");
console.log(calculateFinalPrice(1000, 20, 0.13)); 
console.log(calculateFinalPrice(500, 10, 0.2));   
console.log(calculateFinalPrice(200, 0, 0.13));   
console.log(calculateFinalPrice(1000, 50, 0.1));  

// Задача 2
function checkAccess(username, password) {
    if (username === "admin" && password === "123456") {
        return "Доступ разрешен";
    } else {
        return "Доступ запрещен";
    }
}

console.log("\n=== Задача 2 ===");
console.log(checkAccess("admin", "123456")); 
console.log(checkAccess("admin", "wrong"));   
console.log(checkAccess("user", "wrong"));    

// Задача 3
function getTimeOfDay(hour) {
	if (hour >= 0 && hour <= 5) {
		return "Ночь";
	} else if (hour >= 6 && hour <= 11) {
		return "Утро";
	} else if (hour >= 12 && hour <= 17) {
		return "День";
	} else if (hour >= 18 && hour <= 23) {
		return "Вечер";
	} else return "Некорректное время";
}

console.log("\n=== Задача 3 ===");
console.log(getTimeOfDay(3));   
console.log(getTimeOfDay(8));   
console.log(getTimeOfDay(14));  
console.log(getTimeOfDay(20));  
console.log(getTimeOfDay(25));  
console.log(getTimeOfDay(-1));  

// Задача 4
function findFirstEven(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            return i;
        }
    }
    return "Чётных чисел нет";
}

console.log("\n=== Задача 4 ===");
console.log(findFirstEven(1, 10));  
console.log(findFirstEven(2, 10));  
console.log(findFirstEven(3, 10)); 
console.log(findFirstEven(5, 7));   
console.log(findFirstEven(9, 9));   
console.log(findFirstEven(11, 13)); 
console.log(findFirstEven(1, 1));  











