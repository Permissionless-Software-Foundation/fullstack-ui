/* eslint-disable */

import React from 'react'
import PropTypes from 'prop-types'

//import '../assets/scss/main.scss'
import '../../assets/scss/main.scss'
import Example from './example'
let _this

class Endpoint extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            _index: 0
        }
        _this = this

    }

    componentDidMount() {
        console.log(_this.props.endpoints)
    }
    render() {

        return (
            <>
                {
                    _this.props.endpoints.map((val, i) => {
                        return (
                            <div key={i}>
                                <div
                                    onClick={() => _this.try(i + 1)}
                                    className="enpoint-container">
                                    <button>{val.type}</button>
                                    <h3>{val.endpoint}</h3>
                                    <p>{val.shortDescription}</p>
                                </div>
                                {_this.state._index === i + 1 ?
                                    <Example data={val} /> : ''}
                            </div>
                        )

                    })
                }

            </>

        )
    }
    try(i) {
        const _i = _this.state._index === i ? 0 : i
        _this.setState({
            _index: _i
        })
    }

}
Endpoint.propTypes = {
    endpoints: PropTypes.array
}
export default Endpoint
