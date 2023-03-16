//Numero1
/*
const kmh = 36;
const ms = 20;

console.log(kmh + " км/ч соответствует " + kmh/3.6 +" м/с");
console.log(ms + " м/с соответствует " + ms*3.6 +" км/ч");

//Numero2

const a = 20;
const b = 20;
const c = 20;

let p=(a+b+c)/2;
let s =(Math.sqrt(p*(p-a)*(p-b)*(p-c)));

if (a<b+c && b<a+c && c<a+b){
    console.log("Треугольник существует");
    console.log("периметр = " + p*2);
    console.log("площадь = " + s);
    console.log("Соотношение = " + (p*2/s));
}

else{
    console.log("Треугольник не существует");
}

//Numero3

let N = prompt("Введите число)");
if(N%1==0){
for (i=0;i<N;i++){
    if(i%5==0){
        console.log(i + " fizz buzz");
    }
    else if(i%2==0){
        console.log(i + " fizz");
    }
    else{
        console.log(i + " buzz");
    }
}
}
else{
    alert("Вы ввели не число");
}

//Numero4

let str="";
for (i=1;i<=12;i++){
    if (i%2==1){
        for(j=0;j<i;j++){
            str+="*";
        }
    }
    else{
        for(j=0;j<i;j++){
            str+="#";
        }
    }
    str+="\n";
}
str+="||";
console.log(str);

//Numero5

const quest = 15;
let flag = true;

while (flag){
    let N = prompt("Введите число)");
    if(N==quest){
        console.log("Конгра");
        flag=false;
    }
    else if (N>quest){
        console.log("Ваше число больше");
    }
    else if (N<quest){
        console.log("Ваше число меньше");
    }
    else{
        console.log("Вы ввели не число");
    }
}

//Numero6

let n = 3;
let x = 1;
let y = 3;

if (n%x==0 && n%y==0){
    console.log("n = " + n + ", x = " + x + ", y = " + y + " => true")
}
else{
    console.log("n = " + n + ", x = " + x + ", y = " + y + " => false")

}

n=12;
x=2;
y=6;

if (n%x==0 && n%y==0){
    console.log("n = " + n + ", x = " + x + ", y = " + y + " => true")
}
else{
    console.log("n = " + n + ", x = " + x + ", y = " + y + " => false")

}

n=100;
x=5;
y=3;

if (n%x==0 && n%y==0){
    console.log("n = " + n + ", x = " + x + ", y = " + y + " => true")
}
else{
    console.log("n = " + n + ", x = " + x + ", y = " + y + " => false")

}

n=12;
x=7;
y=5;

if (n%x==0 && n%y==0){
    console.log("n = " + n + ", x = " + x + ", y = " + y + " => true")
}
else{
    console.log("n = " + n + ", x = " + x + ", y = " + y + " => false")

}

//Numero7

let month = prompt("Введите месяц");

switch (month){
    case '1':
        console.log("месяц " + month + " => 1 квартал");
        break;
    case '2':
        console.log("месяц " + month + " => 1 квартал");
        break;
    case '3':
        console.log("месяц " + month + " => 1 квартал");
        break;
    case '4':
        console.log("месяц " + month + " => 2 квартал");
        break;
    case '5':
        console.log("месяц " + month + " => 2 квартал");
        break;
    case '6':
        console.log("месяц " + month + " => 2 квартал");
        break;
    case '7':
        console.log("месяц " + month + " => 3 квартал");
        break;
    case '8':
        console.log("месяц " + month + " => 3 квартал");
        break;
    case '9':
        console.log("месяц " + month + " => 3 квартал");
        break;
    case '10':
        console.log("месяц " + month + " => 4 квартал");
        break;
    case '11':
        console.log("месяц " + month + " => 4 квартал");
        break;
    case '12':
        console.log("месяц " + month + " => 4 квартал");
        break;
    default:
        console.log("Такого месяца нет");
}
*/


// Объекты

//Numero 1

/*console.log("Numero1 \n -----");

function convertSpeed (value, direction) {
    let res=0;
    if (direction=='toMS'){
        res=value/3.6;
    }
    else if (direction=='toKMH'){
        res=value*3.6;
    }
    console.log(res);
}

convertSpeed(36, 'toMS');
convertSpeed(36, 'toKMH');

//Numero2

console.log("Numero2 \n -----");

function absValue(value){
    let res;
    if (value<0){
        res = 0-value;
    }
    else{
        res=value;
    }
    return res;
}

console.log(absValue(-2));
console.log(absValue(100));
console.log(absValue(0));

//Numero3

console.log("Numero3 \n -----");

let student ={
    group: prompt("Введите группу"),
    lastname: prompt("Введите фамилию"),
    firstname: prompt("Введите имя")
}

console.log("Список свойств: group, last_name, first_name");
console.log("Студент " + student.lastname + " " + student.firstname + " учится в " + student.group + " группе");

//Numero4

console.log("Numero4 \n -----");

function randomNumber(minval, maxval){
    let res;
    res=Math.random()*(maxval-minval+1)+minval;
    res=Math.floor(res);
    return res;
}

console.log(randomNumber(0,10));
console.log(randomNumber(-10,10));

//Numero5

console.log("Numero5 \n -----");

function sampleArray (arr, col){
    let resarr=[];
    for (i=0;i<col;i++){
        resarr[i]=arr.at(randomNumber(0,(arr.length-1)));
    }
    return resarr;
}

console.log(sampleArray([1,2,3,4], 2));
console.log(sampleArray([1,2,3,4], 3));
*/

//Laba3

const regmodal = document.getElementById("regmodal");
const regbtn = document.getElementById("regbtn");
const submitbtn = document.getElementById("submitbtn");
const passbtn = document.getElementById("passbtn");
const password = document.getElementById("password");
const email = document.getElementById("email");
const regform = document.getElementById("regform");
const pasval = document.getElementById("pasval");
const emval = document.getElementById("emval");
const field = document.getElementById("field");
const bodydiv = document.getElementById("bodydiv");


document.body.onclick = function(event){
    if (event.target == bodydiv)
    {
        regmodal.style.display = "none";
    }
}


regbtn.onclick = function () {
    regmodal.style.display = "block";
}

regform.onsubmit = function(event){
    event.preventDefault();


    let formData = new FormData();

    formData.append('email', email.value);
    formData.append('password', password.value);

    for(let [name, value] of formData) {
        console.log(`${name} = ${value}`);
    }

    regmodal.style.display = "none";
    
}

passbtn.addEventListener("pointerdown", ()=>{
    password.type="text";
})

passbtn.addEventListener("pointerup", ()=>{
    password.type="password";
})


email.onblur = function(){
    if(this.validity.typeMismatch){
        this.setCustomValidity("Адрес должен содержать @. Пример: example@example.com");
        emval.textContent="Адрес должен содержать @. Пример: example@example.com";
    }
    else{
        this.setCustomValidity("");
        emval.textContent="";
    }
}

password.onblur = function(){
    
    if(this.validity.tooShort){
        this.setCustomValidity("Пароль слишком простой. Пароль должен содержать не меньше 6 символов");
        pasval.textContent="Пароль слишком простой. Пароль должен содержать не меньше 6 символов";
    }
    else{
        this.setCustomValidity("");
        pasval.textContent="";
    }
}

//validity.tooshort

//текст, заменить проверку