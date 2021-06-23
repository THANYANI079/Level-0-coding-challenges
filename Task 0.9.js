

var printVowels = str => {
  var vowels=['a','e','i','o','u'];
  var str_array=str.replace(/[^a-zA-Z]/g, '').split('');

  var vowels_filtered=str_array.filter( a => vowels.includes(a.toLowerCase()));

  return vowels_filtered.join(', ');
}

console.log(printVowels('IshmAel'))
