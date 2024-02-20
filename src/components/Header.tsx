
import styles from "./Header.module.css"
import HeaderLogo from "../assets/todo-logo.svg"

export default function Header(){
    return(
        <header className={styles.header}>
            <img src={HeaderLogo} className={styles.headerLogo}></img>
        </header>
    )
}