import { useState } from "react";

const Carousel = () => {

    const items = [
        { id: 1, title: 'Item 1', content: 'This is content of Item 1', src: "https://images.pexels.com/photos/31950254/pexels-photo-31950254/free-photo-of-elegant-black-and-white-wedding-ceremony-scene.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
        { id: 2, title: 'Item 2', content: 'This is content of Item 2', src: "https://images.pexels.com/assets/static/images/canva/photo-background-remover.png?w=600" },
        { id: 3, title: 'Item 3', content: 'This is content of Item 3', src: "https://images.pexels.com/photos/27873061/pexels-photo-27873061/free-photo-of-black-and-white-photograph-of-courtyard-with-many-windows.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
    ]
    const [currIndex, setCurrIndex] = useState(0);

    const handleNext = () => {
        setCurrIndex((prevIndex) => {
            if (prevIndex === items.length - 1) {
                return 0;
            }
            return prevIndex + 1;
        });
    }

    const handlePrev = () => {
        setCurrIndex((prevIndex) => {
            if (prevIndex === 0) {
                return items.length - 1;
            }
            return prevIndex - 1;
        });
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <button onClick={handlePrev}>Prev</button>
            <div>
                <img src={items[currIndex].src} alt="" style={{ height: '200px', width: '200px' }} />
                <h2>{items[currIndex].title}</h2>
                <p>{items[currIndex].content}</p>
            </div>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default Carousel
