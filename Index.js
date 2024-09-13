const http=require("http");
const fs=require("fs");
const myserver=http.createServer((req,res)=>{
    // console.log("new requesr recive.");
    // console.log(req.headers);
if (req.url==="/favicon.ico") return res.end();
     const log=`${Date.now()}: ${req.url} New req received\n`;
     fs.appendFile("log.txt",log,(err,data)=>{
        switch (req.url){
            case "/":
                res.end("This Is Home Page.");
                break;
                case "/about":
                res.end("I Am Kevin Patel.");
                break;        
                default:
                res.end("404 Page Not Found");
            }
     })
    // console.log(req);
   
});

myserver.listen(8000,()=>console.log("server started!"));