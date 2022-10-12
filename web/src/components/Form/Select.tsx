import {SelectHTMLAttributes} from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export function Select(props :SelectProps) {
    return (
        <select name="gender" id="gender" className="w-full
                                  rounded-md
                                  focus:border-indigo-500
                                  focus:ring-indigo-500
                                  h-10
                                  mb-5">
            <option value=""/>
            <option value="M">Renda fixa</option>
            <option value="F">Variável</option>
        </select>
    );
}