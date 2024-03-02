import React, { useEffect } from 'react'
import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { albumSelector, getInitialState } from '../redux/reducers';
import AlbumCard from '../components/AlbumCard';
const Home = () => {
  const {albums} = useSelector(albumSelector);
  const albumsSliced = albums.slice(0,20);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getInitialState());
  }, [albumSelector]);

  return (
    <div className={styles.home}>
        <div className={styles.heading}>
            <span>All Your Albums at one Place</span>
        </div>
        <div className={styles.albumCards}>
            {albumsSliced.map(album=>(
              <AlbumCard album={album}/>
            ))}
        </div>
    </div>
  )
}

export default Home



