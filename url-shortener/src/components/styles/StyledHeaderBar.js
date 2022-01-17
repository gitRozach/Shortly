import styled from 'styled-components';

const StyledHeaderBar = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;
    align-items: center;
    height: 100px;
    font-family: 'Poppins', sans-serif;
    padding: 20px 30px;
    margin 0;
    width: 100%;

    @media screen and (min-width: 375px) {
        Button {
            opacity: 0;
        }
    }

    @media screen and (min-width: 1440px) {
        Button {
            opacity: 1;
        }
    }
`

export default StyledHeaderBar;


