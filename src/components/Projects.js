import styles from '../styles/Projects.module.css';
import projectData from '../data';

export default function Projects({ isVisible }) {
    return (
        <section id="projects" className={`${styles.projects} ${isVisible.projects ? styles.visible : ''}`} data-animate>
            <h2>Projects</h2>
            <div className={styles.projectGrid}>
                {projectData.map((project, index) => (
                    <div key={index} className={styles.project}>
                        <img src={project.image} alt={project.title} className={styles.projectImage} />
                        <div className={styles.projectContent}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className={styles.techList}>
                                {project.tech.map((tech, i) => (
                                    <span key={i} className={styles.tech}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
