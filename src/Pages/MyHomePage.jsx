import styles from '../styles/myHomePage.module.css'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function MyHomePage() {
    return (
        <>
            <div className={styles.background}>
                <div className={styles.container}>
                    <p className={styles.code}> //appunti notturni</p>

                    <div className="hero">
                        <h1 className={styles.titolo}>Costruisco sistemi, racconto storie, <br />debuggo a notte fonda.</h1>
                        <p className={styles.code}>
                            Full-stack developer - React, Node.js, MySQL, Java. <br />
                            Dal mondo umanistico al codice, senza scorciatoie.
                        </p>
                        <div className={styles.button_container}>
                            <button type="button" className={styles.bottoni}>
                                <Link to='/projects'>Vedi progetti</Link>
                            </button>
                            <button className={styles.bottoni}
                            >
                                <a
                                    href="/CV-Samir-Carrozzo-Sadriu.pdf"
                                    download="CV-Samir-Carrozzo-Sadriu.pdf"
                                >
                                    Scarica CV
                                </a>
                            </button>
                        </div>
                    </div>

                    <p className={styles.code}>//progetti</p>
                    <div className="progetti-hero">
                        <div className={styles.container_card}>
                            <Card className={styles.singola_card}>
                                <h2>
                                    BooRoad
                                </h2>
                                <div className={styles.icone}>
                                    <i class="fa-brands fa-react"></i>
                                    <i class="fa-brands fa-css"></i>
                                    <i class="fa-brands fa-js"></i>
                                    <i class="fa-brands fa-html5"></i>
                                </div>
                                <a target="_blank"
                                    href="https://github.com/SamirSadriu-24/booroad-cs5-main">Vai al progetto su Github
                                </a>
                            </Card>
                            <Card className={styles.singola_card}>
                                <h2>
                                    NeonPress
                                </h2>
                                <div className={styles.icone}>
                                    <i className="devicon-spring-original"></i>
                                    <i class="fa-brands fa-css"></i>
                                    <i className="devicon-mysql-plain"></i>
                                    <i className="devicon-bootstrap-plain"></i>
                                    <i class="devicon-thymeleaf-plain"></i>
                                </div>
                                <a target="_blank"
                                    href="https://github.com/SamirSadriu-24/Neon-Press-Journal-Site">Vai al progetto su Github
                                </a>
                            </Card>
                            <Card className={styles.singola_card}>
                                <h2>
                                    BoolFlix
                                </h2>
                                <div className={styles.icone}>
                                    <i className="fa-brands fa-react"></i>
                                    <i className="fa-brands fa-css3"></i>
                                    <i className="fa-brands fa-js"></i>
                                    <i className="fa-brands fa-html5"></i>
                                </div>
                                <a target="_blank"
                                    href="https://github.com/SamirSadriu-24/react-boolflix">Vai al progetto su Github
                                </a>
                            </Card>
                        </div>
                    </div>

                    <p className={styles.code}>//stack</p>
                    <div className={styles.stack}>
                        <i className="devicon-html5-plain"></i>
                        <i className="devicon-css3-plain"></i>
                        <i className="devicon-bootstrap-plain"></i>
                        <i className="devicon-javascript-plain"></i>
                        <i className="devicon-nodejs-plain-wordmark"></i>
                        <i className="devicon-react-original"></i>
                        <i className="devicon-java-plain"></i>
                        <i className="devicon-spring-original"></i>
                        <i class="devicon-thymeleaf-plain"></i>
                        <i className="devicon-mysql-plain"></i>
                        <i className="devicon-git-plain"></i>
                        <i className="devicon-github-original"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyHomePage;