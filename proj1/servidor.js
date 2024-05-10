import http from "http";

const PORT = 3000;

const rotas = {
    "/" : "home",
    "/cadastrar" : "Tela de cadastro",
    "/excluir" : "Tela de exclusão"
}

const server = http.createServer((req,res) => {
    if(rotas[req,res]){
        res.writeHead(200, { "Content-Type": "text/plain"});
        res.end(rotas[req.url]);
    } else {
        res.writeHead(404, { "Content-Type": "text/plain"});
    res.end("Pagina invalida");
    }
});

server.listen(PORT, ()=> {
    console.log(`server escutando na porta ${PORT}`)
});