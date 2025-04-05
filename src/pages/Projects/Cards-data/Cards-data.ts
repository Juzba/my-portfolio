import img1 from "./images/Sudoku.png"
import img2 from './images/firebase1.png';
import img3 from './images/Advenced-slider.png';
import img4 from './images/faq.png';
import img5 from './images/snake.png';
import img6 from './images/iss-image.png';

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
        name: 'Extreme Sudoku solver',
        image: img1,
        created: ['C#', 'Web Api', 'TS', "React"],
        description: 'Po zadání sudoku se automaticky vyřeší',
        playable: true,
    },
    {
        id: 1,
        name: 'FirebaseDB project',
        image: img2,
        created: ['React', 'Firebase', 'Scss', 'TS'],
        description: 'Uklládání a načítání filmu z databáze',
        playable: true,
    },
    {
        id: 2,
        name: 'Advenced Slider',
        image: img3,
        created: ['React', 'Scss', 'TS'],
        description: 'Automatické posouvání filmů nebo přes buttony.',
        playable: true,
    },
    {
        id: 3,
        name: 'Otázky a odpovědi',
        image: img4,
        created: ['React', 'Scss', 'TS'],
        description: 'Otevírací lišty dotazy a odpovědi.',
        playable: true,
    },
    {
        id: 4,
        name: 'Had',
        image: img5,
        created: ['React', 'Scss', 'TS'],
        description: 'Classic Snake. Optimized for PC',
        playable: true,
    },
    {
        id: 5,
        name: 'Iss-Coordinates Api ',
        image: img6,
        created: ['React', 'Scss', 'TS'],
        description: 'Načtení aktuálních souřadnic ze servru pomoci Api',
        playable: true,
    },
];

export default ProjectData;
