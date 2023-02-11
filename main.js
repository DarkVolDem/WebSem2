//Numero1

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