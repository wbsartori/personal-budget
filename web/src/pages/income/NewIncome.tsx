import {Input} from "../../components/Form/Input";
import {Button} from "../../components/Form/Button";

export function NewIncome() {

    return (
        <>
            <h1 className="mt-5 text-white mb-5">Rendas \ Novo</h1>
            <hr/>
            <div className="w-full mt-5 mb-5">
                <a className="h-10 w-1/12 bg-green-600 rounded-md"
                   href="/income/new">
                    <button type="submit" className="h-10 w-1/12 bg-green-600 rounded-md">
                        Salvar
                    </button>
                </a>
                <a className="h-10 w-1/12 bg-green-600 rounded-md ml-2"
                   href="/income">
                    <button type="submit" className="h-10 w-1/12 bg-red-600 rounded-md">
                        Cancelar
                    </button>
                </a>
            </div>

            <div className="flex flex-col gap-2 w-3/6">
                <label htmlFor="id" className="text-white">ID </label>
                <Input type="text" id="id" name="id" placeholder="ID" disabled/>
            </div>
            <div className="flex flex-col gap-2 w-3/6">
                <label htmlFor="description" className="text-white">Descrição </label>
                <Input type="text" id="description" name="description" placeholder="Salario, poupanca, outros, etc"/>
            </div>
            <div className="flex flex-col gap-2 w-3/12">
                <label htmlFor="idPerson" className="text-white">Pessoa </label>
                <select name="idPerson" id="idPerson" className="w-full
                                  rounded-md
                                  focus:border-indigo-500
                                  focus:ring-indigo-500
                                  h-10
                                  mb-5">
                    <option value=""/>
                    <option value="M">Wesley</option>
                    <option value="F">Regina</option>
                </select>
            </div>
            <div className="flex flex-col gap-2 w-3/6">
                <label htmlFor="incomeDate" className="text-white">Data de referencia </label>
                <Input type="date" id="incomeDate" name="incomeDate" />
            </div>
            <div className="flex flex-col gap-2 w-3/6">
                <label htmlFor="value" className="text-white">Valor </label>
                <Input type="text" id="value" name="value" placeholder="R$ 100,00"/>
            </div>
        </>
    );
}