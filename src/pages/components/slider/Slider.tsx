import { useEffect, useState } from 'react';
import './Slider.scss';
import StackIcon from 'tech-stack-icons';

const iconArrey: string[] = ['html5', 'css3', 'sass', 'reactjs', 'js', 'typescript', 'csharp'];

const Slider = () => {
    const [position, setPosition] = useState<number>(0);

    console.log(position);

    useEffect(() => {
        let count: number = position;
        const t1 = setInterval(() => {
            if (++count > iconArrey.length - 1) count = 0;
            setPosition(count);
        }, 3000);

        return () => clearInterval(t1);
    }, [position]);

    const classNameFunction = (index: number) => {
        if (index === position) return 'icon active';
        else if (index === position + 1 || position === iconArrey.length - 1 && index === 0) return 'icon start-pos';
        return 'icon end-pos';
    };

    return (
        <div className="slider">
            {iconArrey.map((item: string, index: number) => {
                return <StackIcon key={index} className={classNameFunction(index)} name={item} />;
            })}
        </div>
    );
};

export default Slider;
