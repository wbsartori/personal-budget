import express, {json} from "express";
import cors from 'cors';

import { PrismaClient } from '@prisma/client';

const app = express();
app.use(express.json());

app.use(cors());

const prisma = new PrismaClient();

app.get("/person", async (request, response) => {
    const person = await prisma.person.findMany();
    if(person.length > 0){
        return response.status(201).json({
            message: "Pessoas listadas com sucesso!",
            data: person
        })
    } else {
        return response.status(201).json({
            message: "Nenhuma pessoa cadastrada no momento!",
            data: person
        })
    }
});

app.post("/person", async (request, response) => {
    const body: any = request.body;

    const person = await prisma.person.create({
        data: {
            "name": body.name,
            "birthDate": body.birthDate,
            "gender": body.gender,
            "email": body.email,
            "status": body.status
        }
    });

    return response.status(201).json({
        message: "Pessoa criada com sucesso!",
        data: person
    })
});

app.put("/person/:id", async (request, response) => {
    const id = request.params.id;
    const body: any = request.body;

    const person = await prisma.person.update({
        where: {
            id: id,
        },
        data: {
            "name": body.name,
            "birthDate": body.birthDate,
            "gender": body.gender,
            "email": body.email,
            "status": body.status
        }
    });

    return response.status(201).json({
        message: "Pessoa atualizada com sucesso!",
        data: person
    })
});

app.delete("/person/:id", async(request, response) => {
    const id = request.params.id;

    const person = await prisma.person.delete({
        where: {
            id: id
        }
    });

    return response.status(201).json({
        message: "Pessoa removida com sucesso!",
        data: id
    })
});

//movement - Movimentos
app.get("/movement", (request, response) => {
    return response.json({message: "Hello world!"})
});

app.post("/movement", (request, response) => {
    return response.json({message: "Hello world!"})
});

app.put("/movement", (request, response) => {
    return response.json({message: "Hello world!"})
});

app.delete("/movement", (request, response) => {
    return response.json({message: "Hello world!"})
});

app.listen(3434, () => console.log("Server is running!"));
