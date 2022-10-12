import {Input} from "../../components/Form/Input";

import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as ToggleGroup from "@radix-ui/react-toggle-group";


import {FormEvent, useEffect, useState} from "react";
import axios from "axios";
import {Button} from "../../components/Form/Button";

interface IPerson {
    id: string;
    title: string;
}

export function NewPerson() {
    const [persons, setPersons] = useState<IPerson[]>([]);
    const [weekDays, setWeekDays] = useState<string[]>([]);
    const [useVoiceChannel, setUseVoiceChannel] = useState(false);

    // useEffect(() => {
    //     axios('http://localhost:3434/person')
    //         .then(response => {
    //             console.log(response.data)
    //             setPersons(response.data);
    //         });
    // });

    async function handleCreatePerson(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData);

        //validação

        if (!data.data) {
            return;
        }

        try {
            await axios.post(`http://localhost:3434/person`, {
                name: data.name,
                birthDate: Number(data.birthDate),
                gender: data.gender,
                email: data.email,
                status: data.status,
            });
            alert('Pessoa criada com sucesso!');
        } catch (err) {
            console.log(err);
            alert('Erro ao criar pessoa!');
        }
    }

    return (
        <>
            <h1 className="mt-5 text-white mb-5">Pessoas \ Novo</h1>
            <hr/>
            <form  className="mt-8 flex flex-col gap-4">
                <div className="w-full mt-5 mb-5">
                    <a className="h-10 w-1/12 bg-green-600 rounded-md"
                       href="/person">
                        <button type="submit" className="h-10 w-1/12 bg-green-600 rounded-md">
                            Salvar
                        </button>
                    </a>
                    <a className="h-10 w-1/12 bg-green-600 rounded-md ml-2"
                       href="/person">
                        <button type="button" className="h-10 w-1/12 bg-red-600 rounded-md">
                            Cancelar
                        </button>
                    </a>
                </div>
                <div className="flex flex-col gap-2 w-3/6">
                    <label htmlFor="id" className="text-white">ID </label>
                    <Input type="text" id="id" name="id" placeholder="ID" disabled/>
                </div>
                <div className="flex flex-col gap-2 w-3/6">
                    <label htmlFor="name" className="text-white">Nome </label>
                    <Input type="text" id="name" name="name" placeholder="Nome completo"/>
                </div>
                <div className="flex flex-col gap-2 w-3/6">
                    <label htmlFor="birthDate" className="text-white">Data de nascimento </label>
                    <Input type="date" id="birthDate" name="birthDate"/>
                </div>
                <div className="flex flex-col gap-2 w-3/12">
                    <label htmlFor="gender" className="text-white">Genero </label>
                    <select name="gender" id="gender" className="w-full
                                  rounded-md
                                  focus:border-indigo-500
                                  focus:ring-indigo-500
                                  h-10
                                  mb-5">
                        <option value=""/>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2 w-3/6">
                    <label htmlFor="email" className="text-white">E-mail </label>
                    <Input type="email" id="email" name="email" placeholder="E-mail"/>
                </div>
            </form>
        </>
    );
}