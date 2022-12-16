import './portifolio.css'
import PortfolioItem from './PortfolioItem'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


export default function Portifolio(){
    return(
        <section id='portfolio'>
        <h5> Meus trabalhos recentes</h5>
        <h1>Potifolio</h1>
        <div className='container portfolio__container'>
            <PortfolioItem title="Encontree" srcImg={IMG1} />
            <PortfolioItem title="AdotaPet" srcImg={IMG2} />
            <PortfolioItem title="Alet1" srcImg={IMG3} />
            <PortfolioItem title="Alet2" srcImg={IMG4} />
            <PortfolioItem title="Alet3" srcImg={IMG5} />
            <PortfolioItem title="Alet4" srcImg={IMG6} />


        </div>



        </section>
    )
}