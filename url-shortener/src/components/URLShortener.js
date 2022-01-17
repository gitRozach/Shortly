import { useState, useEffect } from 'react';
import {StyledURLShortener, StyledURLShortenerWrapper} from './styles/StyledURLShortener';

import FooterBar from './FooterBar';
import HeaderBar from './HeaderBar';
import HistoryBar from './HistoryBar';
import HistoryItem from './HistoryItem';
import ShortenerInfo from './ShortenerInfo';
import ShortenerInput from './ShortenerInput';
import ShortenerStatistics from './ShortenerStatistics';


const URLShortener = () => {

    const [historyItems, setHistoryItems] = useState(new Map());
    const resetHistoryItems = () => setHistoryItems(new Map());
    const [inputValue, setInputValue, errorValue, setErrorValue, inputTextfield] = ShortenerInput({ submitText: "Shorten It!", submitCallback: () => onSubmitPressed(), });

    useEffect(() => {
        if (sessionStorage.getItem("historyUrls")) {
            try {
                setHistoryItems(JSON.parse(sessionStorage.getItem("historyUrls")));
            } catch (e) {
                setHistoryItems(new Map());
            }        
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem('historyUrls', JSON.stringify(historyItems));
    }, [historyItems]);

    useEffect(() => {
        setErrorValue(null);
    }, [inputValue]);

    const onSubmitPressed = () => {
        if (!inputValue) {
            setErrorValue('Please add a link');
            return;
        }
        
        try {
            fetch('https://api.shrtco.de/v2/shorten?url=' + inputValue, {method: 'GET'})
                .then(resp => resp.json())
                .then(res => {
                    const currentItems = {...historyItems};
                    currentItems[res.result.original_link] = res.result.full_short_link;
                    setHistoryItems(currentItems);
                }
            );
        } catch (requestError) {
            setErrorValue(requestError);
        } finally {

        }
    }

    const keyDown = ({ keyCode }) => {
        if (keyCode === 13) /*Enter*/ {
            onSubmitPressed();
        }
    }

    return (<StyledURLShortenerWrapper
                id="url-shortener-wrapper"
                role="button" 
                tabIndex="0" 
                onKeyDown={e => keyDown(e)}>
                
                <StyledURLShortener>
                    <HeaderBar />
                    <ShortenerInfo />
                    {inputTextfield}
                    {historyItems && <HistoryBar onClearListCallback={resetHistoryItems}
                                                 historyItems={
                                                    Object.keys(historyItems)
                                                    .filter(k => k && k.length > 6)
                                                    .map((key, index) => <HistoryItem longUrl={key} shortUrl={historyItems[key]} key={'history-' + index} />)
                                                 }/>}
                    <ShortenerStatistics />
                    <FooterBar />
                </StyledURLShortener>
                
    </StyledURLShortenerWrapper> );
}

export default URLShortener;

/*
## Colors

### Primary

- Cyan: hsl(180, 66%, 49%)
- Dark Violet: hsl(257, 27%, 26%)

### Secondary

- Red: hsl(0, 87%, 67%)

### Neutral

- Gray: hsl(0, 0%, 75%)
- Grayish Violet: hsl(257, 7%, 63%)
- Very Dark Blue: hsl(255, 11%, 22%)
- Very Dark Violet: hsl(260, 8%, 14%)

## Typography

### Body Copy

- Font size: 18px

### Fonts

- Family: [Poppins](https://fonts.google.com/specimen/Poppins)
- Weights: 500, 700
 */