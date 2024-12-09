var generate = function(numRows) {
    let a=[];
for (let i = 0; i < numRows; i++) {
    a[i]=[];
    for (let j = 0; j <= i; j++) {
        if(j == 0||j == i){
            a[i][j]=1;
        }else{
            a[i][j]=a[i-1][j-1] +a[i-1][j];
        }
    }
}
return a;
};