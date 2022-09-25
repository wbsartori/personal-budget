import express from "express";

const app = express();

app.get("/", (request, response) => {
    return response.json({message: "Hello world!"})
});

app.get("/person", (request, response) => {
    return response.json({message: "Hello world!"})
});

app.post("/person", (request, response) => {
    return response.json({message: "Hello world!"})
});

app.put("/person", (request, response) => {
    return response.json({message: "Hello world!"})
});

app.delete("/person", (request, response) => {
    return response.json({message: "Hello world!"})
});

//entry - Entradas
app.get("/entry", (request, response) => {
    return response.json({message: "Hello world!"})
});

app.post("/entry", (request, response) => {
    return response.json({message: "Hello world!"})
});

app.put("/entry", (request, response) => {
    return response.json({message: "Hello world!"})
});

app.delete("/entry", (request, response) => {
    return response.json({message: "Hello world!"})
});

//issue - Saídas
app.get("/issue", (request, response) => {
    return response.json({message: "Hello world!"})
});

app.post("/issue", (request, response) => {
    return response.json({message: "Hello world!"})
});

app.put("/issue", (request, response) => {
    return response.json({message: "Hello world!"})
});

app.delete("/issue", (request, response) => {
    return response.json({message: "Hello world!"})
});

//billsToPay - Contas a Pagar
app.get("/billsToPay", (request, response) => {
    return response.json({message: "Hello world!"})
});

app.post("/billsToPay", (request, response) => {
    return response.json({message: "Hello world!"})
});

app.put("/billsToPay", (request, response) => {
    return response.json({message: "Hello world!"})
});

app.delete("/billsToPay", (request, response) => {
    return response.json({message: "Hello world!"})
});

app.listen(3333, () => console.log("Server is running!"));
