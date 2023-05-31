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
//console.log(sumOfAll2(6600000000));
let time2 = performance.now();
//console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

function minLog5(n){
    for(let i = 1; i <= Math.min(5, n); i++){
        console.log(i);
    }
}

//minLog5(16); //time complexity is O(1) because it will only run 5 times

function maxLog5(n){
    for(let i = 1; i <= Math.max(5, n); i++){
        console.log(i);
    }
}

//maxLog5(1);//time complexity is O(n) because it will run n times


function sum(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}

//console.log(sum([23, 4, 6]));

function double(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(2 * arr[i]);
    }
    return newArr;
}

//console.log(double([1, 2, 3]));