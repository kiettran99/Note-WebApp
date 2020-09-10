import { useState, useEffect } from 'react';

const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({
                x: e.pageX,
                y: e.pageY
            });
        };

        // Register event listener to follow position mouse
        document.addEventListener('mousemove', handleMouseMove);

        // Cleanup Effect when did unmount
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    return position;
};

export default useMousePosition;