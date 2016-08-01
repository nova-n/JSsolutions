/*
The MIT License (MIT)
Copyright (c) 2016 Nathan DS

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/*
 * Solution partially inspired by:
 * http://www.se16.info/js/factor.htm
 * Author of code:Henry Bottomley
 * I used this to prime factorize in order to find the lcm of a number set.
 */


var lcm = function(arr){
  var arra = arr;
  var inval = [];

  /*
   Will sort values numerically and ignores negatives
   */
  arra.sort(function(a,b){return Math.abs(a) - Math.abs(b);});
  for (var retar = 0; retar < arra.length; retar++) {
    if (isNaN(arra[retar])) {
      parseInt(arra[retar]);
    }
  }

  // sets null to 1
  for (var nullChecker = 0; nullChecker < arra.length; nullChecker++) {
     if (isNaN(arra[nullChecker])) {
       inval.push(arra[nullChecker]);
     }
    if (arra[nullChecker] === null) {
      arra[nullChecker] = 1;
      nullChecker = 0;
    }
  }

  // calculates prime factors of all numbers
  var primes = [];
  var myPrimes = [];
  var answ = 1;
  //itterates through array
  for (var ib = 0; ib < arra.length; ib++) {
    var myCount = 0;
    var primeCount = 0;
    var initcopy = 0;
    var newnum = Math.abs(arra[ib]);
    var newtext = "";
    var checker = 2;
    myCount = 0;
    //if there are no invalid entries such as "a" or "true", then...
    if (inval.length === 0) {
      while (checker*checker <= newnum){
        //checks the divisibility(without remainder)
        if (newnum % checker === 0 ) {
          //if the array of primes is empty, add the "checker"
          if (myPrimes.length === 0) {
            myPrimes.push(checker);
          }
          if (newnum !== 1 ){
            //checks the current factor
            while (newnum % checker === 0) {
              newnum = newnum/checker;
              //counts the number of times the number is divisible by the
              //current factor
              myCount++;
            }
          }
        }
        //if the number is no longer divisible by the factor,
        //it counts the number of times the factor appears in the array
        if (newnum % checker !== 0) {
          for (var t = 0; t < myPrimes.length;t++) {
            if (myPrimes[t] === checker) {
              primeCount++;
            }
          }
          //if the factor repeats less in the array than when it was counted
          //previously, it will add those values to the array.
          //this prevents an excess of a factor
          if (primeCount === 0 ) {
            for (var x = 0; x < myCount; x++) {
              myPrimes.push(checker);
            }
            myCount = 0;
          }

          if (myCount > primeCount) {
            for (var y = 0; y < myCount - primeCount; y++) {
              myPrimes.push(checker);
            }
            myCount = 0;
            primeCount = 0;
          }

          checker++;
          myCount = 0;
          primeCount = 0;
        }
      }

      if ((newnum/checker) % checker !== 0) {
        for (var w = 0;w < myPrimes.length;w++) {
          if (myPrimes[w] === checker) {
            primeCount++;
          }
        }

        if (myCount > primeCount) {
          myPrimes.push(checker);
          primeCount = 0;
        }
        primeCount = 0;
      }

      if (newnum !== 1 ) {
        newtext = newtext + newnum;
        for (var f = 0;f < myPrimes.length; f++) {
          if (myPrimes[f] === newnum) {
            primeCount++;
          }
        }

        if ( 1 > primeCount) {
          myPrimes.push(newnum);
          for (var hgj = 0; hgj <myPrimes.length; hgj++) {
            if (myPrimes[hgj] === checker) {
            }
          }
        }
      }
    }
  }
  //finds lcm by multiplying all prime factors in array
  if (inval.length === 0) {
    for (var lcmr = 0; lcmr < myPrimes.length; lcmr ++) {
     answ = answ * myPrimes[lcmr];
    }
   console.log("lcm>>>>> " + answ);
   return answ;
   }
   if (inval.length !== 0) {
     console.log("invalid entries>>>>> " + inval);
     return inval;
   }
  };
    //lcm([50, 65, 42, 63, -58, 12, 58, 92, 56, 71, 50]);
