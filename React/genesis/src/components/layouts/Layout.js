import styles from "./Layout.module.css"
import MainMenu from "./MainMenu";
function Layout(props){
    return <div className={styles.main}>
        <MainMenu/>
        {props.children}
    </div>
}

export default Layout;