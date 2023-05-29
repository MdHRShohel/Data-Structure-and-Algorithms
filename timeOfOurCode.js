function sumOfAll(n){
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}

function sumOfAll2(n){
    return n * (n + 1) / 2;
}

let time1 = performance.now();
console.log(sumOfAll2(6600000000));
let time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)