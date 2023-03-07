import { Avatar } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';
import './Sidebar.css';

const Sidebar =()=>{
    return(
        <div className='sidebar'>
            <div className='sidebar-top'>
                <img src='https://image.shutterstock.com/image-illustration/linked-abstract-white-humanheadline-background-260nw-1864174147.jpg' alt='background image'/>
                <Avatar className='sidebar-avatar'/>
                <h2>Joaquin Martinez</h2>
                <h4>Frontend Developer</h4>
            </div>
            <div className='sidebar-mid-container'>
                <div className='sidebar-mid'>
                    <div className='sidebar-mid-connection'>
                        <p className='sidebar-mid-title'>Connection</p>
                        <p className='sidebar-stat'>10</p>
                    </div>
                    <p className='sidebar-mid-subtitle'>Grow your network</p>
                </div>
                <div className='sidebar-mid'>
                    <p className='sidebar-mid-title'>Access exclusive tools & insights</p>
                    <div className='sidebar-mid-section'>
                        <div className='square-icon'/>
                        <p className='sidebar-mid-subtitle'>Try Premium for free</p>
                    </div>
                </div>
                <div className='sidebar-mid'>
                    <div className='sidebar-mid-section'>
                        <BookmarkIcon className='bookmark-icon'/>
                        <p className='sidebar-mid-subtitle'>My items</p>
                    </div>
                </div>
            </div>
            <div className='sidebar-bottom'>
                <p>Groups</p>
                <p>Events</p>
                <AddIcon className='add-icon'/>
                <p>Followed Hashtags</p>
                <p className='discover'>Discover more</p>
            </div>
        </div>
    );
};

export default Sidebar;