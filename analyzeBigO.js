function uniqueName(arr) {
  let uniqueName = [];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (!uniqueName.includes(element)) {
      uniqueName.push(element);
    }
  }
  return uniqueName; //space complexity is O(n) because it will create a new array
} //time complexity is O(n^2) because it will run n times and then run n times again

let nameArray = ["John", "Jacob", "Jingle", "Heimer", "Schmidt", "John"];

//console.log(uniqueName(nameArray));

const myObject = {
  Name: "Md. Habibur Rahman Shohel",
  Age: 21,
  University: "Bangladesh University of Business and Technology",
  Department: "Computer Science and Engineering",
  Semester: "11th",
  Year: "4th",
  Address: "Dhaka, Bangladesh",
  Phone: "01700000000",
  Programming:
    "C, C++, Java, Python, JavaScript, React, Node.js, MongoDB, SQL, HTML, CSS, Bootstrap, Material UI, Git, GitHub, VS Code, Netlify, Heroku, Firebase, Chrome Dev Tool, etc.",
  Framework: "React, Node.js, Express.js, etc.",
  Database: "MongoDB, SQL, etc.",
  Tools:
    "Git, GitHub, VS Code, Netlify, Heroku, Firebase, Chrome Dev Tool, etc.",
  OperatingSystem: "Windows, Linux, etc.",
  Language: "Bangla, English, Hindi, etc.",
  Interest: "Programming, Web Development, Software Development, etc.",
  Hobby: "Reading Books, Watching Movies, etc.",
  Religion: "Islam",
  array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
};

//console.log(Object.keys(myObject));
//console.log(Object.values(myObject));
//console.log(Object.entries(myObject));

//big O(n) because it will run n times

//console.log(myObject.hasOwnProperty("Name"));//O(1)

let newArray = ["John", "Jacob", "Jingle", "Heimer", "Schmidt"];

//console.log(newArray.indexOf("Schmidt"));//O(n)