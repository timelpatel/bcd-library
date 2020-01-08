import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { Grid_Container } from './asset/grid/index'
import Page_Structure__Header from './component/module/page-structure/header'
import Routes from './routes.js'

// const fetchComponents = () => {
  // const { readdirSync } = require('fs')

  // const getDirectories = source =>
  //   readdirSync(source, { withFileTypes: true })
  //     .filter(dirent => dirent.isDirectory())
  //     .map(dirent => dirent.name)
// }

const App = () => (
  <React.Fragment>
    <Page_Structure__Header />

    <Grid_Container>
      <Routes />
    </Grid_Container>

    {/* <Header_Footer__Footer /> */}
  </React.Fragment>
)

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
)
