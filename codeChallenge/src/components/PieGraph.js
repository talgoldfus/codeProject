import React, {Component} from 'react'

export default class extends Component {
  // var keys = Object.keys(props.scores).filter((key) => {return key !== 'coordinates'}) ////////

  // Executes barChart after element has been rendered by the DOM
  componentDidMount() {
    debugger; 
    this.props.pieChart(document.getElementById(`pieChart${this.props.id}`), this.props.perc)
  }

    render() {
      return (
        <div>
          <canvas id={`pieChart${this.props.id}`} width="200" height="200"></canvas>
        </div>
      )
    }
}