import React, { Component } from 'react'
import autoBind from 'auto-bind';
import Loader from 'react-loaders'
import { Col } from 'react-bootstrap';
import _ from 'lodash';

export class Mirror extends Component {
  
    constructor(props){
        super(props);
        this.state = {
            text: ''
        };
        autoBind(this);
        this.change = this.props.changeInput;
    }

    handleChangeInput(ev){
        const text = ev.target.value;
        this.setState({text}, () => {
            if (text){
                this.change(text);
            }
        })
        
        
    }

    render() {
        debugger;
        const { mirrored } = this.props;
        let renderBody = (
            <div className="success-box">
            </div>
            );
        if (mirrored){
            const { loading, error, mirror } = mirrored;
            if (error){
                renderBody = <p>There has been an unexpected error</p>;
            }
            else if (mirror){
                renderBody = (
                    <Col xs={12} sm={10} smOffset={1} md={8} mdOffset={2} lg={8} lgOffset={2} className="success-box">
                        <div className="text title">Result:</div>                        
                        <div className="text">{mirror.text}</div>
                    </Col>
                );
            }
        }

        return (
        <div className="mirror">
            <div>
                <textarea className="text-area"
                placeholder="Enter a text" 
                value={this.state.text} 
                onChange={this.handleChangeInput} />
            </div>
            <div className="result-container">
                {renderBody}
            </div>
        </div>
        )
    }
}

export default Mirror
