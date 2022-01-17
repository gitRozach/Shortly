import StyledFooterBar from './styles/StyledFooterBar';

import logo from '../images/logo.svg';
import facebookLogo from '../images/icon-facebook.svg';
import twitterLogo from '../images/icon-twitter.svg';
import pinterestLogo from '../images/icon-pinterest.svg';
import instagramLogo from '../images/icon-instagram.svg';

const FooterBar = () => (
    <StyledFooterBar>
        <div className='footer-icon-box'>
            <img src={logo} alt='footer-logo' className='footer-logo-img'/>
        </div>
        <div className="footer-box">
            <h3>Features</h3>
            <button>Link Shortening</button>
            <button>Branded Links</button>
            <button>Analytics</button>
        </div>
        <div className="footer-box">
            <h3>Resources</h3>
            <button>Blog</button>
            <button>Developers</button>
            <button>Support</button>
        </div>
        <div className="footer-box">
            <h3>Company</h3>
            <button>About</button>
            <button>Our Team</button>
            <button>Careers</button>
            <button>Contact</button>
        </div>
        <div className="footer-social-media-box">
            <button><img src={facebookLogo} alt='facebook-logo'/></button>
            <button><img src={twitterLogo} alt='twitter-logo'/></button>
            <button><img src={pinterestLogo} alt='pinterest-logo'/></button>
            <button><img src={instagramLogo} alt='instagram-logo'/></button>
        </div>
    </StyledFooterBar>
);

export default FooterBar;