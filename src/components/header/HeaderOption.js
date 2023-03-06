import './HeaderOption.css';
import { Avatar } from '@mui/material';

const HeaderOption =({avatar, Icon, title})=>{
    return (
        <div className='header-option'>
            {Icon && <Icon className='header-opt-icon'/>}
            {avatar && (
                <Avatar className='header-opt-icon' src={avatar}/>
            )}
            <h3 className='header-opt-title'>{title}</h3>
        </div>
    );
};

export default HeaderOption;
