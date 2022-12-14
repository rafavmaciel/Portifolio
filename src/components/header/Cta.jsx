import React from "react";
import CV from '../../assets/cv.pdf'

export default function Cta () {
    return(
        <div className="cta">
            <a href={CV} download className="btn"> Currículo</a>
            <a href="#contact" className="btn btn-primary">Contato</a>
        </div>
    )
}