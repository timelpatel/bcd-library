import React from 'react'
import styles from './style.scss'

const Grid_Col = (children, span) => {
  <div className={`${styles.grid_col} ${style['col' + span]}`}>
    {children}
  </div>
}

const Grid_Container = (children) => {
  <div className={styles.grid_container}>
    {children}
  </div>
}

const Grid_Padding = (children) => {
  <div className={styles.grid_padding}>
    {children}
  </div>
}

const Grid_Row = (children) => {
  <div className={styles.grid_row}>
    {children}
  </div>
}

export default {
  Grid_Col,
  Grid_Container,
  Grid_Padding,
  Grid_Row,
}