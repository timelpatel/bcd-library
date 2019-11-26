import React from 'react'
import styles from './style'

const Typography__Body = (props) => (
  <p className={styles.typography__body}>
    {props.text}{props.children}
  </p>
)

export default Typography__Body
