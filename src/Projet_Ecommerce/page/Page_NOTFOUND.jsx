import React from 'react';
import img_error from '../image/qIufhof.png'
import { Link } from 'react-router-dom';
function Page_NOTFOUND(props) {
    return (
        <div className='div_error_404'>
            <div  id='div_img_404' >
                
                <img src={img_error} id='img_404' />
                </div>
            <div  id="info_404" >
                <h1>404 </h1>
                <h4>Not Found</h4>
                  <h6>We couldn’t find the page you are looking for <br />
                    But we have millions more shopping items <br /> for you to browse!</h6>  
                 <Link to='/'><button>GO TO HOMEPAGE</button></Link>   
            </div>
        </div>
    );
}

export default Page_NOTFOUND;