//selvstændigt lort
/*
var sum = 0;
for(var x = 0; x < 1000; x++){
    if(x % 3 === 0 || x % 5 ===0){
        sum += x;
    }
}
console.log(sum);
*/

//selvstændigt lort
/*
var x;
var y;
var chr="";

for (x = 1; x<=6; x++){
    for(y = 1; y < x; y++){
        chr = chr+"*";
    }
    console.log(chr);
    chr="";
}
*/


// Opgaverne findes på linket herunder:
// https://www.w3resource.com/c-programming-exercises/basic-algo/index.php


//Opgave 12 - pæn løsning

function test(x, y){
    if(x>=20 && x <=30 && y >=20 && y <=30){
        if(x >= y){
            return x;
        }else{
            return y;
        }
    } else if(x >= 20 && y <=30){
        return x;
    }else if(y >= 20 && y <=30){
        return y;
    }else{
        return 0;
    }
}
console.log("pænt: " + test(78, 95));
console.log("pænt: " + test(20, 30));
console.log("pænt: " + test(21, 25));
console.log("pænt: " + test(28, 28));




// Opgave 12 - MEGET GRIMT

/*let arr2 = [78, 95];
let arr3 = [20, 30];
let arr4 = [21, 25];
let arr5 = [28, 28];

if(arr2[0]>=20 && arr2[0] <=30 && arr2[1] >=20 && arr2[1] <=30){
    if(arr2[0] >= arr2[1]){
        console.log(arr2[0]);
    }else{
        console.log(arr2[1]);
    }
} else if(arr2[0] >= 20 && arr2[1] <=30){
    console.log(arr2[0]);
}else if(arr2[1] >= 20 && arr2[1] <=30){
    console.log(arr2[1]);
}else{
    console.log(0);
}

if(arr3[0]>=20 && arr3[0] <=30 && arr3[1] >=20 && arr3[1] <=30){
    if(arr3[0] >= arr3[1]){
        console.log(arr3[0]);
    }else{
        console.log(arr3[1]);
    }
} else if(arr3[0] >= 20 && arr3[1] <=30){
    console.log(arr3[0]);
}else if(arr3[1] >= 20 && arr3[1] <=30){
    console.log(arr3[1]);
}else{
    console.log(0);
}

if(arr4[0]>=20 && arr4[0] <=30 && arr4[1] >=20 && arr4[1] <=30){
    if(arr4[0] >= arr4[1]){
        console.log(arr4[0]);
    }else{
        console.log(arr4[1]);
    }
} else if(arr4[0] >= 20 && arr4[1] <=30){
    console.log(arr4[0]);
}else if(arr4[1] >= 20 && arr4[1] <=30){
    console.log(arr4[1]);
}else{
    console.log(0);
}

if(arr5[0]>=20 && arr5[0] <=30 && arr5[1] >=20 && arr5[1] <=30){
    if(arr5[0] >= arr5[1]){
        console.log(arr5[0]);
    }else{
        console.log(arr5[1]);
    }
} else if(arr5[0] >= 20 && arr5[1] <=30){
    console.log(arr5[0]);
}else if(arr5[1] >= 20 && arr5[1] <=30){
    console.log(arr5[1]);
}else{
    console.log(0);
}*/


//Opgave 3 - returner true hvis summen eller et af integersne er 30
function check(a, b){
    var sum = a + b;

    if(sum === 30 || a === 30 || b === 30){
        return true;
    }else{
        return false;
    }
}
console.log(check(5, 25));



//Opgave 4 - returner true hvis den givne integer er 10 større eller mindre end enten 100 eller 200
// Løsning 1

function withIn(a){
    var diff = 100 - a;
    var diff2 = 200 - a;
    if(diff <=10 && diff >=-10 || diff2 <= 10 && diff2 >= -10){
        return true;
    }else{
        return false;
    }
}
//Returnerer true for værdier mellem 90 og 110 og værdier mellem 190 og 210
console.log("Er tallet 10 større eller mindre end 100?: " + withIn(190));



//løsning 2 - simons løsning med type 2 if-statement
function tjek(a){
    return tjekDiff(100 - a) || tjekDiff(200 - a);
}
function tjekDiff(a){
    if(-10 <= a && a <= 10)
        return true;

    return false
}

//console.log(tjek());




//Opgave 5 - returner true hvis tallet går op i 3 eller 7
var result = [];
var arr = [3, 12, 14, 37];

for(var i = 0; i < arr.length; i++){
    if(arr[i] % 3 === 0 || arr[i] % 7 === 0){
        result.push(1);
    }else{
        result.push(0);
    }
}
console.log(result);

//løsning 2 - kortere løsning

arr4 = [];
function check2(a){
    return (a % 3) === 0 || (a % 7) === 0;
}
for(let i = 0; i < 30; i++){
    //logger tallene op til 29, returnerer true, hvis tallene går op i 3 eller 7
    //console.log(i, check2(i));
    arr4.push(check2(i));
}
console.log(arr4);



//Opgave 6 - tjek on en given temperatur er under 0 og den anden er over 100

arr5 = [];
function tjekkerino(temp1, temp2){
    return (temp1 < 0 && temp2 > 100) || (temp2 < 0 && temp1 > 100);
}

for (let i = -100; i < 200; i += 50){
    for(let j = -100; j < 200; j += 50){
        //console.log("opg 6: " + i, j, tjekkerino(i, j));
        arr5.push(tjekkerino(i, j));
        
    }
}
console.log(arr5);


//Opgave 7 - tjek om nogen af 2 integers er mellem 100 og 200, begge inklusiv
arr6 = [];
function check3(a, b){
    return (100 <= a && a <= 200) || (100 <= b && b <= 200);
}

for(let i = 0; i < 300; i+= 60){
    for(let j = 0; j < 300; j += 60){
        //console.log(i, j, check3(i, j));
        arr6.push(check3(i, j));
    }
}
console.log(arr6);



//Opgave 8 - true hvis et eller flere af 3 tal er mellem 20 og 50, false hvis ikke
arr7 = [];
function check4(a, b, c){
    return (20 < a && a < 50) || (20 < b && b < 50) || (20 < c && c < 50);
}

for(let i = 0; i < 70; i += 15){
    for(let j = 0; j < 70; j += 15){
        for(let k = 0; k < 70; k += 15){
            //console.log(i, j, k, check4(i, j, k));
            arr6.push(check4(i, j, k));
        }
    }
}
console.log(arr7);


//Opgave 10 - fint nærmeste nummer til værdien 100, er de ens returner 0
arr8 = [];
function check5 (a, b){
    

    var differ1 = 100 - a;
    var differ2 = 100 - b;

    if(differ1 === differ2){
        return 0;
    }
    if(differ1 < 0){
        differ1 *= -1;
    }
    if(differ2 < 0){
        differ2 *= -1;
    }

    if(differ1 < differ2){
        return a;
    }else{
        return b;
    }
}

for(let i = 0; i < 200; i+= 40){
    for(let j = 0; j < 200; j += 40){
        //console.log(i, j, check3(i, j));
        arr8.push(check5(i, j));
    }
}
console.log(arr8);



//Opgave 11

arr9 = [];
function check6(a, b){
    if(a >= 40 && a <= 50 || b >= 40 && b <= 50){
        return true;
    }else if(a >= 50 && a <= 60 && b >= 50 && b <=60){
        return true;
    }else{
        return false;
    }
}

for(let i = 30; i < 70; i += 5){
    for(let j = 30; j < 70; j += 5){
        arr9.push(check6(i,j));
    }
}
console.log(arr9);


//Opgave 13
arr10 = [];
function check7(a, b){
    return (a % 10) == (b % 10);
}

for(let i = 0; i < 150; i += 27){
    for(let j = 0; j < 150; j += 22){
        arr10.push(check7(i, j));
    }
}
console.log(arr10);


//Opgave 18
arr11 = [];
function check8(a, b){
    return a === 5 || b === 5 || (a + b) === 5 || (a - b) === 5;
}

for(let i = 0; i < 25; i +=5){
    for(let j = 0; j < 25; j += 5){
        arr11.push(check8(i, j));
    }
}console.log(arr11);


//Opgave 19
arr12 = [];
function check9(a){
    return (a % 13) === 0 || (a % 13) === 1;
}

for(let i = 0; i < 50; i += 3){
    arr12.push(check9(i));
}
console.log(arr12);


//Opgave 21
arr13 = [];
function check10(a){
    return (a % 10) == 2;
}

for(let i = 0; i < 50; i += 2){
    arr13.push(check10(i));
}
console.log(arr13);

//Opgave 23
arr14 = [];
function check11(a, b, c){
    return a == (b + c) || b == (a + c) || c == (a + b);
}

for(let i = 0; i < 50; i += 20){
    for(let j = 0; j < 50; j += 15){
        for(let k = 0; k < 50; k += 15){
            arr14.push(check11(i, j, k));
        }
    }
}
console.log(arr14);

