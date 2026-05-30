import "../css/header.css"
export default function Header(){
    return (
        <header>
            <div className="header">
            <div className="header-logo">✿ <span>AK</span></div>
            <nav>
                <ul className="nav-lists">
                    <a href="#home"><li>home</li></a>
                   <a href="#about"> <li>about me </li></a>
                   <a href="#skills"> <li>skills</li></a>
                   <a href="#project"> <li>project</li></a> 
                </ul>
            </nav>
            <a href="#contact">
            <button className="hireme-btn">Hire Me</button>
            </a>
            </div> 
        </header>
    ) 
}