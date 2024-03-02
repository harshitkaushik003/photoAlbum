import React from 'react'
import styles from "../styles/Icon.module.css";

const Icon = ({image, top, right}) => {
    const IconStyles = {
        top: `${top}px`,
        right: `${right}px`
    }
    return (
        <div className={`${styles.Icon} icon`} style={IconStyles}>
            <img src={image} alt="" />
        </div>
    )
}

export default Icon
