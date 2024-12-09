var plusOne = function(digits) {
    for(let i=digits.length-1;i>=0;i--){
   if(digits[i]!=9){
      digits[i]=digits[i]+1;
      return digits; 
   }
    else {
      digits[i]=0;
      if(i===0){
          let arr=[];
          for(let j=digits.length;j>=0;j--){
              if(j!=0){
                  arr[j]=0;
              }else {
                  arr[j]=1;
              }
          }
          return arr;
      }
        }
   }
       
};