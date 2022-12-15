import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
import Link from "./Link";
export default function Nav() {
    const [activeNav, setActiveNav] = useState("#");
    return (
        <nav>
            <Link activeNav={activeNav} setActiveNav={setActiveNav} name="#">
                <AiOutlineHome />
            </Link>

            <Link activeNav={activeNav} setActiveNav={setActiveNav} name="#about">
                <AiOutlineUser />
            </Link>

            <Link activeNav={activeNav} setActiveNav={setActiveNav} name="#experience">
                <BiBook />
            </Link>

            <Link activeNav={activeNav} setActiveNav={setActiveNav} name="#contact">
                <BiMessageSquareDetail />
            </Link>
        </nav>
    );
}
