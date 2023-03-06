import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from "./HeaderOption";

const Header =()=>{
    return (
        <div className='header'>
            <div className='header-left'>
                <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='linkedin icon'/>
                <div className='header-search'>
                    <SearchIcon/>
                    <input type='text'placeholder='Search'/>
                </div>
            </div>
            <div className='header-right'>
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOption Icon={SmsIcon} title='Messaging'/>
                <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                <HeaderOption avatar='https://media.licdn.com/dms/image/C4D03AQG24bbuq74ngQ/profile-displayphoto-shrink_800_800/0/1661521752175?e=1683763200&v=beta&t=0DXSrAOyMG1gm3fePIiapGPYT0qZX4Or37erNgc49-c' title='Me  ▼'/>
                <img src='' alt=''/>
            </div>
        </div>
    )
};

export default Header;