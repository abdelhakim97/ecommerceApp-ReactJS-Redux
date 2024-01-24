import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

export default function DeletePageConfierm(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams()
    const handlerDelet = () => {
        dispatch({ type: 'Delete_PRODUCT', payload: id })
        navigate('/Cart')
    }
    const handlerCancel = () => {
        navigate('/Cart')
    }
    return (
        <div id='DeleteConfir'>
            <div id="container_delete">
                <h1>Delete Product</h1>
                <p>Are you sure you want to delete your Product?</p>

                <div className="clearfix">
                    <button type="button" onClick={handlerDelet} className="deletebtn">Delete</button>
                    <button type="button" onClick={handlerCancel} className="cancelbtn">Cancel</button>

                </div>
            </div>

        </div>
    );
}

