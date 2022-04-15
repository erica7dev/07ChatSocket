const express = require ("express");
const app = express();

const http = require("http").
createServer(app);
const io = require("socket.io")(http);

io.on("connection", socket => {
    socket.on("disconnect", () => {
        console.log("O usuário " + socket.id + "foi desconectado");
    });

    //exibindo dados capturados 
    socket.on("msg", data => {
        io.emit("showMsg", data);
        console.log(data);
    });

});

//socket = user
//io = server inteiro

//socket.broadcast.emit = io.emit, PORÉM não exibe msg para quem a enviou

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render('index');
});

http.listen(3000, ()=>{
    console.log("funfando legal!");
});
