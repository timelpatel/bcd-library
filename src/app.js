import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import Container__Page from './component/block/container/page'
import Container__Sidebar from './component/block/container/sidebar'
import List__Sidebar from './component/block/list/sidebar'
import Header_Footer__Header from './component/module/header-footer/header'
import Routes from './routes.js'
import Typography__Sub_Title from './component/block/typography/sub-title'

const fetchComponents = () => {
  // const { readdirSync } = require('fs')

  // const getDirectories = source =>
  //   readdirSync(source, { withFileTypes: true })
  //     .filter(dirent => dirent.isDirectory())
  //     .map(dirent => dirent.name)
}

const App = () => (
  <React.Fragment>
    {fetchComponents()}

    <Header_Footer__Header />

    <Container__Page>
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

      <Routes />
    </Container__Page>

    {/* <Header_Footer__Footer /> */}
  </React.Fragment>
)

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
)
