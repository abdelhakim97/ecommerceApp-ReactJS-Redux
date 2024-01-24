import React, { useEffect, useState } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import { faShop } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Cart } from './Cart';
import { useNavigate } from 'react-router-dom';
export default function Cart_Product(props) {
    const produit = useSelector(data => data.cart)
    const [list_cart_pro, setlist_cart_pro] = useState(produit)
    const [totalPrice, settotalPrice] = useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {

        let total = 0;
        list_cart_pro.forEach((value) => {

            const itemTotal = value.price * value.Quantity;
            total += itemTotal;
        });

        settotalPrice(total);
    }, [list_cart_pro]);

    const handlerDelete = (id) => {
        navigate('/DeleteConfierm/' + id)
    }


    const handlerInc_qty = (id) => {
        dispatch({ type: 'Update_QatyInc', payload: id })
        const updatedList = list_cart_pro.map((item) => {

            if (item.id === id) {
                return { ...item, Quantity: item.Quantity + 1 };
            }
            return item;
        });


        setlist_cart_pro(updatedList);
    };

    const handlerDec_qty = (id) => {
        dispatch({ type: 'Update_QatyDec', payload: id })
        const updatedList = list_cart_pro.map((item) => {
            if (item.id === id && item.Quantity > 1) {

                return { ...item, Quantity: item.Quantity - 1 };
            }

            return item;
        });
        setlist_cart_pro(updatedList);
    };
    return (
        <div className='cart_prod'>
            {(list_cart_pro.length == 0) ? (

                <main className='No_items p-4'>
                    <FontAwesomeIcon icon={faShop} style={{ fontSize: '150px', color: 'rgba(199, 199, 199, 0.671)' }} /> <br /><br />
                    <h3>No items yet? Continue shopping to explore more.</h3> <br />
                    <Link to='/' >  <button id='btn_Explore_items'>Explore items</button></Link >
                </main>

            ) : (<main className='div_list_pro p-4'>

                <nav className='List_pro'>

                    <h4>Cart ({list_cart_pro.length})</h4>


                    {list_cart_pro.map(value =>
                        <>
                            <hr />
                            <div id='div_info_cart'>

                                <nav id='info_cart' >
                                    <Link to={'/Produite/' + value.id} id='img_cart'>

                                        <img id='img_pro_cart' src={value.thumbnail} alt="" width={100} />&nbsp;&nbsp;
                                        <div>
                                            <h6>{value.description}</h6>
                                            <hr />
                                            <span style={{ color: 'rgb(28, 166, 201)', fontWeight: 'bold' }}> Seller: </span ><span style={{ fontWeight: 'bold' }}>AZROU MARKET</span>

                                        </div>
                                    </Link>
                                    <br />
                                    <button id='btn_remove' onClick={() => handlerDelete(value.id)}><FontAwesomeIcon icon={faTrash} />  REMOVE</button>
                                </nav>

                                <nav id='price_info_cart_Qut' >
                                    <h3>${value.price}</h3>
                                    <del id='price_Del'>$1000</del>   <span id='discountPercentage'>-{value.discountPercentage}%</span> <br />
                                    <nav id='nav_inc_dec_cart'>
                                        <button onClick={() => handlerDec_qty(value.id)} id='dec' >-</button> <input type="text" value={value.Quantity} id='input_inc_dec' /> <button id='inc' onClick={() => handlerInc_qty(value.id)} >+</button>
                                    </nav>
                                </nav>
                            </div>
                        </>
                    )}
                </nav>



                <nav className='CART_SUMMARY border'>
                    <i style={{ fontWeight: 'bold' }} >CART SUMMARY</i>
                    <hr />
                    <div id='div_CART_SUMMARY_PRICE'>
                        <nav style={{ fontWeight: 'bold', color: 'rgb(28, 166, 201)' }}>Subtotal: </nav> &nbsp; <nav><h3>${totalPrice}</h3></nav>
                    </div>
                    <p style={{ fontSize: 'small', color: '#5a5656' }}>Delivery fees not included yet.</p>
                    <hr />
                    <button id='btn_CHECKOUT'>CHECKOUT </button>
                </nav>


            </main>)}

            <main className='main_List_store_page_cart'>
                <div id='div_More_pro_to_love'>More to love  <FontAwesomeIcon icon={faHeart} className='text-danger' /></div>
                <Cart category='groceries' />


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
    );
}

