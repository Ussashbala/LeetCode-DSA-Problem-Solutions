function removeDuplicates(nums){
    let s=-1;
    
    console.log(nums);
    
        for(let i=0;i<nums.length;i++){
            if(nums[i]==nums[i+1]){
            } 
            else{
                s++;
                nums[s]=nums[i];
            }
        }
    console.log(nums);
    return s+1;
}
let numm=[1,1,2];
console.log(removeDuplicates(numm));


