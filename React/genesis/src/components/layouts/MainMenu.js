import { Link } from "react-router-dom";
import MainMenuStyle from "./MainMenu.module.css"
function MainMenu() {
    return <header className={MainMenuStyle.header}>
        <nav>
            <ul>
                <li><Link to='/'>home</Link></li>
                <li><Link to='/about'>about</Link></li>
                <li><Link to='/contact'>contact</Link></li>
            </ul>
        </nav>
    </header>
}
export default MainMenu;