import React, { useState } from 'react';
import '../style/App.css'
import logo_without_bg from '../image/logo_without_bg.png'
import { faMagnifyingGlass, faUser, faQuestion, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header(props) {
    const produit = useSelector(data => data.cart.length);
    const [valueSearch,setvalueSearch]=useState()
    const navigate = useNavigate()

    const handlerSearch=()=>{
        navigate('/ProductsSearch/'+valueSearch)
    }
    return (
        <header className='bg-white'>
        
            <div className='part2_header'>
                <nav className='nav_logo'><Link to='/' > <img src={logo_without_bg} alt="" width={150} /></Link></nav>
                <nav className='nav_input_search'><input onChange={(e)=>setvalueSearch(e.target.value)}  type="search" className='input_search' placeholder='Search products, brands and categories' autoComplete='on' /> <button className='btn_search' onClick={handlerSearch} ><FontAwesomeIcon icon={faMagnifyingGlass} /> SEARCH</button></nav>
             <nav className='nav_Account'><Link to='/Account' ><FontAwesomeIcon icon={faUser} /> Account</Link></nav>
                <nav className='nav_Help'> <Link><FontAwesomeIcon icon={faQuestion} /> Help</Link>  </nav>
                <nav className='nav_Cart'><Link to='/Cart'><FontAwesomeIcon icon={faShoppingBag} /><span id='len_product'>{produit}</span> Cart</Link> </nav>
                
            </div>
          
        </header>
    );
}

