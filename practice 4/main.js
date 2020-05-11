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

//løsning 2 - kortere løsning, fylder meget i consol, loggen kommenteret ud
function check2(a){
    return (a % 3) === 0 || (a % 7) === 0;
}
for(let i = 0; i < 30; i++){
    //logger tallene op til 29, returnerer true, hvis tallene går op i 3 eller 7
    //console.log(i, check2(i));
}
    
