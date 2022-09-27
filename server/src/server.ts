import express, {json} from "express";
import cors from 'cors';

import {PrismaClient} from '@prisma/client';

const app = express();
app.use(express.json());

app.use(cors());

const prisma = new PrismaClient();

app.get("/person", async (request, response) => {
    const person = await prisma.person.findMany();
    if (person.length > 0) {
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

    const person = await prisma.person.findMany({
        where: {
            id: id
        }
    });

    if (person.length > 0) {
        await prisma.person.update({
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
        });
    } else {
        return response.status(201).json({
            message: `Nenhuma pessoa encontrada para este id!`
        })
    }
});

app.delete("/person/:id", async (request, response) => {
    const id = request.params.id;

    const person = await prisma.person.findMany({
        where: {
            id: id
        }
    });

    if (person.length > 0) {
        await prisma.person.delete({
            where: {
                id: id
            }
        });
        return response.status(201).json({
            message: "Pessoa removida com sucesso!",
            data: id
        });
    } else {
        return response.status(201).json({
            message: `Nenhuma pessoa encontrada para este id!`
        })
    }
});

//income - Rendas
app.get("/income", async (request, response) => {
    const income = await prisma.income.findMany();
    if (income.length > 0) {
        return response.status(201).json({
            message: "Rendas listadas com sucesso!",
            data: income
        })
    } else {
        return response.status(201).json({
            message: "Nenhuma renda cadastrada no momento!",
            data: income
        })
    }
});

app.post("/income", async (request, response) => {
    const body: any = request.body;

    const income = await prisma.income.create({
        data: {
            "idPerson": body.idPerson,
            "description": body.description,
            "incomeDate": body.incomeDate,
            "value": body.value
        }
    });

    return response.status(201).json({
        message: "Renda criada com sucesso!",
        data: income
    })
});

app.put("/income/:id", async (request, response) => {
    const id = request.params.id;
    const body: any = request.body;

    const income = await prisma.income.findMany({
        where: {
            id: id
        }
    });

    if (income.length > 0) {
        await prisma.income.update({
            where: {
                id: id,
            },
            data: {
                "idPerson": body.idPerson,
                "description": body.description,
                "incomeDate": body.incomeDate,
                "value": body.value
            }
        });

        return response.status(201).json({
            message: "Renda atualizada com sucesso!",
            data: income
        });
    } else {
        return response.status(201).json({
            message: `Nenhuma renda encontrada para este id!`
        })
    }
});

app.delete("/income/:id", async (request, response) => {
    const id = request.params.id;

    const income = await prisma.income.findMany({
        where: {
            id: id
        }
    });

    if (income.length > 0) {
        await prisma.income.delete({
            where: {
                id: id
            }
        });
        return response.status(201).json({
            message: "Renda removida com sucesso!",
            data: id
        });
    } else {
        return response.status(201).json({
            message: `Nenhuma renda encontrada para este id!`
        })
    }
});

//movement - Movimentos
app.get("/movement", async (request, response) => {
    const movement = await prisma.movement.findMany();
    if (movement.length > 0) {
        return response.status(201).json({
            message: "Movimentção listada com sucesso!",
            data: movement
        })
    } else {
        return response.status(201).json({
            message: "Nenhuma Movimentção cadastrada no momento!",
            data: movement
        })
    }
});

app.post("/movement", async (request, response) => {
    const body: any = request.body;

    const movement = await prisma.movement.create({
        data: {
            "idPerson": body.idPerson,
            "description": body.description,
            "classification": body.classification,
            "typeOfCost": body.typeOfCost,
            "movementDate": body.movementDate,
            "value": body.value,
            "status": body.status
        }
    });

    return response.status(201).json({
        message: "Movimentção criada com sucesso!",
        data: movement
    })
});

app.put("/movement/:id", async (request, response) => {
    const id = request.params.id;
    const body: any = request.body;

    const movement = await prisma.movement.findMany({
        where: {
            id: id
        }
    });

    if (movement.length > 0) {
        await prisma.movement.update({
            where: {
                id: id,
            },
            data: {
                "idPerson": body.idPerson,
                "description": body.description,
                "classification": body.classification,
                "typeOfCost": body.typeOfCost,
                "movementDate": body.movementDate,
                "value": body.value,
                "status": body.status
            }
        });

        return response.status(201).json({
            message: "Movimentção atualizada com sucesso!",
            data: movement
        });
    } else {
        return response.status(201).json({
            message: `Nenhuma movimentção encontrada para este id!`
        })
    }
});

app.delete("/movement/:id", async (request, response) => {
    const id = request.params.id;

    const movement = await prisma.movement.findMany({
        where: {
            id: id
        }
    });

    if (movement.length > 0) {
        await prisma.movement.delete({
            where: {
                id: id
            }
        });
        return response.status(201).json({
            message: "Movimentção removida com sucesso!",
            data: id
        });
    } else {
        return response.status(201).json({
            message: `Nenhuma movimentção encontrada para este id!`
        })
    }
});

app.listen(3434, () => console.log("Server is running!"));
