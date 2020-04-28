#Binary numbers converter

First i made the inputfields in HTML, 1 for the integer and 1 for the binary number.
Then i made 1 button for each of the converters
Finaly i made the field of which displays the result being either a binary number acording to the input integer -
or an integer acording to the input binary number.

then i made a script using the "toString(2)" function to a placeholder called "dec"
I made a script using "parseInt(dec, 2)" to parse the binary number back to an integer value

I then call the value of the result field and make it equal to
The value of the input field after is has been processed by the "toString(2)" function. (I 
call the value of the input field indside and place it instead of the dec placeholder in 
the function numberToBin

I do the same thing, except i use the "parseInt(dec,2)" instead of "toString(2)" with the 
"binaryToNum" convertion.
