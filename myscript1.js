var ui = prompt("Enter a whole number to test a prime number:", "0");
var tv = parseInt(ui,10);

var hits = 0;
var dd = tv;

while (dd > 0) {
  if (tv % dd == 0) {
    hits++;
  }
  dd--;
}

document.write(+ ui + " is");
if (hits > 2) {
  document.write(" not");
}
document.write(" a prime number.");
