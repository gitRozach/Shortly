import styled from 'styled-components';

const StyledFooterBar = styled.div`
    
    @media screen and (min-width: 375px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    @media screen and (min-width: 1440px) {
        display: grid;
        grid-template-columns: 20% 20% 20% 20% 20%;
    }
    
    
    align-items: flex-start;
    justify-content: center;
    
    padding: 0;
    margin: 0;
    width: 100%;

    font-family: 'Poppins', sans-serif;
    font-weight: 700;

    background: hsl(260, 8%, 14%);


    button {
        cursor: pointer;
        border: none;
        outline: none;
        background: transparent;
        color: hsl(0, 0%, 75%);
        margin-bottom: .8rem;
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        font-weight: 500;
    }

    .footer-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%; 
        margin: 0rem 0rem 1rem 0rem;
        color: hsl(257, 7%, 63%);
        flex-direction: column;
    }

    .footer-icon-box {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 3rem 0rem;
    }

    .footer-social-media-box {
        display: flex;
        margin: 3rem 0rem;        
    }

    .footer-logo-img {
        fill: white;
        color: white;
    }
`

export default StyledFooterBar;