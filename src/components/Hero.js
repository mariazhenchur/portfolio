import { Github, Mail, Linkedin, ArrowDown } from 'lucide-react';
import styles from '../styles/Hero.module.css';

export default function Hero() {
    return (
        <section id="home" className={styles.hero} data-animate>
            <div className={styles.content}>
                <h1 className={styles.title}>Mariia Zhenchur</h1>
                <p className={styles.subtitle}>WebUI Software Engineer (React + Node.js)</p>
                <div className={styles.icons}>
                    {[Github, Linkedin, Mail].map((Icon, index) => (
                        <a key={index} href="#" className={styles.iconLink}>
                            <Icon className={styles.icon} />
                        </a>
                    ))}
                </div>
                <a href="#about" className={styles.arrowLink}>
                    <ArrowDown className={styles.arrow} />
                </a>
            </div>
        </section>
    );
}
