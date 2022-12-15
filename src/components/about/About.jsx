import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export default function About() {
    return (
        <section id="about">
            <h5>Um pouco mais</h5>
            <h1> Sobre mim </h1>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experiência</h5>
                            <small>2+ anos trabalhando na área</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Empresas</h5>
                            <small>2 empresas</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projetos</h5>
                            <small>15+ projetos web</small>
                        </article>
                    </div>
                    <p>
                        Desenvolvedor Web apaixonado por novas tecnologias. Seguindo a filosofia do aprendizado
                        contínuo. Com experiência em programação Web e Mobile
                    </p>
                    <a href="#contact" className="btn btn-primary"> Vamos bater um papo</a>
                </div>
            </div>
        </section>
    );
}
