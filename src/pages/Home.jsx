import React, { useEffect } from 'react'
import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { albumSelector, getInitialState } from '../redux/reducers';
import AlbumCard from '../components/AlbumCard';
const Home = () => {
  const {albums} = useSelector(albumSelector);
  
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log("home mounted");
    dispatch(getInitialState());
  }, []);



  return (
    <div className={styles.home}>
        <div className={styles.heading}>
            <span>All Your Albums at one Place</span>
        </div>
        <div className={styles.albumCards}>
            {albums.map(album=>(
              <AlbumCard album={album} key={album.id} id={album.id}/>
            ))}
        </div>
    </div>
  )
}

export default Home



