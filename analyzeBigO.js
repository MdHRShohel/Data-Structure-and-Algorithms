function uniqueName(arr) {
    let uniqueName = [];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (!uniqueName.includes(element)) {
            uniqueName.push(element);
        }
    }
    return uniqueName;//space complexity is O(n) because it will create a new array
}//time complexity is O(n^2) because it will run n times and then run n times again


let nameArray = ["John", "Jacob", "Jingle", "Heimer", "Schmidt", "John"];

console.log(uniqueName(nameArray));