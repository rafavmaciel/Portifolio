export default function ContactItem(props) {
    return(
        <article className="contact__option">
            {props.children}
            <h4>{props.type}</h4>
            <h5>{props.contact}</h5>
            <a href={props.link} target='_blank'>{props.linkTitle} </a>
        </article>
    )

}