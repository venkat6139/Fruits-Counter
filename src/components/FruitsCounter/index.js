import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  onIncrement1 = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  onIncrement2 = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count1, count2} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span>{count1}</span> mangoes <span>{count2}</span> bananas
          </h1>
          <div className="image-container">
            <div className="image-container2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button onClick={this.onIncrement1} type="button">
                Eat Mango
              </button>
            </div>
            <div className="image-container2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button onClick={this.onIncrement2} type="button">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
