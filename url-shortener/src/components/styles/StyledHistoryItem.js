import styled from 'styled-components';

const StyledHistoryItem = styled.div`
    display: flex;
    align-items: center;

    padding: 0;
    margin: 0 0 1rem 0;
    width: 100%;
    border-radius: 8px;
    transform: translateY(200px);

    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 300;
    color: black;

    background: white;
    animation: slide-in-animation 1s ease forwards; 

    .short-url-label {
        position: absolute;
        right: 9rem;
        text-decoration: none;
        font-size: 18px;
        font-weight: 500;
        color: black;
    }
    
    Button {
        position: absolute;
        right: 1rem;
        max-width: 7rem;
    }

    @media screen and (min-width: 375px) {
        flex-direction: column;
        padding: 0rem 0rem;
    
        .short-url-label {
            position: static;
        }
        
        Button {
            position: static;
            max-width: 95%;
        }
    }

    @media screen and (min-width: 1440px) {
        flex-direction: row;
        padding: 1rem 0rem;

        .long-url-label {
            text-align: left;
            padding: 0rem 0rem 0rem 1rem;
        }
    
        .short-url-label {
            position: absolute;
            right: 9rem;
        }
        
        Button {
            position: absolute;
            right: 1rem;
            max-width: 7rem;
        }
    }

    .short-url-label {
        color: hsl(180, 66%, 49%);
    }

    .long-url-label {
        text-align: left;
        padding: 0rem 0rem 0rem 1rem;
        font-size: 18px;
        font-weight: 700;
    }

    @keyframes slide-in-animation {
        0% {
            transform: translateY(200px);
            opacity: 0;
        }
        100% {
            transform: translateY(0px);
            opacity: 1;
        }
    }
`

export default StyledHistoryItem;