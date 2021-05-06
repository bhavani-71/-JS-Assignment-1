let s=prompt("Enter a string:");
var newString=""
for (var i = s.length - 1; i >= 0; i--) { 
    newString += s[i];
    
//document.write(newString);
}
if(s==newString){
    document.write(s+" is a Palindrome");
}
else{
    document.write(s+" is not a Palindrome");
}