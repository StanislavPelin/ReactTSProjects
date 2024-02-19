interface Props {
    social: string;
}

export default function SocialIcon({social}: Props) {
    return (
        <li>
            <a href="https://www.twitter.com">
                <i className={`fab +${social}`}></i>
            </a>
        </li>
    )
}