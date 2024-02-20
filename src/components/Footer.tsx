export default function Footer() {
    const date = new Date().getFullYear();

    return (
        <footer className="section">
            <p>
                copyright &copy; backroads travel tours company <span id="date">{date}</span>.all rights reserved
            </p>
        </footer>
    )
}