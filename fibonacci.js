//using iteration
let arr=[0,1];
let n=4;
if (n<=2){
    console.log(arr[n]);
}
else{
    const f=(n)=>{
        for(let idx=2;idx<n;idx++){
            arr.push(arr[idx-1]+arr[idx-2]);
        }
    }
f(n);
console.log(arr[n]);
console.log(arr);  
}


//using recursion
let n=8;
function fibonacci(n){
    if(n<=1){
        return n;
    }
    return fibonacci(n-1)+fibonacci(n-2);
}
const result=fibonacci(8);
console.log(result);
