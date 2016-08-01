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

var vowelShift = function(string,n){
  var arr = [];
  var arr2 = [];
  var string2 = string.toLowerCase();
  var c = 0;
  var stringarr = [];
  for (var o = 0; o<string2.length; o++) {
    stringarr.push(string[o]);
    if (string2[o] === "a"||string2[o] === "e"||string2[o] === "i"||string2[o] === "o"||string2[o] === "u") {
      arr.push(string[o]);
    }
  }
  for(var p = 0; p<arr.length; p++){
    arr2.push("|");
  }

  while(n > arr2.length){
    n = n - arr2.length;
  }
  while(n < 0){
    n = arr2.length + n;
  }

  for (var i = 0; i < arr.length; i++) {
    if (n + i < arr.length && n + i >= 0) {
      arr2[i+n] = arr[i];
    } else {
      arr2[(n+i) - (arr.length)] = arr[i];
    }
  }

  for (var v = 0; v < stringarr.length; v++) {
    if (stringarr[v].toLowerCase() === "a" || stringarr[v].toLowerCase() === "e" ||
        stringarr[v].toLowerCase() === "i" || stringarr[v].toLowerCase() === "o" ||
        stringarr[v].toLowerCase() === "u") {
      stringarr[v] = arr2[c];
      c = c + 1;
    }
  }

  console.log("Vowel shifted text >>>>>" + stringarr.join(""));
}
//vowelShift(prompt("type some thing"),parseInt(prompt("how many spaces right do you want to move each vowel(put negative values for left)")));
