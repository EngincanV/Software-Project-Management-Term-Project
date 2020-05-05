import React, { Component } from 'react'
import { Button, Radio } from 'antd'

const holder = [0, 0, 0, 0, 0, 0];

class Question extends Component {
  handleClick = (questno, answer) => { 
    holder[questno] = answer;
    this.props.getNextQuestion(holder);
  }

  render() {
    return (
      <div>
        <div>
          <h1 className="btn btn-large btn-2">{this.props.soru}</h1>
          <div className="row">
            <Radio.Group buttonStyle="solid">
              <Radio.Button value="a" style={{ margin: 5 }} onClick={this.handleClick.bind(this, this.props.no, 1)}>A){this.props.asikki}</Radio.Button>
              <Radio.Button value="b" style={{ margin: 5 }} onClick={this.handleClick.bind(this, this.props.no, 2)}>B){this.props.bsikki}</Radio.Button>
              <Radio.Button value="c" style={{ margin: 5 }} onClick={this.handleClick.bind(this, this.props.no, 3)}>C){this.props.csikki}</Radio.Button>
              <Radio.Button value="d" style={{ margin: 5 }} onClick={this.handleClick.bind(this, this.props.no, 4)}>D){this.props.dsikki}</Radio.Button>
            </Radio.Group>
          </div>
        </div>
      </div>
    )
  }
}
export default Question