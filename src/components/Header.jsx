import "../css/header.css"
export default function Header(){
    return (
        <header>
            <div className="header">
            <div className="header-logo">✿ <span>AK</span></div>
            <nav>
                <ul className="nav-lists">
                    <li>home</li>
                    <li>about me </li>
                    <li>skills</li>
                    <li>project</li>
                </ul>
            </nav>
            <button className="hireme-btn">Hire Me</button>
            </div>
        </header>
    )
}