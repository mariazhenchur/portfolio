import { Github, Mail, Linkedin, ArrowDown } from 'lucide-react';
import styles from '../styles/Hero.module.css';

export default function Hero() {
    return (
        <section id="home" className={styles.hero} data-animate>
            <div className={styles.content}>
                <h1 className={styles.title}>Mariia Zhenchur</h1>
                <p className={styles.subtitle}>WebUI Software Engineer (React + Node.js)</p>
                <div className={styles.icons}>
                    {[{
                        href: 'https://github.com/mariazhenchur', 
                        Icon: Github
                    }, {
                        href: 'https://www.linkedin.com/in/mariia-zhenchur-286a80296/', 
                        Icon: Linkedin
                    }, {
                        href: 'mailto:mariazhenchur@gmail.com', 
                        Icon: Mail
                    }].map((item, index) => (
                        <a key={index} href={item.href} className={styles.iconLink} target="_blank" rel="noopener noreferrer">
                            <item.Icon className={styles.icon} />
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
