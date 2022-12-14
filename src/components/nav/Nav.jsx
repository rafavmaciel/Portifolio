import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
export default function Nav(){
    return(
        <nav>
            <a href="#"><AiOutlineHome/></a>
            <a href="#abaut"><AiOutlineUser/></a>
            <a href="#experience"><BiBook/></a>
            <a href="#"><BiMessageSquareDetail/></a>
        </nav>
    )
}