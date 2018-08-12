import React, { Component } from 'react'
import autoBind from 'auto-bind';
import Loader from 'react-loaders'
import _ from 'lodash';

export class Mirror extends Component {
  
    constructor(props){
        super(props);
        this.state = {
            text: ''
        };
        autoBind(this);
        this.change = _.debounce(this.props.changeInput, 1000);
    }

    handleChangeInput(ev){
        const text = ev.target.value;
        this.setState({text}, () => {
            this.change(text);
        });
    }

    render() {
        debugger;
        const { mirrored } = this.props;
        let renderBody = undefined;
        if (mirrored){
            const { loading, error, mirror } = mirrored;
            if (loading) {
                renderBody = <Loader type="line-scale" />;
            }
            else if (error){
                renderBody = <p>There has been an unexpected error</p>;
            }
            else if (mirror){
                renderBody = <p className="text">{mirror}</p>;
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
            <div className="result-box">
                {renderBody}
            </div>
        </div>
        )
    }
}

export default Mirror
