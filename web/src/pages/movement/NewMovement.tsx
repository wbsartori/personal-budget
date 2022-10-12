import {Input} from "../../components/Form/Input";

export function NewMovement() {

    return (
        <>
            <h1 className="mt-5 text-white mb-5">Movimentações \ Novo</h1>
            <hr/>
            <div className="w-full mt-5 mb-5">
                <a className="h-10 w-1/12 bg-green-600 rounded-md"
                   href="/movement/save">
                    <button type="submit" className="h-10 w-1/12 bg-green-600 rounded-md">
                        Salvar
                    </button>
                </a>
                <a className="h-10 w-1/12 bg-green-600 rounded-md ml-2"
                   href="/movement">
                    <button type="submit" className="h-10 w-1/12 bg-red-600 rounded-md">
                        Cancelar
                    </button>
                </a>
            </div>

            <div className="flex flex-col gap-2 w-3/6">
                <label htmlFor="" className="text-white">ID </label>
                <Input type="text" id="id" name="id" placeholder="ID" disabled/>
            </div>
            <div className="flex flex-col gap-2 w-3/6">
                <label htmlFor="description" className="text-white">Descrição </label>
                <Input type="text" id="description" name="description" placeholder="Conta de luz, aguá, gás e etc..."/>
            </div>
            <div className="flex flex-col gap-2 w-3/12">
                <label htmlFor="idPerson" className="text-white">Pessoa </label>
                <select name="idPerson" id="idPerson" className="w-full
                                  rounded-md
                                  focus:border-indigo-500
                                  focus:ring-indigo-500
                                  h-10
                                  mb-5">
                    <option value="">---</option>
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                </select>
            </div>
            <div className="flex flex-col gap-2 w-3/6">
                <label htmlFor="classification" className="text-white">Classificação </label>
                <Input type="text" id="classification" name="classification" placeholder="Lazer, Saúde, Mercado, etc..."/>
            </div>
            <div className="flex flex-col gap-2 w-3/12">
                <label htmlFor="typeOfCost" className="text-white">Tipo </label>
                <select name="typeOfCost" id="typeOfCost" className="w-full
                                  rounded-md
                                  focus:border-indigo-500
                                  focus:ring-indigo-500
                                  h-10
                                  mb-5">
                    <option value="">---</option>
                    <option value="M">Renda fixa</option>
                    <option value="F">Variável</option>
                </select>
            </div>
            <div className="flex flex-col gap-2 w-3/6">
                <label htmlFor="movementDate" className="text-white">Data de movimentação </label>
                <Input type="date" id="movementDate" name="movementDate"/>
            </div>
            <div className="flex flex-col gap-2 w-3/12">
                <label htmlFor="typeOfPayment" className="text-white">Tipo de pagamento </label>
                <select name="typeOfPayment" id="typeOfPayment" className="w-full
                                  rounded-md
                                  focus:border-indigo-500
                                  focus:ring-indigo-500
                                  h-10
                                  mb-5">
                    <option value="">---</option>
                    <option value="M">Dinheiro</option>
                    <option value="F">Cartão de dédito</option>
                    <option value="F">Cartão de crédito</option>
                </select>
            </div>
            <div className="flex flex-col gap-2 w-3/6">
                <label htmlFor="value" className="text-white">Valor </label>
                <Input type="text" id="value" name="value" placeholder="R$ 1500,22"/>
            </div>
            <div className="flex flex-col gap-2 w-3/12">
                <label htmlFor="status" className="text-white">Status </label>
                <select name="status" id="status" className="w-full
                                  rounded-md
                                  focus:border-indigo-500
                                  focus:ring-indigo-500
                                  h-10
                                  mb-5">
                    <option value="">---</option>
                    <option value="M">Em aberto</option>
                    <option value="F">Finalizado</option>
                </select>
            </div>
        </>
    );
}