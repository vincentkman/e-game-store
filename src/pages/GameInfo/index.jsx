import React, { useContext } from 'react';
import { GameContext } from '../../context/game';
import { TrolleyContext } from '../../context/trolley';
import { Link, useParams, useHistory } from 'react-router-dom';
import StyledLandingPage from '../../components/styled-components/StyledLandingPage';
import originalImg from '../../images/background/zelda.jpg';
import Loading from '../../components/Loading';
import './game-info.scss';

function GameInfo() {
    const { id } = useParams();
    const history = useHistory();
    const { games } = useContext(GameContext);
    const { addToTrolley } = useContext(TrolleyContext);
    const game = games.find(item => item.id === id);
    if (!game) {
        return <Loading />;
    }
    const { title, description, price, images } = game;
    const [landingPageImg, ...gameImg] = images;
    // const url = gameImg.url;
    return (
        <div className='game-info'>
            <StyledLandingPage img={landingPageImg || originalImg}>
                {/* <div className="landing-page-inner">
                    <Link to='/games'>
                        <button className="btn-default">Back to Games</button>
                    </Link>
                </div> */}
            </StyledLandingPage>
            <div className='game-info-detail'>
                <div>
                    <img src={gameImg} alt="one item" className='game-info-detail-img' />
                </div>
                <div className='game-info-detail-box'>
                    <h2 className='game-info-detail-box-title'>{title}</h2>
                    <h3 className='game-info-detail-box-price'><strong>Price: </strong><span>£{price}</span>{' & '}Free Delivery</h3>
                    <p className='game-info-detail-box-description'>{description}</p>
                    <div className='game-info-detail-box-btn'>
                        <button
                            className='game-info-detail-box-btn-trolley btn-default'
                            onClick={() => {
                                addToTrolley(game);
                                history.push('/trolley')
                            }}
                        >
                            add to Trolley
                                </button>
                        <Link to='/games'>
                            <button className='game-info-detail-box-btn-items btn-default'>
                                back to games
                                    </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GameInfo;
