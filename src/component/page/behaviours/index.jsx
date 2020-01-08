import React from 'react'
import Card__Info from '../../../component/block/card/info'
import { Grid_Col, Grid_Padding, Grid_Row } from '../../../asset/grid/index'
import Typography__Page_Title from '../../../component/block/typography/page-title'

const BehavioursPage = () => (
  <Grid_Padding>
    <Grid_Row>
      <Grid_Col span={12}>
        <Typography__Page_Title
          text='Behaviours'
        />
      </Grid_Col>
    </Grid_Row>

    <Grid_Row>
      <Grid_Col span={4}>
        <Card__Info
          img='/asset/img/temp_people.png'
          title='Functional'
          url='/functional'
        />
      </Grid_Col>

      <Grid_Col span={4}>
        <Card__Info
          img='/asset/img/temp_circles.gif'
          title='Motion &amp; Touch'
          url='/motion-and-touch'
        />
      </Grid_Col>
      
      <Grid_Col span={4}>
        <Card__Info
          img='/asset/img/temp_dots.png'
          title='Validation'
          url='/validation'
        />
      </Grid_Col>
    </Grid_Row>
  </Grid_Padding>
)

export default BehavioursPage
