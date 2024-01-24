import React from 'react';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import img1 from '../image/wallpaperflare.com_wallpaper (19).jpg'
import img2 from '../image/pc1.jpg'
import img3 from '../image/pc2.jpg'
export default function Carousel() {
    return (
        <div id="demo" className="carousel slide  m-auto p-2 w-100" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={img3} alt="" className="d-block" style={{width:"100%"}}  />
            </div>
            <div className="carousel-item">
                <img src={img2} alt="" className="d-block" style={{width:"100%"}}  />
            </div>
            <div className="carousel-item">
                <img src={img1} alt="" className="d-block"  style={{width:"100%"}}   />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" id='span_flish_left'></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon" id='span_flish_right'></span>
           
        </button>
    </div>
    );
}

