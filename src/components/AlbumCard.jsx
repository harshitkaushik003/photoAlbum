import React from 'react'
import styles from "../styles/AlbumCard.module.css"
import Icon from "../components/Icon";
import myImage from "../images/album.jpeg"

const AlbumCard = ({album}) => {
  return (
    <div className={`${styles.albumCard} album-card`} id='albumCard'>
      <img src={myImage} alt="" />
      <span>{album.title}</span>
      <Icon image={"https://cdn-icons-png.flaticon.com/128/8152/8152650.png"} top={140} right={70}/> 
      <Icon image={"https://cdn-icons-png.flaticon.com/128/4442/4442016.png"} top={140} right={23}/>
    </div>
  )
}

export default AlbumCard
