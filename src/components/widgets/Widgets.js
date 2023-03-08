import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import InfoIcon from '@mui/icons-material/Info';
import './Widgets.css';

const Widgets =()=> {
    const newsArticle = (heading, subtitle) => (
        <div className='widgets-article'>
            <div className='widgets-article-left'></div>
            <div className='widgets-article-right'>
                <FiberManualRecordIcon/>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className='widgets-header'>
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
            {newsArticle}
        </div>
    );
};

export default Widgets;