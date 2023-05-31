//Find the lowest and highest temperature in the array and find the difference between the lowest and highest temperature.

let temperature = [-1, -21, "error", 12, 22, 13, 4, 5, 16, 17, 8];

function getLowestAndHighest(array) {
    let lowest = array[0];
    let highest = array[0];

    for (let i = 0; i < array.length; i++) {
        if(typeof array[i] !== 'number') continue;
        
        if(highest < array[i]) {
            highest = array[i];
        }
        if(lowest > array[i]) {
            lowest = array[i];
        }
    }


    let difference = highest - lowest;

    console.log(
      `The lowest temperature is ${lowest} and the highest temperature is ${highest}. The difference between the lowest and highest temperature is ${difference}.`
    );
}

getLowestAndHighest(temperature);