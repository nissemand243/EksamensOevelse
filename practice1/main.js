var set1 = [5, 7, 2, 3, 8];
var set2 = [6, 0, 1, 9, 4];


var target = 10;


var smallestDiff = target - (set1[0] + set2[0]);

if(smallestDiff < 0){
    smallestDiff = smallestDiff * -1;
}

var results = [[set1[0], set2[0]]];

for(var num1 of set1){
    for(var num2 of set2){
        var sum = num1 + num2;
        var diff = target - sum;
        if(diff < 0){
            diff = diff * -1;
        }

        if(diff < smallestDiff){
            results = [[num1, num2]];
            smallestDiff = diff;
        } else if(diff === smallestDiff){
            results.push([num1, num2]);
        }
    }
}
console.log(results);

