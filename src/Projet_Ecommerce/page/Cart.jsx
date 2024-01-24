import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from "axios";
export function Cart({ category }) {

  const listState = useSelector(date => date.product)
  const dispatch = useDispatch();
  useEffect(() => {


    axios.get('https://dummyjson.com/products').then(
      (res) => {
        const newData = res.data.products;

        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: newData });

      }
    );

  }, []);
  return (
    <>
      <section style={{ backgroundColor: 'white' }} >
        <div className="container py-5">
          <div className="row">
            {listState.map(value => {
              if (category == "All") {
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
              if (value.category == category) {
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
            }


            )}
          </div>
        </div>
      </section>
    </>
  );

}

