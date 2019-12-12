import styled from 'styled-components';
import originalImg from '../../images/background/zelda.jpg';

const StyledLandingPage = styled.div`
    background: url(${props => props.img ? props.img : originalImg});
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    background-blend-mode: multiply;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export default StyledLandingPage;