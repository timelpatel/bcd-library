import React from 'react'
import styles from './style.scss'

const Card__Info = (props) => {

  return (
    <div className={styles.card__info}>
      <h3>{props.title}</h3>
    </div>
  )

}

export default Card__Info
