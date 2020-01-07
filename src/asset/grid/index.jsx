import React from 'react'
import styles from './style.scss'

const Grid_Col = (props) => {
  return (
    <div className={`${styles.grid_col} ${styles['col' + props.span]}`}>
      {props.children}
    </div>
  )
}

const Grid_Container = (props) => {
  return (
    <div className={styles.grid_container}>
      {props.children}
    </div>
  )
}

const Grid_Padding = (props) => {
  return (
    <div className={styles.grid_padding}>
      {props.children}
    </div>
  )
}

const Grid_Row = (props) => {
  return (
    <div className={styles.grid_row}>
      {props.children}
    </div>
  )
}

export {
  Grid_Col,
  Grid_Container,
  Grid_Padding,
  Grid_Row,
}