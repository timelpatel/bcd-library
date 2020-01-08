import React from 'react'
import style from './style'
import Typography__Body from '../../../../component/block/typography/body'

const List__Color = (props) => (

  <ul className={style.list__color}>
    {
      props.color.shade.map(tone => (
        <li
          key={tone.id}
          style={{backgroundColor: tone.tone}}
        >
          <Typography__Body>#{tone.tone}</Typography__Body>
        </li>
      ))
    }
  </ul>

)

export default List__Color
