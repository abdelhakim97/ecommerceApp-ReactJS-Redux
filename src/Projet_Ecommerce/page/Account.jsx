
import React from 'react';
import logo_without_bg from '../image/logo_without_bg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
export default function Account(props) {
    return (
        <div className='div_Account'>
            <div id='div_contant_Account' >
            <img src={logo_without_bg} alt="" width={180} />
            <h2 className='fw-bolder' id='WELCOME_title'>WELCOME TO AZROU MARKET</h2>
            <p className='text-secondary'>Type your e-mail or phone number to log in or create a Azrou Market <br /> account.</p>
            <form action="" method="post">
                <input type="text"  placeholder='Email or Mobile Number*' className='input_email_phone'/>
                <br /> <br />
                <input type="submit" className='btn_Continue'  value='Continue'/> 

            </form>
            <br />
            <hr className='w-75 m-auto p-2 ' />
            <button className='btn_faceebok_login'><FontAwesomeIcon icon={faFacebook} /> Log in with Facebook</button> <br /> <br />
            <p className='text-secondary'>For further support, you may visit the Help Center or contact our <br /> customer service team.</p>
            <br />
          
          <p className='fs-5 fw-bolder text-secondary'>Azrou Market</p><img src={logo_without_bg} alt="" width={100}/>
          </div>
        </div>
    );
}

