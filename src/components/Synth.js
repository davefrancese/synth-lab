import React, {Component} from 'react'
import '../App.css'


class Synth extends Component {
  render() {
    return (
      <div className="Synth">
        <div>
          <img src={`${this.props.synth.image_url}`} alt={`${this.props.synth.name}`}/>
          <h2>{this.props.synth.brand} {this.props.synth.name}</h2>
          <p>{this.props.synth.description}</p>
        </div>
      </div>
    )
  }
}

export default Synth
