import project1 from './assets/images/project1.png';
import project2 from './assets/images/project2.png';
import project3 from './assets/images/project3.png';
import project4 from './assets/images/project4.png';
import project5 from './assets/images/project5.png';

const projectData = [
    {
        title: 'Music Studio Website',
        description: 'Music Studio Website showcasing recording, mixing, and production services. It features smooth animations, a booking button, and easy navigation to the contact section.',
        tech: ['React', 'Tailwind CSS', 'Lucide-React', 'JSX'],
        image: project1,
    },
    {
        title: 'Arstist Page',
        description: 'Artist portfolio website with HTML, CSS, and JavaScript, using BEM methodology. It features a shopping section powered by a JSON file for product management and utilizes Bootstrap for responsive design.',
        tech: ['HTML', 'CSS', 'JavaScript', 'JSON', 'Bootstrap' ],
        image: project2,
    },
    {
        title: 'Recipe Finder',
        description: 'Web application that allows users to search for recipes based on available ingredients. The application integrates with a recipe API to fetch and display cooking instructions, ingredients, and meal preparation details.',
        tech: ['React', 'Fetch API', 'Axios', 'CSS'],
        image: project4,
    },
    {
        title: 'CoffeeLax Bonus Program',
        description: 'A loyalty program for CoffeeLax to track customer bonuses via phone numbers, automatically calculating and storing points. It supports manual adjustments and currently manages 500+ customers.',
        tech: ['JavaScript', 'PHP', 'phpMyAdmin', 'HTML', 'CSS'],
        image: project5,
    },
    {
        title: 'To-do App',
        description: 'A simple and intuitive web application designed to help users organize their daily tasks efficiently. It allows users to add tasks, write notes, track time with an integrated timer, and even play music from Spotify to enhance productivity.',
        tech: ['JavaScript', 'HTML', 'CSS', 'Embedded Spotify Player'],
        image: project3,
    },
];

export default projectData;
