



function keyValueMapping(str) {
  var output = {};
  var char = str.split('')

 for (var i = 0; i < char.length; i++) {
  if (char[i] in output) {
     output[char[i]].push(i);
   }
   else {
    output[char[i]] = [i];
    }
  }
 return output;
}

console.log(keyValueMapping('Lighthouse in the house'));

