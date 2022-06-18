import http from "http";
import {Todolist_service} from "./todolist_service.mjs"

const service = new Todolist_service();
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type","application/json");
    if (req.method === "GET"){
        service.getTodoList(req,res)
    }else if(req.method === "POST"){
        service.createTodo(req,res);
    }else if(req.method === "PUT"){
        service.updateTodo(req,res)
    }else if(req.method ==="DELETE"){
        service.deleteTodo(req,res)
    }
})
server.listen(3000)
