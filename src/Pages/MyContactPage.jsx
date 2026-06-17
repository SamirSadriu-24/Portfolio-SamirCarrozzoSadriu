import ContactForm from '../Components/ContactForm';
import styles from '../styles/MyContactPage.module.css'
import { Card } from 'react-bootstrap';

function MyContactPage() {
    return (
        <>
            <div className={styles.background}>
                <div className={styles.container}>
                    <p className={styles.code}>
                    //contatti
                    </p>
                    <h1 className={styles.titolo}>
                        Scrivimi quando vuoi
                    </h1>
                    <p className={styles.subtitolo}>
                        Risposta entro un giorno o due - anche se probabilmente sto <br /> leggendo a notte fonda.
                    </p>
                    <div className={styles.contatti}>
                        <Card>
                            <Card.Body className={styles.corpocarta}>
                                <i className={`${styles.icona} fa-regular fa-envelope`}></i>
                                <div className={styles.testi}>
                                    <Card.Title className={styles.titolo}>Email</Card.Title>
                                    <Card.Text className={styles.titolo}>
                                        Samirsadriuboolean@gmail.com
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className={styles.corpocarta}>
                                <i className={`${styles.icona} devicon-github-original-wordmark`}></i>
                                <div className={styles.testi}>
                                    <Card.Title className={styles.titolo}>Github</Card.Title>
                                    <Card.Text className={styles.titolo}>
                                    </Card.Text>
                                    <a href="https://github.com/SamirSadriu-24" target='_blank'>
                                        SamirSadriu-24
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className={styles.corpocarta}>
                                <i className={`${styles.icona} devicon-linkedin-plain`}></i>
                                <div className={styles.testi}>
                                    <Card.Title className={styles.titolo}>Linkedin</Card.Title>
                                    <Card.Text className={styles.titolo}>
                                        <a href="https://www.linkedin.com/in/samir-carrozzo-sadriu-23501a375" target='_blank'>
                                            in/samir-carrozzo-sadriu-23501a375
                                        </a>
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className={styles.corpocarta}>
                                <i className={`${styles.icona} fa-brands fa-instagram`}></i>
                                <div className={styles.testi}>
                                    <Card.Title className={styles.titolo}>Instagram</Card.Title>
                                    <Card.Text className={styles.titolo}>
                                        <a href="https://www.instagram.com/codingwithsamir?igsh=MXJrNnY0eHRkZmtwaw%3D%3D&utm_source=qr" target='_blank'>
                                        @codingwithsamir
                                        </a>
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <p className={styles.code}>
                        OPPURE SCRIVIMI QUI
                    </p>
                    <ContactForm />
                </div>
            </div>
        </>
    )
}
export default MyContactPage;