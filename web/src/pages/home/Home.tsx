import {Link} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

export function Home() {
    return (
        <>
            <h1>Home</h1>
            <Link to="/" >Voltar</Link>
        </>
    );
}