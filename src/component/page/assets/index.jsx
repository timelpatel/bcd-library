import React from 'react'
import { Link } from 'react-router-dom'
import Card__Info from '../../../component/block/card/info'
import Typography__Page_Title from '../../../component/block/typography/page-title'

const AssetsPage = () => (
  <React.Fragment>

    <Typography__Page_Title
      text='Assets'
    />

    <Card__Info
      // link='/colors'
      title='Colors'
    />

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
