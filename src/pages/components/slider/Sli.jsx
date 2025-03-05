import './Slider.scss';
import StackIcon from 'tech-stack-icons';
import React, { RefObject, useEffect, useRef } from 'react';


const Sli = () => {
    const mujElementRef = useRef(null);

    useEffect(() => {
        console.log(mujElementRef.current);
    });

    return (
        <div className="slider">
            <StackIcon ref={mujElementRef} name="html5" />
            <StackIcon className="end-pos" name="css3" />
            <StackIcon className="active" name="sass" />
            <StackIcon className="start-pos" name="reactjs" />
            <StackIcon className="start-pos" name="js" />
            <StackIcon className="start-pos" name="typescript" />
            <StackIcon className="start-pos" name="csharp" />
        </div>
    );
};

export default Sli;
