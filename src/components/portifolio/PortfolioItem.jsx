export default function PortfolioItem(props){
    return(
        <article className="portfolio__item">
            <div className="portfolio__item-image">
                <img src={props.srcImg} alt="" />
            </div>
            <h3>{props.title}</h3>
            <div className="portfolio__item-cta">
                <a href={props.github} className='btn' target='_blank'>GitHub</a>
                <a href={props.live} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
    )
}