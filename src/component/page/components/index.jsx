import React from 'react'
import { Link } from 'react-router-dom'
import Typography__Body from '../../../component/block/typography/body'

const ComponentsPage = () => (
  <React.Fragment>

    <Typography__Body>Components</Typography__Body>

    <Link
      to='/blocks'
    >
      Blocks
    </Link>
<br />
    <Link
      to='/modules'
    >
      Modules
    </Link>

  </React.Fragment>
)

export default ComponentsPage
