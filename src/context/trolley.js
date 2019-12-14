import React, { useState, useEffect } from 'react';

// get trolley from local storage
function getStorageTrolley() {
    return localStorage.getItem('trolley') ? 
        JSON.parse(localStorage.getItem('trolley')) : [];
}

const TrolleyContext = React.createContext();

function TrolleyProvider({ children }) {
    const [trolley, setTrolley] = useState(getStorageTrolley());
    const [trolleyItems, setTrolleyItems] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // local storage 
        localStorage.setItem('trolley', JSON.stringify(trolley));
        // Trolley items 
        let newTrolleyItems = trolley.reduce((total, trolleyItem) => {
            // console.log(total, trolleyItem);
            return total + trolleyItem.count
        }, 0);
        setTrolleyItems(newTrolleyItems);

        // Trolley total
        let newTotal = trolley.reduce((total, trolleyItem) => {
            return (total + trolleyItem.count * trolleyItem.price);
        }, 0);
        newTotal = parseFloat(newTotal.toFixed(2));
        setTotal(newTotal);
    }, [trolley]);


    const remove = (id) => {
        let tempTrolley = [...trolley];
        tempTrolley = tempTrolley.filter(item => item.id !== id);
        setTrolley(tempTrolley);
    }

    const increase = (id) => {
        let tempTrolley = [...trolley];
        tempTrolley = tempTrolley.map(item => {
            return item.id === id
                ? { ...item, count: item.count + 1 }
                : { ...item }
        });
        setTrolley(tempTrolley);
    }

    const decrease = (id, count) => {
        if (count === 1) {
            remove(id);
        } else {
            let tempTrolley = [...trolley];
            tempTrolley = tempTrolley.map(item => {
                return item.id === id
                    ? { ...item, count: item.count - 1 }
                    : { ...item }
            });
            setTrolley(tempTrolley);
        }
    }

    const addToTrolley = (game) => {
        const { id, title, price, images } = game;
        const [landingPageImg, gameImg] = images;
        const tempTrolley = [...trolley];
        const tempSingleGame = tempTrolley.find(item => item.id === id);
        if(tempSingleGame) {
            increase(id);
        } else {
            const newGame = { id, title, price, gameImg, count: 1 };
            const newTrolley = [...trolley, newGame];
            setTrolley(newTrolley)
        }
    }

    const clearTrolley = () => {
        setTrolley([]);
    }

    return (
        <TrolleyContext.Provider value={{
            trolley,
            trolleyItems,
            total,
            remove,
            increase,
            decrease,
            addToTrolley,
            clearTrolley
        }}>
            {children}
        </TrolleyContext.Provider>
    );
}

export { TrolleyProvider, TrolleyContext }