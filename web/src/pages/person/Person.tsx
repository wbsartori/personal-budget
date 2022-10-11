export function Person(){
    return (
        <>
            <h1>Person</h1>

            {/*- name           - Nome da pessoa*/}
            {/*- birthDate      - Data de nascimento*/}
            {/*- gender         - Genêro (Masculino ou Feminino)*/}
            {/*- email          - E-mail da pessoa*/}
            {/*- status         - Status (Ativo ou Inativo)*/}

            <div className="w-3/6 mt-5">
                <label htmlFor="" className="text-white">ID </label>
                <input className="w-full
                                  rounded-md
                                  focus:border-indigo-500
                                  focus:ring-indigo-500
                                  h-8
                                  mb-5"
                       type="text"
                       id="id"
                       name="id"
                       placeholder="ID"/>
            </div>
            <div className="w-3/6 mt-5">
                <label htmlFor="" className="text-white">Nome </label>
                <input className="w-full
                                  rounded-md
                                  focus:border-indigo-500
                                  focus:ring-indigo-500
                                  h-8
                                  mb-5"
                       type="text"
                       id="name"
                       name="name"
                       placeholder="Nome completo"/>
            </div>
            <div className="w-3/6 mt-5">
                <label htmlFor="" className="text-white">Data de nascimento </label>
                <input className="w-full
                                  rounded-md
                                  focus:border-indigo-500
                                  focus:ring-indigo-500
                                  h-8
                                  mb-5"
                       type="date"
                       id="birthDate"
                       name="birthDate"/>
            </div>
            <div className="w-3/6 mt-5">
                <label htmlFor="" className="text-white">Genero </label>
                <select name="gender" id="gender" className="w-full
                                  rounded-md
                                  focus:border-indigo-500
                                  focus:ring-indigo-500
                                  h-8
                                  mb-5">
                    <option></option>
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                </select>
            </div>
            <div className="w-3/6 mt-5">
                <label htmlFor="" className="text-white">E-mail </label>
                <input className="w-full
                                  rounded-md
                                  focus:border-indigo-500
                                  focus:ring-indigo-500
                                  h-8
                                  mb-5"
                       type="email"
                       id="name"
                       name="name"
                       placeholder="E-mail"/>
            </div>

            <div className="w-full">
                <button className="h-12 w-3/12 bg-green-600 rounded-md">Salvar</button>
                <button className="h-12 w-3/12 bg-red-600 rounded-md ml-2">Cancelar</button>
            </div>
        </>
    );
}