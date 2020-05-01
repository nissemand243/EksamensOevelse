var data = "ssssiiiiiimoonhfdsak"

var results = [""];
var substring ="";
//For loop, der kører fra starten af min string til slutningen og danner et array
for (var i = 0; i < data.length; i++){
    
//hvis substring allerede indeholder dataelementet vil den fjerne det 
    if(substring.includes(data[i])){
        substring = substring

        //slice returnerer elementerne defineret, det vil sige indexOf +1 vil betyde at det element den møder, der er en dublikant, vil blive skåret fra
            .slice(
                //indexOF returnerer positionen af elementet i array'et, hvor den møder et element, den allerede har tilføjet
                substring.indexOf(data[i]) + 1,
                substring.length
            );

    }
//substring er lig det array der dannes af for loopet
        substring += data[i];

        //hvis substring er længere end results
        if(substring.length > results[0].length){
            //skal results danne et array over substring
            results = [substring];

            //ellers hvis substring er lige så lang som results
        }else if(substring.length === results[0].length){
            
            //skal results pushe substring ind i arrayet
            results.push(substring);
        }
     
}

console.log(results);
