import React, { useEffect, useState } from 'react';
import './Introduction.css';

const Introduction = () => {
    const [title, setTitle] = useState('');
    const fullTitle = "CS Student";

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            setTitle((prevTitle) => prevTitle + fullTitle[index]);
            index++;
            if (index === fullTitle.length) {
                clearInterval(timer);
            }
        }, 100);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="introduction">
            <h1>Hi, I'm Seddiq.</h1>
            <h2>{title}</h2>
            <p>
                I'm a 2nd year computer science student at ENSEIRB-MATMECA. I am passionate about artificial intelligence and I had the chance to collaborate with professionals in the medical field. I still have a strong affinity for mathematics and physics.
            </p>
        </div>
    );
};

export default Introduction;
