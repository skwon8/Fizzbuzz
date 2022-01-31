// For each number that is a multiple of 3, print "Fizz"
// For each number that is a multiple of 5, print "Buzz"
// For numbers which are a multiple of both 3 and 5, print "FizzBuzz"
// All other numbers should just print normally

// for loop 1-100 
// inside of the for loop check if number is evenly div by 3
// if statement inside the for loop

for (var i = 1; i <= 100; i++) {
    if (i % 15 ==0) {
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 ==0) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
}