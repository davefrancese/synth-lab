import React, {Component} from 'react'
import '../App.css'
import Synth from './Synth'

class SynthList extends Component {
  render() {
    return (
      <div className="Synth-list">
        
        <div className="synth-container">
          {this.props.synths.map(synth =>
            <Synth
              key={synth.id}
              synth={synth}
            />)
          }
        </div>
      </div>
    )
  }
}

export default SynthList
