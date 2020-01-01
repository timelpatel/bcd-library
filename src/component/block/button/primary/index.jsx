import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './style.scss'

const Button__Primary = (href, text) => (

  <NavLink
    className={`${styles.button__primary} ${styles.button__primary__on_color}`}
    to={href}
  >
    <span>
      {text}
    </span>
  </NavLink>

)

export default Button__Primary
