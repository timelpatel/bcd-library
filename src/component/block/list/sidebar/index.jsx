import React from 'react'
import { Link } from 'react-router-dom'
import style from './style'

const List__Sidebar = (props) => (

  <ul className={style.list__sidebar}>
    {
      props.links.map(link => (
        <li key={link.id}>
          {/* <Link to={link.href}> */}
          <Link to='#'>
            {link.text}
          </Link>
        </li>
      ))
    }
  </ul>

)

export default List__Sidebar
