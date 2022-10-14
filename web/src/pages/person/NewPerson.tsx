import {FormEvent, useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Input} from "../../components/Form/Input";

interface IPerson {
    id: string;
    title: string;
}

export function NewPerson() {
    const [persons, setPersons] = useState<IPerson[]>([]);
    const errors = [];

    async function handleCreatePerson(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData);

        if (data.name === '') {
            errors.push({'errors' : 'nome'});
        }
        if (data.birthDate === '') {
            errors.push({'errors' : 'birthDate'});
        }
        if (data.gender === '') {
            errors.push({'errors' : 'gender'});
        }
        if (data.email === '') {
            errors.push({'errors' : 'email'});
        }

        try {

            await axios.post(`http://localhost:3434/person`, {
                name: data.name,
                birthDate: data.birthDate,
                gender: data.gender,
                email: data.email,
                status: data.status,
            });

            alert('Pessoa criada com sucesso!');
        } catch (err) {
            console.log(err);
            alert('Erro ao criar pessoa!');
        }

        // navigate("/person");
    }

    return (
        <>
            <h1 className="mt-5 text-white mb-5">Pessoas \ Novo</h1>
            <hr/>
            <form  onSubmit={handleCreatePerson} className="mt-8 flex flex-col gap-4">
                <div className="w-full mt-5 mb-5">
                    <button type="submit" className="h-10 w-1/12 bg-green-600 rounded-md">Salvar</button>
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
                <div className="flex flex-col gap-2 w-3/12">
                    <label htmlFor="status" className="text-white">Status </label>
                    <select name="status" id="status" className="w-full
                                  rounded-md
                                  focus:border-indigo-500
                                  focus:ring-indigo-500
                                  h-10
                                  mb-5">
                        <option value=""/>
                        <option value="A">Ativo</option>
                        <option value="I">Inativo</option>
                    </select>
                </div>
            </form>
        </>
    );
}