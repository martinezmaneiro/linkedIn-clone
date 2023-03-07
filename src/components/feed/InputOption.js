import './InputOption.css';

const InputOption =({Icon, title, color})=> {
    return (
        <div className='input-options'>
            <Icon style={{color}}/>
            <h4>{title}</h4>
        </div>
    );
};
export default InputOption;