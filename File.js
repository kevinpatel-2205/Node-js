// -------------------------------------------------------------------

// const fs = require("fs");

// sync...
// fs.writeFileSync("./Test.txt","Hello World! sync...");

// async...
// fs.writeFile("./Test.txt","Hello World! async...",(err)=>{});

// sync...
// let result=fs.readFileSync("./Contacts.txt","utf-8");
// console.log(result);

// async...
// fs.readFile("./Contacts.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err);
//     }else{
//         console.log(result);
//     }
// });

// sync...
// fs.appendFileSync("./Test.txt","\nHeyy There");

// copy a file
// fs.cpSync("./Test.txt","./TestCopy.txt");

// ststus of file
// console.log(fs.statSync("./Test.txt"));

// delete file
// fs.unlinkSync("./TestCopy.txt");

// create direactry
// fs.mkdirSync("my_Directory");

// sync is blocking operations
// asycn is non blocking operations

// -------------------------------------------------------------------

// const os=require("os");
// console.log(os.cpus().length);

