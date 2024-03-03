//importing all the dependencies 
import React, { useEffect } from 'react'
import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { albumSelector, getInitialState } from '../redux/reducers';
import AlbumCard from '../components/AlbumCard';


const Home = () => {
  //selector for fetching the albums 
  const {albums} = useSelector(albumSelector);

  //dispatch
  const dispatch = useDispatch();

  //setting the initial state everytime the component mounts
  useEffect(()=>{
    dispatch(getInitialState());
  }, []);


  return (
    <div className={styles.home}>
        <div className={styles.heading}>
            <span>All Your Albums at one Place</span>
        </div>
        <div className={styles.albumCards}>
            {albums.map(album=>(
              // album card component with a key and id prop 
              <AlbumCard album={album} key={album.id} id={album.id}/>
            ))}
        </div>
    </div>
  )
}

export default Home



