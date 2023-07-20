// A40

function getResult(m , n) {
    let a = (m * m) - (n * n);
    let b = 2 * m * n;
    let c = (m * m) + (n * n);
}



// A41

function getResult(a , b) {
    let result1 = (a * a) + (b * b);
    let result2 = (a * a * a) + (b * b * b);
}



// A42

function getResult(counter , price) {
    let result = counter * price;
}



// A43

function getResult(xOne , xTwo, yOne, yTwo) {
    let xResult = xTwo - xOne;
    let yResult = yTwo - yOne;
    let resultOne = Math.pow(xResult, 2) + Math.pow(yResult, 2);
    let result = Math.sqrt(resultOne);
}



// A44

function getResult(x, y) {
    let result = Math.pow(x, 3) + (2 * Math.pow(x, 2)) + (3 * y) - 5;
}




// A45

function getResult(x, y) {
    let x = x + y;
    let y = x - y;
    let x = x - y;
}




// A46

function getResult(pages, memory) {
    const lines = 30;
    const lineBytes = 80;
    
    //بدست اوردن تعداد بایت های یک فلش
    memory = memory * 1024000;

    // محاسبه تعداد بایت های یم صفحه
    let bookBytes = pages * lines * lineBytes;

    // محاسبه تعداد صفحات قابل گنجایش در یک فلش مموری
    // توجه شود عدد بدست آمده اعشاری است
    let pageCount = memory / bookBytes;

    // بدست آوردن قسمت صحیح 
    pageCount = Number(pageCount);
}



// A47

function getResult(mile, foot) {
    const perMile = 1609.35;
    const perFoot = 0.30480;

    let meter = mile * perMile;
    let kilometer = foot * perFoot;
}





// A48

function getResult(salary, workTime) {
    let perHour = salary * workTime;
    perHour = 0.9 * perHour;
}




// A49

function getResult() {
    let area = 13 * 16;
    let kashi = 2 * 3;

    // تعداد موزاییک مصرفی
    let workArea  = area / kashi;

    // مساحتی که با کاشی فرش نمی شود
    let subArea = area % kashi;
}




// A50

function getResult(a, b, c) {
    let x = (b - c) / (3 - a);
    let y = (3 * x) + c;
}