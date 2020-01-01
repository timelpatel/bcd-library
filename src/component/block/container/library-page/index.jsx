import React from 'react'
import Page_Structure__Sidenav from '../../../../component/module/page-structure/sidenav'

const Container__Library_Page = (props) => {

  return (
    <React.Fragment>
      <div style={{width:'20%'}}>
        <Page_Structure__Sidenav />
      </div>

      <div style={{width:'80%'}}>
        {props.children}
      </div>
    </React.Fragment>
  )

}

export default Container__Library_Page
