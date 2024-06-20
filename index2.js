//fs module using require(), which allows us to access filesystem-related functions like readFile.
This approach is typical in CommonJS modules used in Node.js applications.

const fs = require("node:fs");

//readFile function from the fs module to read the contents of a file named text.txt.

fs.readFile("./text.txt", "utf-8", (err, data)=>{
    if (err)
    //t is thrown to terminate execution and display the error message.
    throw err;
//the content of the file (data) is logged to the console.
    console.log(data);

})
