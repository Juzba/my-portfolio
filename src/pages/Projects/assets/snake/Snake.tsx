import './Snake.scss';
import SnakeFunc from './SnakeFunc';
import { useRef, useEffect } from 'react';

let direction = 'Right';
let lastDirection = 'Left';
let posX: number;
let posY: number;
let score = 0;
let count = 0;
let foodPos = new SnakeFunc(650, 300);
let start = false;
let listSnake = [new SnakeFunc(500, 450), new SnakeFunc(450, 450), new SnakeFunc(400, 450), new SnakeFunc(350, 450)];

const Snake = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const scoreRef = useRef<HTMLHeadingElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        const DrawText = (context: CanvasRenderingContext2D | null) => {
            if (context) {
                DrawGame(context);

                context.fillStyle = '#7c7763';
                context.font = '50px Arial';
                context.fillText('Ovládání: w,a,s,d', 50, 80);
                context.fillText('Start: Enter', 50, 180);
            }
        };

        const canvasP = canvasRef.current;
        if (canvasP) {
            const context = canvasP.getContext('2d');
            if (context) {
                contextRef.current = context;
                canvasP.width = 800;
                canvasP.height = 600;

                DrawText(context);
            } else {
                console.error('Nepodařilo se získat kontext 2D.');
            }
        } else {
            console.error('Canvas není k dispozici.');
        }

        document.addEventListener('keydown', function (event) {
            if (event.key === 'w' && lastDirection !== 'Down') direction = 'Up';
            else if (event.key === 's' && lastDirection !== 'Up') direction = 'Down';
            else if (event.key === 'a' && lastDirection !== 'Right') direction = 'Left';
            else if (event.key === 'd' && lastDirection !== 'Left') direction = 'Right';
            else if (event.key === 'Enter') start = true;
        });

        setInterval(() => {
            if (start === true) {
                if (count === 0) {
                    Reset();
                    count++;
                    if (scoreRef.current) scoreRef.current.innerText = `Score: ${score}`;
                }

                console.log('Snake move: ' + count);

                if (direction === 'Up') posY -= 50;
                else if (direction === 'Down') posY += 50;
                else if (direction === 'Left') posX -= 50;
                else if (direction === 'Right') posX += 50;
                lastDirection = direction;

                if (SnakeFunc.colision(posX, posY, listSnake)) {
                    start = false;
                    DrawEnd(contextRef.current);
                } // Konec
                else {
                    listSnake.unshift(new SnakeFunc(posX, posY));
                    Food();
                    DrawGame(contextRef.current);
                    // DrawGame();
                }
            } else count = 0;
        }, 300);
    }, []);

    const Food = () => {
        if (SnakeFunc.Compare(foodPos, listSnake[0])) {
            foodPos = SnakeFunc.CreateFood(listSnake);
            if (scoreRef.current) scoreRef.current.innerText = `Score: ${(score += 100)}`; // score ++
        } else listSnake.pop();
    };

    const DrawGame = (context: CanvasRenderingContext2D | null) => {
        if (context) {
            context.fillStyle = '#2A2929';
            context.fillRect(0, 0, context.canvas.width, context.canvas.height);

            for (let i = 0; i < listSnake.length; i++) {
                // Draw Snake
                if (i === 0) context.fillStyle = '#d87204';
                else context.fillStyle = '#d3832e';
                context.fillRect(listSnake[i].X + 1, listSnake[i].Y + 1, 49, 49);
            }

            if (foodPos) {
                // Draw Food
                context.fillStyle = '#DC0018';
                context.fillRect(foodPos.X + 1, foodPos.Y + 1, 49, 49);
            }
        }
    };

    const DrawEnd = (context: CanvasRenderingContext2D | null) => {
        if (context) {
            context.fillStyle = '#7c7763';
            context.font = '80px Arial';
            context.fillText('Game Over', 200, 300);
        }
    };

    const Reset = () => {
        score = 0;
        foodPos = SnakeFunc.CreateFood(listSnake);
        posX = 100;
        posY = 200;
        direction = 'Right';
        lastDirection = 'Left';
        listSnake = [new SnakeFunc(posX, posY), new SnakeFunc(posX - 50, posY), new SnakeFunc(posX - 100, posY)];
    };

    return (
        <div className="snake">
            <h1 ref={scoreRef}>Snake Game</h1>

            {window.innerWidth > 1150 ? (
                <div className="border">
                    <canvas onKeyDown={() => (start = true)} ref={canvasRef} id="canvas"></canvas>
                </div>
            ) : (
                <h2>Hada lze hrát jen na obrazovce větší než 1200px.</h2>
            )}
        </div>
    );
};

export default Snake;
