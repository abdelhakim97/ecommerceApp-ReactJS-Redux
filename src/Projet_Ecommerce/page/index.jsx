
import Carousel from './Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faBottleWater, faFaceSmile, faCartPlus, faHouseMedicalFlag, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { Cart } from './Cart';
import { Link } from 'react-router-dom';

export default function Index(props) {
    return (
        <div className='home'>
            <div className='main'>
                <nav className="navbar navbar-expand-xl navbar-light  nav_link_catigo" id='categore_header'>
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to='/category/smartphones' className='nav-link'> <FontAwesomeIcon icon={faMobile} /> Smartphones</Link>

                                </li>
                                <li className="nav-item">
                                    <Link to='/category/fragrances' className='nav-link' ><FontAwesomeIcon icon={faBottleWater} />   Fragrances</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/category/skincare' className='nav-link'> <FontAwesomeIcon icon={faFaceSmile} />  Skincare</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to='/category/groceries' className='nav-link'> <FontAwesomeIcon icon={faCartPlus} />  Groceries</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to='/category/home-decoration' className='nav-link'> <FontAwesomeIcon icon={faHouseMedicalFlag} /> Decoration</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to='/category/laptops' className='nav-link'> <FontAwesomeIcon icon={faLaptop} />  Laptops</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>

                <main className='main_Carousel'>

                    <Carousel />

                </main>
                <br />
                <main className='main_List_store'>

                    <Cart category='All' />

                    <div class="pagination">
                        <a href="#">&laquo;</a>
                        <a href="#" class="active">1</a>
                        <a href="#" >2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">6</a>
                        <a href="#">&raquo;</a>
                    </div>
                    <br />
                </main>
            </div>
        </div>

    );
}

