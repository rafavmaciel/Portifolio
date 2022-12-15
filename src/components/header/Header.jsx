import "./header.css";
import Cta from "./Cta";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
export default function Header() {
    return (
        <header>
            <div className="container header__container">
                <h5>Oi, meu nome é: </h5>
                <h1>Rafael Galvão</h1>
                <h5 className="text-ligth"> Desenvolvedor Fullstack </h5>
                <Cta />
                <HeaderSocials/>
                <div className="me">
                    <img src={ME} alt="me" />
                </div>
                <a href="#contact" className="scroll__down"> Scroll Down</a>
            </div>
        </header>
    );
}
