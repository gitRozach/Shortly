import StyledHistoryBar from './styles/StyledHistoryBar';
import Button from './Button';

const HistoryBar = ({ historyItems, onClearListCallback }) => (
    <StyledHistoryBar>
        {historyItems}
        <Button text="Clear List" width="100%" callback={onClearListCallback}/>
    </StyledHistoryBar>
);

export default HistoryBar;