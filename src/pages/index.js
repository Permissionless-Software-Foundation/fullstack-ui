import React from 'react'
import Layout from '../components/layout'

import routes from '../data/routes.json'
import Route from '../components/route'

let _this
class HomeIndex extends React.Component {
    constructor(props) {
        super(props)
        _this =  this
        this.state = {
            routesData:[]

        }


    }
    componentDidMount(){
        console.log(routes)
        _this.setState({
            routesData: routes
        })
    }
    render() {

        return (
            <Layout>
                {
                _this.state.routesData.map((val,i) =>{
                   return <Route 
                           routeData={val}
                           key={i}
                           />
                   
                })
                }
            </Layout>
        )
    }
}

export default HomeIndex