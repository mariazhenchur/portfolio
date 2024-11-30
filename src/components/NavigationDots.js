import styles from '../styles/NavigationDots.module.css';

export default function NavigationDots({ isVisible }) {
    return (
        <div className={styles.navigation}>
            {['home', 'about', 'skills', 'projects'].map(section => (
                <a
                    key={section}
                    href={`#${section}`}
                    className={`${styles.dot} ${isVisible[section] ? styles.active : ''}`}
                />
            ))}
        </div>
    );
}
