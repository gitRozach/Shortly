import StyledShortenerInfo from "./styles/StyledShortenerInfo";
import Button from "./Button";
import infoLogo from "../images/illustration-working.svg";

const ShortenerInfo = () => {
    return (<StyledShortenerInfo>
                <h2 className="info-title">More than just shorter links</h2>
                <p className="info-description">Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <Button text="Get Started" clickedText="haha" color="white" width="20vw"/>
            </StyledShortenerInfo>);
}

export default ShortenerInfo;