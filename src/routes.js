import React from 'react'
import { Route } from 'react-router-dom'
import AssetsPage from './component/page/assets/index.jsx'
import BehavioursPage from './component/page/behaviours/index.jsx'
import BlocksPage from './component/page/components-blocks/index.jsx'
import ColorsPage from './component/page/assets-colors/index.jsx'
import ComponentsPage from './component/page/components/index.jsx'
import HomePage from './component/page/home/index.jsx'
import IconsPage from './component/page/assets-icons/index.jsx'
import ModulesPage from './component/page/components-modules/index.jsx'
import TypographyPage from './component/page/assets-typography/index.jsx'

const Routes = () => (
  <React.Fragment>
    <Route
      component={AssetsPage}
      path='/assets'
    />

    <Route
      component={BehavioursPage}
      path='/behaviours'
    />
    
    <Route
      component={BlocksPage}
      path='/blocks'
    />

    <Route
      component={ColorsPage}
      path='/colors'
    />

    <Route
      component={ComponentsPage}
      path='/components'
    />

    <Route
      component={HomePage}
      exact
      path='/'
    />

    <Route
      component={IconsPage}
      exact
      path='/icons'
    />

    <Route
      component={ModulesPage}
      exact
      path='/modules'
    />

    <Route
      component={TypographyPage}
      path='/typography'
    />
  </React.Fragment>
)

export default Routes
