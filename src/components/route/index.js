/* eslint-disable */

import React from 'react'
import PropTypes from 'prop-types'


import '../../assets/scss/main.scss'
import Endpoint from './endpoint'
let _this
class Route extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showEndpoints: true,
            tryIndex: 9999
        }
        _this = this

    }




    render() {

        return (
            <div className="route-container-collapsible">
                <div className="route-container" onClick={_this.showEndpoints}>
                    <div className="route-name-container">
                        <a>{_this.props.routeData.name}</a>
                        <span>{_this.props.routeData.description}</span>
                    </div>
                    <div className="route-find-out-more">


                        <a href="#!" onClick={_this.findOutMore}>
                            Find out more
                            </a>

                    </div>
                </div>
                {
                    _this.state.showEndpoints ?
                        <Endpoint endpoints={_this.props.routeData.endpoints} /> : ''
                }

            </div>

        )
    }
    findOutMore(){
        window.open(_this.props.routeData.docUrl,'-blank');
    }
    showEndpoints() {
        _this.setState({
            showEndpoints: !_this.state.showEndpoints
        })
    }

}
Route.propTypes = {
    routeData: PropTypes.object
}
export default Route
