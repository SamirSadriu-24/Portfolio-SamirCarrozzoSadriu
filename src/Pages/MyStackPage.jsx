import styles from '../styles/MyStackPage.module.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

function MyStackPage() {
    return (
        <>
            <div className={styles.background}>
                <div className={styles.container}>
                    <h1 className={styles.code}>//stack</h1>
                    <h2 className={styles.titolo}> Gli strumenti che uso per costruire</h2>
                    <h3 className={styles.subtitolo}>Linguaggi e librerie con cui lavoro quotidianamente, divisi per area.
                    </h3>
                    <p className={styles.code}>Linguaggi</p>
                    <div className={styles.linguaggi}>
                        <Card>
                            <Card.Body className={styles.corpocarta}>
                                <i className={`${styles.icona} devicon-javascript-plain`}></i>
                                <div>
                                    <Card.Title className={styles.titolo}>Javascript</Card.Title>
                                    <Card.Text className={styles.subtitolo}>
                                        Linguaggio Principale
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className={styles.corpocarta}>
                                <i className={`${styles.icona} devicon-java-plain`}></i>
                                <div>
                                    <Card.Title className={styles.titolo}>Java</Card.Title>
                                    <Card.Text className={styles.subtitolo}>
                                        Backend tipizzato
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <p className={styles.code}>FRONTEND</p>
                    <div className={styles.linguaggi}>
                        <Card>
                            <Card.Body className={styles.corpocarta}>
                                <i className={`${styles.icona} devicon-react-plain`}></i>
                                <div>
                                    <Card.Title className={styles.titolo}>React</Card.Title>
                                    <Card.Text className={styles.subtitolo}>
                                        Componenti e UI
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className={styles.corpocarta}>
                                <i className={`${styles.icona} devicon-html5-plain`}></i>
                                <div>
                                    <Card.Title className={styles.titolo}>HTML</Card.Title>
                                    <Card.Text className={styles.subtitolo}>
                                        Struttura semantica
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className={styles.corpocarta}>
                                <i className={`${styles.icona} devicon-css3-plain`}></i>
                                <div>
                                    <Card.Title className={styles.titolo}>CSS</Card.Title>
                                    <Card.Text className={styles.subtitolo}>
                                        Stili e layout
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className={styles.corpocarta}>
                                <i className={`${styles.icona} devicon-bootstrap-plain`}></i>
                                <div>
                                    <Card.Title className={styles.titolo}>Bootstrap</Card.Title>
                                    <Card.Text className={styles.subtitolo}>
                                        Prototipi rapidi
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <p className={styles.code}>BACKEND</p>
                    <div className={styles.linguaggi}>
                        <Card>
                            <Card.Body className={styles.corpocarta}>
                                <i className={`${styles.icona} devicon-nodejs-plain`}></i>
                                <div>
                                    <Card.Title className={styles.titolo}>Node</Card.Title>
                                    <Card.Text className={styles.subtitolo}> Runtime server
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className={styles.corpocarta}>
                                <i className={`${styles.icona} devicon-express-original`}></i>
                                <div>
                                    <Card.Title className={styles.titolo}>Express</Card.Title>
                                    <Card.Text className={styles.subtitolo}>
                                        API e routing
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className={styles.corpocarta}>
                                <i className={`${styles.icona} devicon-spring-plain`}></i>
                                <div>
                                    <Card.Title className={styles.titolo}>Spring</Card.Title>
                                    <Card.Text className={styles.subtitolo}>
                                        Backend Java
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className={styles.corpocarta}>
                                <i className={`${styles.icona} fa-solid fa-fingerprint`}></i>
                                <div>
                                    <Card.Title className={styles.titolo}>Spring Security</Card.Title>
                                    <Card.Text className={styles.subtitolo}>
                                        Autenticazione e Autorizzazione
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className={styles.corpocarta}>
                                <i className={`${styles.icona} devicon-thymeleaf-plain`}></i>
                                <div>
                                    <Card.Title className={styles.titolo}>Thymeleaf</Card.Title>
                                    <Card.Text className={styles.subtitolo}>
                                        Motore di template
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <p className={styles.code}>DATABASE</p>
                    <div className={styles.linguaggi}>
                        <Card>
                            <Card.Body className={styles.corpocarta}>
                                <i className={`${styles.icona} devicon-mysql-plain`}></i>
                                <div>
                                    <Card.Title className={styles.titolo}>Thymeleaf</Card.Title>
                                    <Card.Text className={styles.subtitolo}>
                                        Schemi relazionali
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                <Link className={styles.goBack}to='/'>Torna indietro</Link>
                </div>
            </div>
        </>
    )
}

export default MyStackPage;