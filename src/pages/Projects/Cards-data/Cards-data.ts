import img1 from './images/snake.png';

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
        name: 'Snake',
        image: img1,
        created: ['React', 'Scss', 'Java Script'],
        description: 'Classic Snake ovladaný klavesnicí wasd a start -> Enter',
        playable: true,
    },
    {
        id: 1,
        name: 'Snake',
        image: img1,
        created: ['React', 'Scss', 'Java Script'],
        description: 'Classic Snake ovladaný klavesnicí wasd a start -> Enter',
        playable: true,
    },
    {
        id: 2,
        name: 'Snake',
        image: img1,
        created: ['React', 'Scss', 'Java Script'],
        description: 'Classic Snake ovladaný klavesnicí wasd a start -> Enter',
        playable: true,
    },
    {
        id: 3,
        name: 'Snake',
        image: img1,
        created: ['React', 'Scss', 'Java Script'],
        description: 'Classic Snake ovladaný klavesnicí wasd a start -> Enter',
        playable: false,
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
