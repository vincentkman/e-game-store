import React, { useContext } from 'react';
import { GameContext } from '../../../context';
import GameItems from '../GameItems';
// import GameFilter from '../GameFilter';
import Loading from '../../Loading';

function AllGames() {
    const { loading, games } = useContext(GameContext);
    return loading ? 
        <Loading/> : 
        <GameItems games={games} />
}

export default AllGames;
