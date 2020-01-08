import React from 'react'
import Card__Info from '../../../component/block/card/info'
import Container__Library_Page from '../../../component/block/container/library-page'
import { Grid_Col, Grid_Padding, Grid_Row } from '../../../asset/grid/index'
import Typography__Page_Title from '../../../component/block/typography/page-title'

const ComponentsPage = () => (
  <Container__Library_Page>

    <Grid_Padding>
      <Grid_Row>
        <Grid_Col span={12}>
          <Typography__Page_Title
            text='Components'
          />
        </Grid_Col>
      </Grid_Row>

      <Grid_Row>
        <Grid_Col span={6}>
          <Card__Info
            img='/asset/img/temp_circles.gif'
            title='Blocks'
            url='/blocks'
          />
        </Grid_Col>

        <Grid_Col span={6}>
          <Card__Info
            img='/asset/img/temp_dots.png'
            title='Modules'
            url='/modules'
          />
        </Grid_Col>
      </Grid_Row>
    </Grid_Padding>

  </Container__Library_Page>
)

export default ComponentsPage
