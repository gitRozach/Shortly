import StyledHeaderBar from './styles/StyledHeaderBar';
import Button from './Button';
import logo from '../images/logo.svg';

const HeaderBar = () => {
    return (<StyledHeaderBar>
        <img src={logo} alt="Logo" height="40px" width="auto" />
        <Button text='Features' width='100px' height='50px' fontSize='16px' background='transparent' color='Gray: hsl(0, 0%, 75%)'/>
        <Button text='Pricing' width='100px' height='50px' fontSize='16px' background='transparent' color='Gray: hsl(0, 0%, 75%)'/>
        <Button text='Resources' width='100px' height='50px' fontSize='16px' background='transparent' color='Gray: hsl(0, 0%, 75%)'/>
        <div id="header-spacing"></div>
        <Button text='Login' width='100px' height='50px' fontSize='16px' background='transparent' color='Gray: hsl(0, 0%, 75%)'/>
        <Button text='Sign Up' width='100px' height='50px' fontSize='16px'/>
    </StyledHeaderBar>);
};

export default HeaderBar;