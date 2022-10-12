import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

interface IPerson {
    id: string;
    name: string;
    email: string;
    status: string;
}

export function Person() {
    const [persons, setPersons] = useState<IPerson[]>([]);

    useEffect(() => {
        axios('http://localhost:3434/person')
            .then(response => {
                if (response.data.type === "success") {
                    setPersons(response.data.data);
                }
            });
    });

    return (
        <>
            <h1 className="mt-5 text-white mb-5">Pessoas</h1>
            <hr/>
            <div className="w-full mt-5 mb-5">
                <a className="h-10 w-1/12 bg-green-600 rounded-md"
                   href="/person/new">
                    <button type="submit" className="h-10 w-1/12 bg-green-600 rounded-md">
                        Novo
                    </button>
                </a>
            </div>
            <hr/>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="py-3 px-6">id</th>
                    <th scope="col" className="py-3 px-6">Nome</th>
                    <th scope="col" className="py-3 px-6">e-mail</th>
                    <th scope="col" className="py-3 px-6">status</th>
                    <th scope="col" className="py-3 px-6">Ações</th>
                </tr>
                </thead>
                <tbody>
                {persons.map((person, index) => {
                        return (
                            <tr key={index}
                                className="bg-gray-900 border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="py-4 px-6">{person.id}</td>
                                <td className="py-4 px-6">{person.name}</td>
                                <td className="py-4 px-6">{person.email}</td>
                                <td className="py-4 px-6">{person.status}</td>
                                <td className="py-4 px-6">
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
                                        </svg>
                                    </button>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                )}
                </tbody>
            </table>
        </>
    );
}