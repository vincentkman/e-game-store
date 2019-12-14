import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GameContext = React.createContext();

function GameProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [games, setGames] = useState([]);
    const [featured, setFeatured] = useState([]);
    const [navbarOpen, setNavbarOpen] = useState(false);

    useEffect(() => {
        const url = 'https://5df01d9802b2d90014e1bbba.mockapi.io/api/v1';
        setLoading(true);
        axios
            .get(`${url}/games`
            )
            .then(response => {
                setGames(response.data);
                setFeatured(featuredItems(response.data));
                setLoading(false);
            });
        return () => { }
    }, []);

    // filter to featured games
    const featuredItems = (game) => {
        return game.filter(item => item.featured);
    }

    // Navbar drop down menu when in mobile mode
    const navbarToggler = () => {
        return !navbarOpen ? setNavbarOpen(true) : setNavbarOpen(false)
    }

    return (
        <GameContext.Provider value={{
            loading,
            games,
            featured,
            navbarOpen,
            navbarToggler,
        }}>
            {children}
        </GameContext.Provider>
    );
}

export { GameProvider, GameContext, }