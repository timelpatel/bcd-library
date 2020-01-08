import React from 'react'
import Card__Info from '../../../component/block/card/info'
import { Grid_Col, Grid_Padding, Grid_Row } from '../../../asset/grid/index'
import Typography__Page_Title from '../../../component/block/typography/page-title'

const AssetsPage = () => (
  <Grid_Padding>
    <Grid_Row>
      <Grid_Col span={12}>
        <Typography__Page_Title
          text='Assets'
        />
      </Grid_Col>
    </Grid_Row>

    <Grid_Row>
      <Grid_Col span={4}>
        <Card__Info
          img='/asset/img/temp_colors.png'
          title='Colors'
          url='/colors'
        />
      </Grid_Col>

      <Grid_Col span={4}>
        <Card__Info
          img='/asset/img/temp_dots.png'
          title='Fonts'
          url='/fonts'
        />
      </Grid_Col>
      
      <Grid_Col span={4}>
        <Card__Info
          img='/asset/img/temp_people.png'
          title='Grid'
          url='/grid'
        />
      </Grid_Col>

      <Grid_Col span={4}>
        <Card__Info
          img='/asset/img/temp_circles.gif'
          title='Icons'
          url='/icons'
        />
      </Grid_Col>
    </Grid_Row>
  </Grid_Padding>
)

export default AssetsPage
