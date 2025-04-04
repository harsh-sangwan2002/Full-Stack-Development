import React, { useEffect, useRef, useState } from 'react';

const images = [
    {
        id: 1,
        src: 'https://images.pexels.com/photos/23369004/pexels-photo-23369004/free-photo-of-heron-flying-above-a-cherry-blossom.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Image 1',
        description: 'Description of item 1'
    },
    {
        id: 2,
        src: 'https://images.pexels.com/photos/30722562/pexels-photo-30722562/free-photo-of-woman-in-flowing-blue-dress-on-wooden-pier.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Image 2',
        description: 'Description of item 2'
    },
    {
        id: 3,
        src: 'https://images.pexels.com/photos/31246541/pexels-photo-31246541/free-photo-of-beautiful-cherry-blossoms-against-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Image 3',
        description: 'Description of item 3'
    },
    {
        id: 4,
        src: 'https://images.pexels.com/photos/31293426/pexels-photo-31293426/free-photo-of-majestic-snowy-mountain-peaks-in-winter-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Image 4',
        description: 'Description of item 4'
    }
];

const Carousel = () => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const intervalRef = useRef(null); // ✅ Store interval ID in a ref

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentIdx(prevIdx => (prevIdx + 1) % images.length);
        }, 2000);

        return () => clearInterval(intervalRef.current); // ✅ Cleanup on unmount
    }, []);

    return (
        <div>
            <img
                src={images[currentIdx].src}
                alt={images[currentIdx].alt}
                style={{ width: '500px', height: '300px', objectFit: 'cover' }}
            />
            <p>{images[currentIdx].description}</p>
        </div>
    );
};

export default Carousel;
