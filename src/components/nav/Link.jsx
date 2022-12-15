export default function Link(props) {
    return (
        <a
            href={props.name}
            className={props.activeNav === props.name ? "active" : ""}
            onClick={() => {
                props.setActiveNav(props.name);
            }}
        >
            { props.children }
        </a>
    );
}
