import React from 'react'
import styles from './style.scss'

const Container__Sidebar = (props) => {

  return (
    <div className={styles.container__sidebar}>
      {props.children}
    </div>
  )

}

export default Container__Sidebar
