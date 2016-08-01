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

function lastDigit(str1,str2){
  var lastnum = 0;
  var e = 0;
  var w = "";
  var firstlast = parseInt(str1[str1.length-1]);
  var arr = [];

  for (var p = 1;p<5;p++) {
    w = Math.pow(firstlast,p).toString();
    arr.push(parseInt(w[w.length-1]));
  }//move last value of arr to front. Now remainder 0 = 0th pos, remainder 1 = pos 1, and so on
  arr.unshift(arr[arr.length - 1]);
  arr.splice(arr.length-1,1);
  if (str2.length === 1) {
    e = parseInt(str2[str2.length -1 ]);
  }
  if (str2.length > 1) {
   e =  parseInt(str2[str2.length-1]) + parseInt(str2[str2.length-2])*10;
  }
  if (parseInt(str2) !== 0) {
  lastnum = arr[e%4];
    console.log("lastDigit >>>> " + lastnum);
    return lastnum;
  }else{
    console.log(1);
    return 1;
  }
};
//lastDigit(["23523522","2"]);


