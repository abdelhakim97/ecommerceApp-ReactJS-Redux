import React from 'react';
import { useParams } from 'react-router-dom';
import { Cart } from './Cart';
function Category_pro(props) {
    const { nom } = useParams()

    return (
        <div>
            <main className='main_List_store_page_cart'>
                <div id={nom}>{nom}</div>
                <Cart category={nom} />


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

export default Category_pro;