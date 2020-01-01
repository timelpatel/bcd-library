import React from 'react'
import Container__Sidebar from '../../../../component/block/container/sidebar'
import List__Sidebar from '../../../../component/block/list/sidebar'
import Typography__Sub_Title from '../../../../component/block/typography/sub-title'

const Page_Structure__Sidenav = () => (

  <Container__Sidebar>
    <Typography__Sub_Title
      text='Blocks'
    />
    <List__Sidebar
      links={
        [
          {
            id: 1,
            text:'Button'
          },
          {
            id: 2,
            text:'Container'
          },
          {
            id: 3,
            text:'List'
          },
          {
            id: 4,
            text:'Typography'
          },
        ]
      }
    />

    <Typography__Sub_Title
      text='Modules'
    />
    <List__Sidebar
      links={
        [
          {
            id: 1,
            text:'Header & Footer'
          },
          {
            id: 2,
            text:'Messaging & Communication'
          },
          {
            id: 3,
            text:'Personal Information'
          },
        ]
      }
    />
  </Container__Sidebar>

)

export default Page_Structure__Sidenav
