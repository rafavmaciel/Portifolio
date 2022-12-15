export default function ExperienceItem(props) {
    return (
        <article className="experience__details">
            {props.children}
            <div>
                <h4>{props.name}</h4>
                <small className="text-light">{props.nivel}</small>
            </div>
        </article>
    );
}
