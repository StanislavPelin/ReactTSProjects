interface Props {
    link: string;
}

export default function Link({link}: Props) {
    return (
        <li>
            <a href={`${link}.html`}>{link}</a>
        </li>
    )
}