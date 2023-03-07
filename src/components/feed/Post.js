import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ScreenRotationAltIcon from '@mui/icons-material/ScreenRotationAlt';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import './Post.css';

const Post =({name, description, message, photoUrl})=> {
    return (
        <div className='post'>
            <div className='post-header'>
                <Avatar/>
                <div className='post-info'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className='post-body'>
                <p>{message}</p>
            </div>
            <div className='post-buttons'>
                <InputOption Icon={ThumbUpOffAltIcon} title='Like' color='gray'/>
                <InputOption Icon={MessageOutlinedIcon} title='Comment' color='gray'/>
                <InputOption Icon={ScreenRotationAltIcon} title='Repost' color='gray'/>
                <InputOption Icon={SendRoundedIcon} title='Send' color='gray'/>
            </div>
        </div>
    );
};

export default Post;