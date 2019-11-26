import React from 'react'
import { Link } from 'react-router-dom'
import Typography__Body from '../../../component/block/typography/body'

const AssetsPage = () => (
  <React.Fragment>

    <Typography__Body>Assets</Typography__Body>

    <Link
      to='/colors'
    >
      Colors
    </Link>
<br />
    <Link
      to='/icons'
    >
      Icons
    </Link>

  </React.Fragment>
)

export default AssetsPage
