function maximum(a,b,c){
    if (a>=b && a>= c){
        return a;
    }else if(b>=a && b>=c){
        return b;
    }else{
        return c;}

} 
console.log(maximum(8,5,90))