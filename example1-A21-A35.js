// A21

function getResult(salary) {
    const bimeh = 0.07;
    const maliyat = 0.10;

    let bimehFinal = salary * bimeh;
    let maliyatFinal = salary * maliyat;
    let payment = salary - (bimehFinal + maliyatFinal);
}




// A22

function getResult(lastPrice, currentPrice) {
    let tavarom = (currentPrice - lastPrice) / lastPrice;
    let newYearPrice = (lastPrice + currentPrice) * tavarom;
}




// A23  

function getResult(workerCount) {
    const currentPayment = 7500000;
    const upPrice = 0.135;

    let onWorkerPayment = currentPayment * upPrice;

    let getResult = onWorkerPayment * workerCount * 12;
}






// A25  

function getResult(weight) {
    let result = weight * 1000;

}




// A26  

function getResult(salary) {
    let result = salary * 0.15;

}



// A27  

function getResult(length, height) {
    let result = 0.5 * height * length;

}




// A28  

function getResult(numOne, numTwo) {
    let sum = numOne + numTwo;
    let multi = numOne * numTwo;
    let sub = numOne % numTwo;
    let div = numOne / numTwo;
}



// A29  

function getResult(x) {
    let result = 1 / ((x * x) + x + 1);
}




// A30  

function getResult(jaryan, moghavemat) {
    let result = moghavemat * jaryan;
}




// A31  

function getResult(jaryan, moghavemat) {
    let result = moghavemat * jaryan;
}



// A32  

function getResult(firstSpeed, secondSpeed, time) {
    let result = ((secondSpeed - firstSpeed) * 60) / time;
}



// A33  

function getResult(radius) {
    const pi = 3.14;

    let ghoter = 2 * radius;
    let length = 2 * radius * pi;
    let area = pi * (radius * radius);
}




// A34  

function getResult(year) {
    let days = year * 365.25;
    let month = days / 30;
    let seconds = days * 24 * 60 * 60;
}



// A34  

function getResult(numb) {
    for(var i = 0 ; i < numb.length; i ++){
        document.write(numb[i] + "   ");
    }
}