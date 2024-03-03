import React from 'react'
import styles from "../styles/AlbumCard.module.css"
import Icon from "../components/Icon";
import myImage from "../images/album.jpeg"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteResource } from '../redux/reducers';

const AlbumCard = ({album ,id}) => {

    const dispatch = useDispatch();
    const handleDelete = ()=>{
        dispatch(deleteResource({id}));
    }
  return (
    <div className={`${styles.albumCard} album-card`} id='albumCard'>
      <img src={myImage} alt="" />
      <span>{album.title}</span>
      <Link to={`/update/${id}`}>
        <Icon image={"https://cdn-icons-png.flaticon.com/128/8152/8152650.png"} top={140} right={70}/>
      </Link>
       
      <Icon image={"https://cdn-icons-png.flaticon.com/128/4442/4442016.png"} top={140} right={23} fn={handleDelete}/>
    </div>
  )
}

export default AlbumCard
