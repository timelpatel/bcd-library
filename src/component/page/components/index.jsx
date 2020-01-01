import React from 'react'
import { Link } from 'react-router-dom'
import Container__Library_Page from '../../../component/block/container/library-page'
import Typography__Body from '../../../component/block/typography/body'

const ComponentsPage = () => (
  <Container__Library_Page>

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

  </Container__Library_Page>
)

export default ComponentsPage
