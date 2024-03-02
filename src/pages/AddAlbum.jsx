import React from 'react'
import styles from "../styles/Form.module.css"

const AddAlbum = () => {
  return (
    <div className={styles.form}>
        <input type="text" placeholder='Enter Title'/>
        <input type="number" placeholder='Enter User Id'/>
        <input type="number" placeholder='Enter Id'/>
        <input type="button" value="Add Album" />

    </div>
  )
}

export default AddAlbum
