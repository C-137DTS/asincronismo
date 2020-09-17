function sum(num1, num2){
    return num1 + num2
}

function calc(num1, num2, callback){
    return callback(num1, num2)
}

print(calc(5, 3, sum))

function date(callback) {
    print(new Date)
    setTimeout(() => {
        let date = new Date
        callback(date)
    }, 3000)
}

function printDate(dateNow) {
    print(dateNow)
}