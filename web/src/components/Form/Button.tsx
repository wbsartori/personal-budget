import {ButtonHTMLAttributes, InputHTMLAttributes} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    link?: string;
}

export function Button(props :ButtonProps) {
    return (
        <a className="h-10 w-1/12 bg-green-600 rounded-md"
           href={props.link}>
            <button
                {...props}
                type={props.type}
                className="h-10 w-1/12 bg-green-600 rounded-md text-white"
            >
                {props.text}
            </button>
        </a>
    );
}