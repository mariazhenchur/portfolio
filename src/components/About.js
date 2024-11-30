import styles from '../styles/About.module.css';
import { Mail, ExternalLink } from 'lucide-react';

export default function About({ isVisible }) {
    return (
        <section id="about" className={`${styles.about} ${isVisible.about ? styles.visible : ''}`} data-animate>
            <div className={styles.content}>
                <h2>About Me</h2>
                <p>
                I have been studying frontend development for a year and a half, focusing on HTML, CSS, and JavaScript, along with frameworks like React and Redux. I have experience building dynamic, responsive applications with a strong emphasis on performance optimization, cross-browser compatibility, and accessibility. 
                </p>
                <div className={styles.buttons}>
                    <a href="mailto:mariazhenchur@gmail.com" className={styles.contactButton}>
                        <Mail className={styles.buttonIcon} /> Contact Me
                    </a>
                    <a href={`${process.env.PUBLIC_URL}/MariiaZhenchurCV.pdf`} download="MariiaZhenchurCV.pdf" className={styles.cvButton}>
                        <ExternalLink className={styles.buttonIcon} /> Download CV
                    </a>
                </div>
            </div>
        </section>
    );
}
