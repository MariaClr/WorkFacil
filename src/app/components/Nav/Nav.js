import Logo from "../Logo/Logo"
import "./nav.css"
export default function Nav() {
    return (
        <>
            <header className="cabecalho">
                <Logo />
                <ul className="lista-cabecalho">
                    <li><a>Suporte</a></li>
                    <li><a>Home</a></li>
                    <li><a>Sobre</a></li>
                    <li><a>Login</a></li>
                </ul>
            </header>

        </>

    )
}
