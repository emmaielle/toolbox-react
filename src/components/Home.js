import React, { Component } from 'react'
import autoBind from 'auto-bind';
import { fetchMirror } from '../actions';
import { withRouter } from 'react-router-dom';
import { Mirror } from './Mirror';
import { Col } from 'react-bootstrap';
import "../styles/containers/Home.css";

export class Home extends Component {
    constructor(props){
        super(props);
        autoBind(this);
    }
    
    handleChangeInput(input) {
        debugger;
        this.props.dispatch(fetchMirror(input));
    }

    render() {
        const { state, props } = this;
        const { mirrorReducer } = props;

        return (
        <Col xs={12} sm={8} md={8} mdOffset={2} smOffset={2} className="home">
            <div className="texts title">Mirror fetcher</div>
            <div className="texts description">
                Enter any text to get the identical text you wrote! 
            </div>
            <Mirror changeInput={this.handleChangeInput} mirrored={mirrorReducer}/>
        </Col>
        )
    }
}

export default withRouter(Home);
