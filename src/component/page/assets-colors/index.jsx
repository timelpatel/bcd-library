import React from 'react'
import { Grid_Col, Grid_Padding, Grid_Row } from '../../../asset/grid/index'
import List__Color from '../../block/list/color'
import Typography__Body from '../../block/typography/body'
import Typography__Page_Title from '../../block/typography/page-title'

const ColorsPage = () => (
  <Grid_Padding>
    <Grid_Row>
      <Grid_Col span={12}>
        <Typography__Page_Title
          text='Colors'
        />
      </Grid_Col>
    </Grid_Row>

    <Grid_Row>
      <Grid_Col span={3}>
        <Typography__Body>Grey</Typography__Body>
        <List__Color
          color={{
            'name': 'grey',
            'shade': [
              {'tone': 'fafafa'}, {'tone': 'efefef'}, {'tone': 'dedede'}, {'tone': 'b8b8b8'}, {'tone': '747474'}, {'tone': '636363'}
            ]
          }}
        />
      </Grid_Col>
      <Grid_Col span={1}></Grid_Col>
      <Grid_Col span={3}>
        <Typography__Body>Black</Typography__Body>
        <List__Color
          color={{
            'name': 'blue',
            'shade': [
              {'tone': '333333'}, {'tone': '000000'}
            ]
          }}
        />
      </Grid_Col>
      <Grid_Col span={1}></Grid_Col>
      <Grid_Col span={3}>
        <Typography__Body>Blue</Typography__Body>
        <List__Color
          color={{
            'name': 'blue',
            'shade': [
              {'tone': '00aaee'}, {'tone': '0099cc'}
            ]
          }}
        />
      </Grid_Col>
      <Grid_Col span={1}></Grid_Col>
    </Grid_Row>
    <br /><br /><br /><br />
    <Grid_Row>
      <Grid_Col span={3}>
        <Typography__Body>Red</Typography__Body>
        <List__Color
          color={{
            'name': 'red',
            'shade': [
              {'tone': 'cc3300'}
            ]
          }}
        />
      </Grid_Col>
    </Grid_Row>
  </Grid_Padding>
)

export default ColorsPage
