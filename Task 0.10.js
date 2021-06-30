    
    var maxInput = 26;

    function commonLetters(str1,str2)
    {

        let result1 = new Array(maxInput); 
        let result2 = new Array(maxInput);
      
        for(let i=0;i<maxInput;i++)
        {
            result1[i]=0;
            result2[i]=0;
        }
   
        let length1 = str1.length;
        let length2 = str2.length;
   
        for (let i = 0 ; i < length1 ; i++)
           result1[str1[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
   
        for (let i = 0 ; i < length2 ; i++)
           result2[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
   
  
        for (let i = 0 ; i < maxInput ; i++)
        {
            if (result1[i] != 0 && result2[i] != 0)
            {
              
                for (let j = 0 ; j < Math.min(result1[i], result2[i]) ; j++)
                    console.log((String.fromCharCode(i + 'a'.charCodeAt(0))));
            }
        }
    }
     
    let str1 ="housse", str2 = "computers";
    commonLetters(str1, str2);   
