import StyledHistoryItem from "./styles/StyledHistoryItem";
import Button from "./Button";

const HistoryItem = ({ longUrl, shortUrl, copyText='Copy' }) => (
    <StyledHistoryItem>
        <h3 className="long-url-label">{longUrl}</h3>
        <a className="short-url-label" href={shortUrl} target="_blank">{shortUrl}</a>
        <Button text={copyText} clickedText="Copied!" callback={e => navigator.clipboard.writeText(shortUrl)} color="white" width="300%" />
    </StyledHistoryItem>
);


export default HistoryItem;