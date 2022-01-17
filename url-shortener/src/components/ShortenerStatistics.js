import StyledShortenerStatistics from "./styles/StyledShortenerStatistics";
import Button from "./Button";

import brandRecognitionLabel from '../images/icon-brand-recognition.svg';
import detailedRecordsLabel from '../images/icon-detailed-records.svg';
import fullyCustomizableLabel from '../images/icon-fully-customizable.svg';

const ShortenerStatistics = () => (
    <StyledShortenerStatistics>
        <div className="statistics-header">
            <h3>Advanced Statistics</h3>
            <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>

        <div className="statistics-cards">
            <div className="card">
                <div className="card-img-container">
                    <img src={brandRecognitionLabel} alt="brand-recognition-icon"/>
                </div>
                
                <h3>Brand Recognition</h3>
                <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
            </div>

            <div className="card">
                <div className="card-img-container">
                    <img src={detailedRecordsLabel} alt="detailed-records-icon"/>
                </div>
                <h3>Detailed Records</h3>
                <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            </div>

            <div className="card">
                <div className="card-img-container">
                    <img src={fullyCustomizableLabel} alt="fully-customizable-icon"/>
                </div>
                <h3>Fully Customizable</h3>
                <p>Improve brand awareness and content discoverability through custom links, supercharing audience engagement.</p>
            </div>
        </div>

        <div className="statistics-footer">
            <h3>Boost your links today</h3>
            <Button text="Get Started" color="white" width="20vw" />
        </div>
    </StyledShortenerStatistics>
);

export default ShortenerStatistics;