import styled from 'styled-components';

const backgroundDesktopSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="250"><g fill="#4B3F6B" fill-rule="evenodd"><path d="M830-63.482C830 19.351 854.36 78.678 944.732 117c90.371 38.321 177.686 3.352 265.277 23.4 87.59 20.048 87.59 149.195 170.077 228.671 82.486 79.476 256.405 98.781 397.82 18.15 141.415-80.632 205.52-268.896 163.267-379.902C1898.919-103.687 1817.943-205 1427.236-205S830-146.314 830-63.482zM-263.351 570.909c29.685 77.331 73.689 123.988 171.79 127.377 98.102 3.39 167.085-60.547 256.043-73.22 88.958-12.674 135.24 107.895 240.73 152.532 105.488 44.638 274.775.333 377.9-125.622C886.24 526.021 878.62 327.29 799.392 238.798 720.162 150.307 608.257 84.743 243.5 224.76c-364.757 140.017-536.537 268.818-506.852 346.149zM-514-377.482c0 82.833 24.36 142.16 114.732 180.482 90.371 38.321 177.686 3.352 265.277 23.4 87.59 20.048 87.59 149.195 170.077 228.671 82.486 79.476 256.405 98.781 397.82 18.15 141.415-80.632 205.52-268.896 163.267-379.902C554.919-417.687 473.943-519 83.236-519S-514-460.314-514-377.482z"/></g></svg>';
const backgroundMobileSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="375" height="300"><g fill="#4B3F6B" fill-rule="evenodd"><path d="M-263.351 570.909c29.685 77.331 73.689 123.988 171.79 127.377 98.102 3.39 167.085-60.547 256.043-73.22 88.958-12.674 135.24 107.895 240.73 152.532 105.488 44.638 274.775.333 377.9-125.622C886.24 526.021 878.62 327.29 799.392 238.798 720.162 150.307 608.257 84.743 243.5 224.76c-364.757 140.017-536.537 268.818-506.852 346.149zM-514-377.482c0 82.833 24.36 142.16 114.732 180.482 90.371 38.321 177.686 3.352 265.277 23.4 87.59 20.048 87.59 149.195 170.077 228.671 82.486 79.476 256.405 98.781 397.82 18.15 141.415-80.632 205.52-268.896 163.267-379.902C554.919-417.687 473.943-519 83.236-519S-514-460.314-514-377.482z"/></g></svg>';
const backgroundDesktop64 = window.btoa(backgroundDesktopSVG);
const backgroundMobile64 = window.btoa(backgroundMobileSVG);

const StyledShortenerStatistics = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    background: rgba(163, 150, 255, 0.2);

    padding: 3rem 0rem 0rem 0rem;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    text-align: center;

    .statistics-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 1rem 4rem;

        h3{
            font-size: 30px;
            font-weight: 700;
        }
    
        p{
            font-size: 20px;
            font.weight: 500;
        }
    }

    .statistics-cards {
        display: flex;
        margin: 1rem 4rem;

        @media screen and (min-width: 375px) {
            flex-direction: column;

        }

        @media screen and (min-width: 1440px) {
            flex-direction: row;
        }

        .card {
            @media screen and (min-width: 375px) {
                max-width: 40vw;

                :nth-child(-n+2) {
                    ::after {
                        content: "";
                        position: relative;
                        
                        bottom: -7rem;
                        
                        width: 10px;
                        height: 6rem;
                        background: hsl(180, 66%, 49%);
                    }
                }  
                
                margin-top: 5rem;
            }

            @media screen and (min-width: 1440px) {
                max-width: 20vw;

                :nth-child(-n+2) {
                    ::after {
                        content: "";
                        position: relative;
                        
                        right: calc(-50% - 1.05rem);
                        bottom: 50%;
                        
                        width: 2rem;
                        height: 10px;
                        background: hsl(180, 66%, 49%);
                    }
                }

                :nth-child(1) {
                    margin-top: 9rem;
                    margin-bottom: 9rem;
                }
                :nth-child(2) {
                    margin-top: 11rem;
                    margin-bottom: 7rem;
                }
                :nth-child(3) {
                    margin-top: 13rem;
                    margin-bottom: 5rem;
                }   
            }


            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: top;

            background: rgba(255, 255, 255, 0.8);
            border-radius: 8px;
            
            padding: 1rem 0rem 1rem 0rem;
            margin: 1rem;
            z-index: 1;

            .card-img-container {
                display: flex;
                align-items: center;
                justify-content: center;

                width: 4rem;
                height: 4rem;
                background: hsl(257, 27%, 26%);
                border-radius: 50%;

                position: relative;
                top: -30px;
                z-index: 1;
                
                padding: 0;

                transition: all 200ms ease-in-out;
                transition-delay: 50ms;

                @media screen and (min-width: 375px) {
                    
                }

                @media screen and (min-width: 1440px) {
                    
                }

                :hover {
                    width: 5rem;
                    height: 5rem;
                    background: hsl(255, 11%, 22%);
                }

                img {
                    width: 50%;
                    height: auto;
                    font-color: white;
                }
            }

            h3{
                font-size: 22px;
                font-weight: 700;
                margin: 10px;
            }
        
            p{
                font-size: 20px;
                font.weight: 500;
                margin: 30px;
            }
        }
    }

    .statistics-footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        height: 400px;
        width: 100%;
        
        color: white;
        background: hsl(257, 27%, 26%);
        background-size: 190%;

        transition: all .5s ease;

        h3{
            font-size: 22px;
            font-weight: 700;
        }

        :hover {
            background-position: left;
            background-color: hsl(255, 11%, 22%);
        }

        @media screen and (min-width: 375px) {
            background-image: url('data:image/svg+xml;base64, ${backgroundMobile64}');
            background-position: right;
        }

        @media screen and (min-width: 1440px) {
            background-image: url('data:image/svg+xml;base64, ${backgroundDesktop64}');
            background-position: center;
        }
    }
`

export default StyledShortenerStatistics;