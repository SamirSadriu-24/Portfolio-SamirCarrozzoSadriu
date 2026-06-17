import styles from '../styles/MyWhoAmIPage.module.css';
import { Link } from 'react-router-dom';

function MyWhoAmIPage() {
    return (
        <div className={styles.background}>
            <div className={styles.container}>

                <div className={styles.header}>
                    <p className={styles.code}>// chi sono</p>
                    <h1 className={styles.titolo}>
                        Dalle parole al codice, senza perdere il filo
                    </h1>
                    <p className={styles.bio}>
                        Vengo da studi umanistici e un’esperienza all’estero, poi ho deciso di imparare a costruire le cose invece di limitarmi a raccontarle. 
                        Ora scrivo codice — di giorno per i progetti, di notte per curiosità.
                    </p>
                </div>
                <div className={styles.section}>
                    <p className={styles.code}>PERCORSO</p>

                    <div className={styles.timeline}>

                        <div className={styles.timelineOggetto}>
                            <div className={styles.timelinePunto}></div>
                            <div>
                                <p className={styles.timelineTempo}>prima</p>
                                <p className={styles.timelineTesto}>Studi umanistici ed esperienza all’estero</p>
                            </div>
                        </div>

                        <div className={styles.timelineOggetto}>
                            <div className={styles.timelinePunto}></div>
                            <div>
                                <p className={styles.timelineTempo}>poi</p>
                                <p className={styles.timelineTesto}>Bootcamp full-stack — Boolean Careers</p>
                            </div>
                        </div>

                        <div className={styles.timelineOggetto}>
                            <div className={styles.timelinePunto}></div>
                            <div>
                                <p className={styles.timelineTempo}>poi</p>
                                <p className={styles.timelineTesto}>Specializzazione Java Spring — Coursera</p>
                            </div>
                        </div>

                        <div className={styles.timelineOggetto}>
                            <div className={styles.timelinePunto}></div>
                            <div>
                                <p className={styles.timelineTempo}>ora</p>
                                <p className={styles.timelineTesto}>42 Firenze — selezione Piscine, C++</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={styles.section}>
                    <p className={styles.code}>FUORI DAL CODICE</p>

                    <div className={styles.interestsGrid}>
                        <div className={styles.interestCard}>
                            <i class="fa-brands fa-d-and-d"></i>
                            <p>D&D al tavolo</p>
                        </div>
                        <div className={styles.interestCard}>
                            <i class="fa-solid fa-gamepad"></i>
                            <p>Videogiochi</p>
                        </div>
                        <div className={styles.interestCard}>
                            <i class="fa-solid fa-mask"></i>
                            <p>Fumetti italiani</p>
                        </div>
                        <div className={styles.interestCard}>
                            <i class="fa-solid fa-microchip"></i>
                            <p>Elettronica e hardware</p>
                        </div>
                    </div>
                </div>

                <Link className={styles.goBack} to="/">Torna indietro</Link>

            </div>
        </div>
    );
}

export default MyWhoAmIPage;