
function common() {
  var list = {};
  
  for(var i=0; i < str_1.length; i++) {
    list[str_1.charAt(i)] = 1;
  }
 
  const commonLetters =[]; 
  for(var i=0; i < str_2.length; i++) {
    if( list[str_2.charAt(i)] == 1) {
      commonLetters.push(str_2.charAt(i));
    }
  }
  
  list = commonLetters.join(" ");
  console.log(list);
}
const  str_1= "string";
const  str_2 ="strong";

common();
