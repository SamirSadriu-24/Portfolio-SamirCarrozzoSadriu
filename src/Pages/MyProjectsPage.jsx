import Card from 'react-bootstrap/Card';
import styles from '../styles/MyProjectsPage.module.css';
import Button from 'react-bootstrap/Button';
import { projects, techIcons } from '../data/projects';
import { Link } from 'react-router-dom';


function MyProjectsPage() {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.scritte}>
                    <h3 className={styles.code}>
                        //progetti
                    </h3>
                    <h1 className={styles.titolo}>
                        Cose che ho costruito
                    </h1>
                    <h3 className={styles.code}>Progetti reali, scritti a mano, con qualche bug risolto a notte fonda. </h3>
                </div>

                {projects.map(project => (
                    <Card key={project.id} className={styles.projectCard}>
                        <Card.Img variant='top' src={project.image} />
                        <Card.Body>
                            <Card.Title className={styles.titolo}>
                                {project.title}
                            </Card.Title>

                            <Card.Text className={styles.quote}>
                                {project.description}
                            </Card.Text>

                            <div className={styles.stack}>
                                {project.technologies.map(tech => (
                                    <span key={tech}>
                                        {techIcons[tech]}
                                        {tech.toUpperCase()}
                                    </span>
                                ))}
                            </div>
                            <a href={project.github} target="_blank" className={styles.button}> Github: <i className="devicon-github-original"></i>
                            </a>
                        </Card.Body>
                    </Card>
                ))}
                <Link className={styles.goBack} to='/'>Torna indietro</Link>

            </div>
        </div>
    )
}
export default MyProjectsPage;