function logarithmsN(n){
    while(n > 1){
        console.log(n);
        n = n / 2;
    }
    console.log("Done");
}

//logarithmsN(16);

function anotherLogarithmsN(n){
    if(n <= 1) {
        console.log("Done");
        return;
    }
    console.log(n);
    anotherLogarithmsN(n / 2);
}

anotherLogarithmsN(16);