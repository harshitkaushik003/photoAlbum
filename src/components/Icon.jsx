import React from 'react'
import styles from "../styles/Icon.module.css";

const Icon = ({image, top, right, fn}) => {
    const IconStyles = {
        top: `${top}px`,
        right: `${right}px`
    }
    


    return (
        <div className={`${styles.Icon} icon`} style={IconStyles} onClick={fn}>
            <img src={image} alt="" />
        </div>
    )
}

export default Icon
