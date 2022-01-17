import StyledShortenerInput from "./styles/StyledShortenerInput";
import Button from "./Button";
import { useState } from 'react';
import background from "../images/bg-shorten-desktop.svg";

const ShortenerInput = ({ submitText, submitCallback }) => {
    const [inputValue, setInputValue] = useState(null);
    const [errorValue, setErrorValue] = useState(null);

    return [inputValue, setInputValue, errorValue, setErrorValue,
            (<StyledShortenerInput>
                <input type="text" className="input-field" onChange={e => setInputValue(e.target.value)} />
                {errorValue && <p className="input-error-label">{errorValue}</p>}
                <Button text="Shorten It!" className="input-button" color="white" callback={submitCallback}/>
            </StyledShortenerInput>)
    ];
}

// TODO <h5 className="input-error-label">Error</h5>

export default ShortenerInput;