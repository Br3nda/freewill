import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from './Header'

export class Home extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            register:[]
        }
    }

    componentDidMount () {
        this.props.dispatch(getCreds())
    }

    render () {
        const 
    }
}

class Step1 extends React.Component {
    constructor () {
        super()
        this.state = {}
    }
}