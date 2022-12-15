import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
    return (
        <section id="experience">
            <h5> Que habilidades eu possuo </h5>
            <h1> Minhas experiências</h1>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3> Desenvolvimento Frontend</h3>
                    <div className="experience__content">
                        <ExperienceItem name="HTML" nivel="Avançado">
                            <BsPatchCheckFill className="experience__details-icon" />
                        </ExperienceItem>
                        <ExperienceItem name="CSS" nivel="Intermediário">
                            <BsPatchCheckFill className="experience__details-icon" />
                        </ExperienceItem>
                        <ExperienceItem name="JavaScript" nivel="Avançado">
                            <BsPatchCheckFill className="experience__details-icon" />
                        </ExperienceItem>
                        <ExperienceItem name="Bootstrap" nivel="Intemediário">
                            <BsPatchCheckFill className="experience__details-icon" />
                        </ExperienceItem>
                        <ExperienceItem name="Tailwind" nivel="Avançado">
                            <BsPatchCheckFill className="experience__details-icon" />
                        </ExperienceItem>
                        <ExperienceItem name="React" nivel="Avançado">
                            <BsPatchCheckFill className="experience__details-icon" />
                        </ExperienceItem>
                    </div>
                </div>
                <div className="experience__backend">
                    <h3> Desenvolvimento Backend</h3>
                    <div className="experience__content">
                            <ExperienceItem name="Node Js" nivel="Avançado">
                                <BsPatchCheckFill className="experience__details-icon" />
                            </ExperienceItem>
                            <ExperienceItem name="PHP" nivel="Intermediário">
                                <BsPatchCheckFill className="experience__details-icon" />
                            </ExperienceItem>
                            <ExperienceItem name="MySQL" nivel="Intemediário">
                                <BsPatchCheckFill className="experience__details-icon" />
                            </ExperienceItem>
                            <ExperienceItem name="DynamoDb" nivel="Intermediário">
                                <BsPatchCheckFill className="experience__details-icon" />
                            </ExperienceItem>
                            <ExperienceItem name="Firebase" nivel="Intermediário">
                                <BsPatchCheckFill className="experience__details-icon" />
                            </ExperienceItem>
                    </div>
                </div>
            </div>
        </section>
    );
}
