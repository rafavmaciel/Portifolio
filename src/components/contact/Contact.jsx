import "./contact.css";
import ContactItem from "./ContactItem";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

export default function Contact() {
    return (
        <section id="contact">
            <h5>Vamos bater um papo </h5>
            <h1> Contatos</h1>

            <div className="container contact__container">
                {/* cards de contato */}
                <div className="contact__options">
                    <ContactItem
                        type="Email"
                        contact="rafavmaciel@yahoo.com.br"
                        link="mailto:rafavmaciel@yahoo.com.br"
                        linkTitle="Envie uma mensagem"
                    >
                        <MdOutlineEmail className="contact__option-icon" />
                    </ContactItem>
                    <ContactItem
                        type="WhatsApp"
                        contact="(81) 9 9261-4134"
                        link="https://api.whatsapp.com/send?phone=558192614134"
                        linkTitle="Envie uma mensagem"
                    >
                        <BsWhatsapp  className="contact__option-icon"/>
                    </ContactItem>
                    {/* form */}
                </div>
                <form action="">
                    <input type="text" name="name" placeholder="Digite seu nome" required />
                    <input type="email" name="email" placeholder="Digite seu nome" required />
                    <textarea name="message" rows="7" placeholder="Digite sua mensagem" required />
                    <button type="submit" className="btn btn-primary">
                        {" "}
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
}
