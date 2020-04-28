
function numberToBin(dec){
    return (dec >>> 0).toString(2);
}

function binaryToNum(dec){
	return parseInt(dec, 2)
}

function convertToBin(){
    document.getElementById("numToBin").value = numberToBin(document.getElementById("intNum").value);
}

function convertToInt(){
    document.getElementById("binToNum").value = binaryToNum(document.getElementById("binNum").value);
}