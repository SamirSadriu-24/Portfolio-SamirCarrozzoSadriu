import { Link } from "react-router-dom"
import styles from '../styles/MyNavbar.module.css'
function MyNavbar(){
    return(
        <>
        <nav className={styles.navbar}>
            <Link to='/'><p className={styles.code}>sam - appunti</p></Link>
            <ul className={styles.lista}>
                <li>
                    <Link to='/projects'>progetti</Link>
                </li>
                <li>
                    <Link to='/stacks'>stack</Link>
                </li>
                <li>
                    <Link to='/whoami'>chi sono</Link>
                </li>
                <li>
                    <Link to='/contacts'>contatti</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}
export default MyNavbar