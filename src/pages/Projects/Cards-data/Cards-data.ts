import img1 from './images/firebase1.png';
import img2 from './images/Advenced-slider.png';
import img3 from './images/faq.png';
import img4 from './images/snake.png';

interface type {
    id: number;
    name: string;
    image: string;
    created: string[];
    description: string;
    playable: boolean;
}

const ProjectData: type[] = [
    {
        id: 0,
        name: 'FirebaseDB project',
        image: img1,
        created: ['React', 'Firebase', 'Scss', 'TypeScript'],
        description: 'Uklládání a načítání filmu z databáze',
        playable: true,
    },
    {
        id: 1,
        name: 'Advenced Slider',
        image: img2,
        created: ['React', 'Scss', 'Typescript'],
        description: 'Automatické posouvání filmů nebo přes buttony.',
        playable: true,
    },
    {
        id: 2,
        name: 'Otázky a odpovědi',
        image: img3,
        created: ['React', 'Scss', 'TypeScript'],
        description: 'Otevírací lišty dotazy a odpovědi.',
        playable: true,
    },
    {
        id: 3,
        name: 'Had',
        image: img4,
        created: ['React', 'Scss', 'TypeScript'],
        description: 'Classic Snake. Optimized for PC',
        playable: true,
    },
    {
        id: 4,
        name: 'Snake',
        image: img1,
        created: ['React', 'Scss', 'Java Script'],
        description: 'Classic Snake ovladaný klavesnicí wasd a start -> Enter',
        playable: true,
    },
    {
        id: 5,
        name: 'Snake',
        image: img1,
        created: ['React', 'Scss', 'Java Script'],
        description: 'Classic Snake ovladaný klavesnicí wasd a start -> Enter',
        playable: false,
    },
];

export default ProjectData;
