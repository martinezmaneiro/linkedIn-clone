import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import InputOption from './InputOption';
import Post from './Post';
import './Feed.css';

const Feed =()=>{
    return (
        <div className="feed">
            <div className='feed-input-container'>
                <div className='feed-input'>
                    <CreateIcon />
                    <form>
                        <input type='text'/>
                        <button type='submit'>Send</button>
                    </form>
                </div>
                <div className='feed-input-options'>
                    <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9'/>
                    <InputOption Icon={SmartDisplayIcon} title='Video' color='#E7A33E'/>
                    <InputOption Icon={EventIcon} title='Event' color='#C0CBCD'/>
                    <InputOption Icon={ArticleIcon} title='Write article' color='#7FC15E'/>
                </div>
            </div>
            <Post name='Joaquin Martinez Maneiro' description='Frontend Developer' message='This is my first post'/>
        </div>
    );
};

export default Feed;