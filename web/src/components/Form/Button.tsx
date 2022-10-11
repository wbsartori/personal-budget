import {ButtonHTMLAttributes, InputHTMLAttributes} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}


export function Button(props :ButtonProps) {
    return (
        <Button
            {...props}
            className="h-10 w-1/12 bg-green-600 rounded-md ml-2"
        />
    );
}