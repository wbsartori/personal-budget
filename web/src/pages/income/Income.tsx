import {Link} from "react-router-dom";
import {Button} from "../../components/Form/Button";

export function Income() {
    return (
        <>
            <h1 className="mt-5 text-white mb-5">Rendas</h1>
            <hr/>
            <div className="w-full mt-5 mb-5">
                <Button text="Novo" link="income/new" />
            </div>
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

                <tr className="bg-gray-900 border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6">1</td>
                    <td className="py-4 px-6">Wesley</td>
                    <td className="py-4 px-6">wbsartori</td>
                    <td className="py-4 px-6">Ativo</td>
                    <td className="py-4 px-6">
                        <button>Editar</button>
                        <button>Remover</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    );
}