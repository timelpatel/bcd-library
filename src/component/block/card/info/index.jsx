import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.scss'
import Typography__Body_Copy from '../../../../component/block/typography/body'

const Card__Info = (props) => {

  return (
    <Link to={props.url}>
      <div className={styles.card__info}>
        <span>
          <img
            height='180'
            src={props.img}
          />
        </span>

        <span>
          <Typography__Body_Copy>
            {props.title}
          </Typography__Body_Copy>
        </span>
      </div>
    </Link>
  )

}

export default Card__Info
