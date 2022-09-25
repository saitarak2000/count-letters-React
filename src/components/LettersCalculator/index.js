// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {value: 0}

  changedInput = event => {
    const data = event.target.value
    if (event.target.value !== ' ') {
      this.setState({value: data.length})
    }
  }

  render() {
    const {value} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <div className="content-container">
            <h1>Calculate the Letters you enter</h1>
            <form>
              <label htmlFor="label">Enter the phrase</label>
              <br />
              <input
                type="text"
                id="label"
                onChange={this.changedInput}
                placeholder="Calculator"
              />
            </form>
            <p className="result_lg">No.of letters: {value}</p>
          </div>
          <img
            className="background-image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
