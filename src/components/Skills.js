import styles from '../styles/Skills.module.css';
import { Code2, Monitor, Boxes } from 'lucide-react';

const skillCategories = [
    {
        icon: <Code2 className={styles.skillIcon} />,
        title: 'Programming Languages',
        skills: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
    },
    {
        icon: <Monitor className={styles.skillIcon} />,
        title: 'Frameworks/Technologies',
        skills: ['React', 'Node.js', 'JSX', 'Redux', 'OOP', 'RESTful APIs', 'Material-UI', 'Axios'],
    },
    {
        icon: <Boxes className={styles.skillIcon} />,
        title: 'Development Tools',
        skills: ['Git & GitHub', 'Jest', 'Webpack', 'ESLint'],
    },
];

export default function Skills({ isVisible }) {
    return (
        <section id="skills" className={`${styles.skills} ${isVisible.skills ? styles.visible : ''}`} data-animate>
            <h2>Skills</h2>
            <div className={styles.categories}>
                {skillCategories.map((category, index) => (
                    <div key={index} className={styles.category}>
                        {category.icon}
                        <h3>{category.title}</h3>
                        <ul>
                            {category.skills.map((skill, i) => (
                                <li key={i} className={styles.skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
