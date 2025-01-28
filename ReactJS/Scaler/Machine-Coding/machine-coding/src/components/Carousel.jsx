import { memo, useCallback, useEffect, useState } from "react";

const items = [
    {
        id: 1,
        imageUrl:
            "https://images.pexels.com/photos/14286166/pexels-photo-14286166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Item 1",
        description: "Description of item 1",
    },
    {
        id: 2,
        imageUrl:
            "https://images.pexels.com/photos/13455799/pexels-photo-13455799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Item 2",
        description: "Description of item 2",
    },
    {
        id: 3,
        imageUrl:
            "https://images.pexels.com/photos/15582923/pexels-photo-15582923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Item 3",
        description: "Description of item 3",
    },
];

export default memo(function Carousel() {

    const [currentItem, setCurrentItem] = useState(0);

    const handlePrev = useCallback(() => {

        setCurrentItem(prevCurrentItem => {

            if (prevCurrentItem === 0)
                return items.length - 1;

            else
                return prevCurrentItem - 1;
        });

    }, [])

    const handleNext = useCallback(() => {

        setCurrentItem(prevCurrentItem => {
            if (items.length - 1 === prevCurrentItem)
                return 0;

            else
                return prevCurrentItem + 1;
        })

    }, [])

    return (
        <div style={{ marginTop: 'calc(100vh - 85vh)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <button className="btn" onClick={handlePrev}>Prev</button>
            <div style={{ textAlign: 'center', margin: '2rem' }}>
                <img
                    height="400"
                    width="500"
                    src={items[currentItem].imageUrl}
                    alt={items[currentItem].title}
                    style={{ borderRadius: '10px' }}
                />
                <h2>{items[currentItem].title}</h2>
                <p>{items[currentItem].description}</p>
            </div>
            <button className="btn" onClick={handleNext}>Next</button>
        </div>
    );
})