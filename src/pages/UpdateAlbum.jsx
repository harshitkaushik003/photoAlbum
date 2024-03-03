import React, { useRef } from 'react'
import styles from "../styles/Form.module.css"
import { useDispatch } from 'react-redux';
import { updateResource } from '../redux/reducers';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateAlbum = () => {
    const textRef = useRef();
    const userIdRef = useRef();

    const {id} = useParams();
    console.log(id);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(updateResource({id:id, title: textRef.current.value, userId: userIdRef.current.value}))
        
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

export default UpdateAlbum
