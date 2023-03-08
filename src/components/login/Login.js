import useState from 'react';
import './Login.css';


const Login =()=>{

    return(
        <div className='login'>
            <img src='https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks' alt='LinkedIn logo' />
            <form>
                <input placeholder='Full name (required if registring)' type='text'/>
                <input placeholder='Profile pic URL (optional)' type='text'/>
                <input placeholder='Email' type='email'/>
                <input placeholder='Password' type='password'/>
                <button type='submit'>Sign In</button>
            </form>
            <p>Not a member?{' '}
                <span className='login-register'>Register Now</span>
            </p>
        </div>
    );
};

export default Login;