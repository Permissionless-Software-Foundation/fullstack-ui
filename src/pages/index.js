/* eslint-disable */
import React from 'react'
import Layout from '../components/layout'

import MainnetRoutes from '../data/mainnet-routes.json'
import TestnetRoutes from '../data/testnet-routes.json'

import Route from '../components/route'

let _this

class HomeIndex extends React.Component {
  constructor(props) {
    super(props)
    _this = this
    this.state = {
      routesData: [],
    }
  }

  componentDidMount() {
    let routes= []
    if(process.env.NODE_ENV === ".env.production"){
      routes = MainnetRoutes
    }else {
      routes = TestnetRoutes

    }
    console.log(routes)
    _this.setState({
      routesData: routes,
    })
  }

  render() {
    return (
      <Layout>
        {_this.state.routesData.map((val, i) => {
          return <Route routeData={val} key={i} />
        })}
      </Layout>
    )
  }
}

export default HomeIndex
