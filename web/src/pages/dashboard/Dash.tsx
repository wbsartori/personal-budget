import {Link} from "react-router-dom";

export function Dash() {
    return (
        <>
            <h1 className="mt-5 text-white mb-5">Dashboard</h1>
            <hr/>
            <div className=" w-full mt-5 flex flex-row justify-between">
                <a href="#"
                   className="block p-6 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">Rendas do
                        Mês</h5>
                    <hr/>
                    <p className="font-normal text-gray-700 dark:text-gray-400 mt-5 text-3xl">R$ 4000,36</p>
                </a>
                <a href="#"
                   className="block p-6 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">Despesas do
                        Mês</h5>
                    <hr/>
                    <p className="font-normal text-gray-700 dark:text-gray-400 mt-5 text-3xl">R$ 4000,36</p>
                </a>
                <a href="#"
                   className="block p-6 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Despesas com dinheiro</h5>
                    <hr/>
                    <p className="font-normal text-gray-700 dark:text-gray-400 mt-5 text-3xl">R$ 4000,36</p>
                </a>
                <a href="#"
                   className="block p-6 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">Despesas com cartão</h5>
                    <hr/>
                    <p className="font-normal text-gray-700 dark:text-gray-400 mt-5 text-3xl">R$ 4000,36</p>
                </a>
            </div>
        </>
    );
}