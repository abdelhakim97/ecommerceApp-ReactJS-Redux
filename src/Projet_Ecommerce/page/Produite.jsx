import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { Cart } from './Cart';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';


export default function Produite(props) {
    const { id } = useParams();
    const navigate = useNavigate()
    const produit = useSelector(date => date.product.find(value => value.id == id))
    const produit_Cart_for_Quantity = useSelector(data => data.cart.find(value => value.id == id))
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [likeActive, setLikeActive] = useState(false)
    const [dislikeActive, setDislikeActive] = useState(false);
    const [Quantity, setQuantity] = useState(produit_Cart_for_Quantity?.Quantity || 0);
    const dispatch = useDispatch();




    useEffect(
        () => {
            if (!produit) {
                // If produit is undefined, handle the loading state or redirect to an error page.
                navigate('/')
            }
        }, [produit, navigate]
    )

    const handleLike = () => {
        if (!likeActive) {
            setLikes(likes + 1);
        }
        setLikeActive(!likeActive);
        setDislikeActive(false);
    };

    const handleDislike = () => {
        if (!dislikeActive) {
            setDislikes(dislikes + 1);
        }
        setDislikeActive(!dislikeActive);
        setLikeActive(false);
    };

    const handlerInc_qty = () => {
        setQuantity(Quantity + 1)
    }
    const handlerDec_qty = () => {
        setQuantity(Quantity - 1)
    }
    if (!produit) {
        // If produit is undefined, handle the loading state or redirect to an error page.
        return <div>Loading...</div>;
    }

    const handlerAdd_to_cart = () => {
        dispatch({
            type: 'ADD_TO_CART', payload: {
                id: produit.id, thumbnail: produit.thumbnail,
                description: produit.description,
                price: produit.price,
                discountPercentage: produit.discountPercentage,
                Quantity: Quantity
            }
        })
    }
    return (
        <div className='home'>
            <div className='main'>

                <main className='div_one_product p-4'>

                    <nav className='info_produit'>

                        <div className='img_produit' >


                            <ReactImageMagnify   {...{ smallImage: { alt: 'Wristwatch by Ted Baker London', isFluidWidth: true, src: produit.thumbnail, width: 140, height: 162 }, largeImage: { src: produit.thumbnail, width: 836, height: 1100 }, enlargedImagePosition: "over", style: { display: 'flex', flexDirection: "column", alignItems: 'center', marginTop: '10px' } }} />

                        </div>

                        <div className='contant'>
                            <h6> {produit.description}</h6>
                            <hr />
                            <span id='price'>${produit.price}</span>   <del id='price_Del'>$1000</del>   <span id='discountPercentage'>-{produit.discountPercentage}%</span> <br />
                            <p id='variations_stock'>Some variations with low stock</p>
                            <p id='stock'>+stock : {produit.stock} </p>
                            <span id='ranking'>

                                <span>
                                    ({produit.rating})
                                </span>
                                &nbsp;
                                <span className='ms-auto text-warning'>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfAlt} />
                                </span>
                                &nbsp;
                                <span id='Search_produits'>|  <a href="#"> Search this page</a></span>
                            </span>
                            <hr />
                            <button id='ADD_CART' onClick={handlerAdd_to_cart} disabled={(Quantity <= 0) ? true : false} ><FontAwesomeIcon icon={faShoppingCart} />  ADD TO CART</button>

                        </div>

                    </nav>
                    <nav className='info_right border'>
                        <div>
                            <h4>Choose your location</h4>
                            <select name="" id="location">
                                <option value="">location</option>
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Albania">Albania</option>
                                <option value="Algeria">Algeria</option>
                                <option value="American Samoa">American Samoa</option>
                            </select> <br /> <br />
                            <hr />
                            <p id='p_Quantity'>Quantity:</p>

                            <nav id='nav_inc_dec'>
                                <button onClick={handlerDec_qty} disabled={(Quantity <= 0) ? true : false} id='dec'>-</button> <input type="text" value={Quantity} id='input_inc_dec' /> <button disabled={(Quantity >= produit.stock) ? true : false} onClick={handlerInc_qty} id='inc'>+</button>
                            </nav>

                            <hr />
                            <p id='Like_dislike'> Like/disLike:</p>
                            <nav id='nav_btn_like_dislike'>
                                <button id='btn_like' onClick={handleLike} style={{ color: likeActive ? 'blue' : 'rgb(110, 103, 103)' }}><FontAwesomeIcon icon={faThumbsUp} />  </button>
                                &nbsp;
                                <button id='btn_dislike' onClick={handleDislike} style={{ color: dislikeActive ? 'red' : 'rgb(110, 103, 103)' }} ><FontAwesomeIcon icon={faThumbsDown} />   </button>
                            </nav>


                        </div>
                    </nav>
                </main>
                <main className='main_List_store_meme_categore'>

                    <div id='div_Deals_produit'>{produit.category} Deals  <FontAwesomeIcon icon={faStar} className='text-warning' /></div>
                    <Cart category={produit.category} />
                    <div class="pagination">
                        <a href="#">&laquo;</a>
                        <a href="#" class="active">1</a>
                        <a href="#" >2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">&raquo;</a>
                    </div>
                    <br />
                </main>
            </div>
        </div>
    );
}

