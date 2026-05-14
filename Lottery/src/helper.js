//helper function to create random numbers
function genTicket(n){
    let arr = new Array(n);
    for(let i=0; i<n; i++){
        arr[i] = Math.floor(Math.random()*10);
    }
    return arr;
}

function sum(arr,n){
    // let sum = 0;
    // for(let i=0; i<n; i++){
    //     sum += arr[i];
    // }
    // return sum;
    return arr.reduce((sum,curr)=> sum+curr,0);
}
export {genTicket,sum}