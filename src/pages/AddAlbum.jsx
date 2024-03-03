import React, { useRef } from 'react'
import styles from "../styles/Form.module.css"
import { useDispatch } from 'react-redux'
import { handleAddAlbum } from '../redux/reducers';
import { useNavigate } from 'react-router-dom';

const AddAlbum = () => {

    //creating form references
    const textRef = useRef();
    const userIdRef = useRef();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //function for adding 
    function handleAdd(title, userId){
        const payloadObj = {title: title, userId: userId};
        dispatch(handleAddAlbum(payloadObj));
    }
    
    //on submit of the form 
    const handleSubmit = (e)=>{
        e.preventDefault();
        handleAdd(textRef.current.value, userIdRef.current.value);
        navigate("/");
    }

    return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" ref={textRef} placeholder='Enter Title'/>
        <input type="number" ref={userIdRef} placeholder='Enter User Id'/>
        <input type="submit" value="Add Album"/>

    </form>
  )
}

export default AddAlbum
