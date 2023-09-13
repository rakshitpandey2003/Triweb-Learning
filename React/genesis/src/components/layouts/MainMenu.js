import { Link } from "react-router-dom";
function MainMenu(){
return <header>
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