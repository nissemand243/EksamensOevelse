//selvstændigt lort
var sum = 0;
for(var x = 0; x < 1000; x++){
    if(x % 3 === 0 || x % 5 ===0){
        sum += x;
    }
}
console.log(sum);

//selvstændigt lort
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

//opgave 5 - ikke lavet færdig
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
let arr2 = [78, 95];
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
}




