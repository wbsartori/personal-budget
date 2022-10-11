import {InputHTMLAttributes} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props :InputProps) {
    return (
        <input
            {...props}
            className="w-full rounded-md focus:border-indigo-500 focus:ring-indigo-500 h-10 mb-5"
        />
    );
}