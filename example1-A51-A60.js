const pi = 3.14;

// A51

function getResult(degree) {
    degree = (degree * pi) / 180;
}



// A52

function getResult(degree) {
    degree = (degree * 180) / pi;
}



// A53

function getResult(degree) {
    degree = 1.8 * degree + 32;
}



// A54

function getResult(radius) {
    let rectangelArea = 4 * (radius * radius);
    let circleArea =  pi * (radius * radius);
}




// A55

function getResult(data) {
    let sum = 0;

    for(var i = 0; i < 3; i ++){
        sum = Number(data[i]) + sum;
    }
}




// A56

function getResult(data) {
    let sum = 0;

    for(var i = 0; i < 4; i ++){
        sum = Number(data[i]) + sum;
    }
}



// A57

function getResult(data) {
    let sum = 0;

    for(var i = 0; i < 3; i ++){
        sum = (1 / Number(data[i])) + sum;
    }
}


// A58

function getResult(a, b, c) {
    let result = (c * (b + a)) / 2
}