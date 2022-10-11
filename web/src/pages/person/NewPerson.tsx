import {Input} from "../../components/Form/Input";

export function NewPerson() {

    return (
        <>
            <div className="w-full mb-5">
                <a className="h-10 w-1/12 bg-green-600 rounded-md"
                   href="/person/new">
                    <button type="submit" className="h-10 w-1/12 bg-green-600 rounded-md">
                        Salvar
                    </button>
                </a>
                <a className="h-10 w-1/12 bg-green-600 rounded-md ml-2"
                   href="/person">
                    <button type="submit" className="h-10 w-1/12 bg-red-600 rounded-md">
                        Cancelar
                    </button>
                </a>
            </div>
            <hr/>
            <h1 className="mt-5">Person</h1>
            <div className="flex flex-col gap-2 w-3/6">
                <label htmlFor="" className="text-white">ID </label>
                <Input type="text" id="id" name="id" placeholder="ID"/>
            </div>
            <div className="flex flex-col gap-2 w-3/6">
                <label htmlFor="" className="text-white">Nome </label>
                <Input type="text" id="name" name="name" placeholder="Nome completo"/>
            </div>
            <div className="flex flex-col gap-2 w-3/6">
                <label htmlFor="" className="text-white">Data de nascimento </label>
                <Input type="date" id="birthDate" name="birthDate" />
            </div>
            <div className="flex flex-col gap-2 w-3/6">
                <label htmlFor="" className="text-white">Genero </label>
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
                <label htmlFor="" className="text-white">E-mail </label>
                <Input type="email" id="name" name="name" placeholder="E-mail"/>
            </div>
        </>
    );
}