import React from 'react'
import styles from './style.scss'

const Container__Page = (props) => {

  return (
    <div className={styles.container__page}>
      {props.children}
    </div>
  )

}

export default Container__Page
