import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { faStar, faMagnifyingGlass, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';


function Product_Search(props) {
    const { valueSearch } = useParams()
    const listState = useSelector(date => date.product.filter(value => value.title.toUpperCase().includes(valueSearch.toUpperCase()) == true ||
        value.description.toUpperCase().includes(valueSearch.toUpperCase()) == true ||
        value.brand.toUpperCase().includes(valueSearch.toUpperCase()) == true || value.category.toUpperCase().includes(valueSearch.toUpperCase()) == true))

    return (
        <div>
            <main className='main_List_store_page_cart'>
                {(listState.length > 0) ? (<>
                    <div id='results_search'>results   <FontAwesomeIcon icon={faMagnifyingGlass} className='text-black' /></div>
                    <section style={{ backgroundColor: 'white' }} >
                        <div className="container py-5">
                            <div className="row">
                                {listState.map(value => {

                                    return (
                                        <Link to={'/Produite/' + value.id} style={{ textDecoration: 'none' }} className='col-md-12 col-lg-4 mb-4 mb-lg-0 pt-5'>

                                            <div className="card" style={{ height: '500px' }}>
                                                <div className="d-flex justify-content-between p-3">
                                                    <p className="lead mb-0">Today's Combo Offer</p>
                                                    <div
                                                        className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                                        style={{ width: '35px', height: '35px' }}>
                                                        <p className="text-white mb-0 small">x4</p>
                                                    </div>
                                                </div>

                                                <img src={value.thumbnail} className="card-img-top" alt="" style={{ height: '50%' }} />
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between">
                                                        <p className="small">
                                                            <a className="text-muted" >{value.category}</a></p>

                                                        <p className="small text-danger"><s>$1099</s></p>
                                                    </div>

                                                    <div className="d-flex justify-content-between mb-3">
                                                        <h5 className="mb-0">{value.title}</h5>
                                                        <h5 className="text-dark mb-0">${value.price}</h5>
                                                    </div>

                                                    <div className="d-flex justify-content-between mb-2">
                                                        <p className="text-muted mb-0">Available: <span className="fw-bold">{value.stock}</span></p>
                                                        <div className="ms-auto text-warning">
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <FontAwesomeIcon icon={faStarHalfAlt} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </Link>
                                    )

                                }
                                )}
                            </div>
                        </div>
                    </section>

                </>) : (<main className='No_items_Search p-4'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: '150px', color: 'rgba(199, 199, 199, 0.671)' }} /> <br /><br />
                    <h3>There are no results for ``<span className='text-danger'>{valueSearch}</span>``</h3> <br />
                    <p className='text-secondary'>- Check your spelling for typing errors <br />
                        - Try searching with short and simple keywords <br />
                        - Try searching more general terms - you can then filter the search results</p>
                    <Link to='/' >  <button id='btn_Explore_items'>GO TO HOMEPAGE</button></Link >
                </main>)}

                <br />
            </main>
        </div>
    );
}

export default Product_Search;



