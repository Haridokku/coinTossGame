import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0}

  onChange = () => {
    this.setState(prevState => ({total: prevState.total + 1}))
  }

  getHead = () => {
    return (
      <img
        src={'https://assets.ccbp.in/frontend/react-js/heads-img.png'}
        alt="toss result"
        className="toss-result"
      />
    )
  }

  getTail = () => {
    return (
      <img
        src={'https://assets.ccbp.in/frontend/react-js/tails-img.png'}
        alt="toss result"
        className="toss-result"
      />
    )
  }

  headIncrement = () => {
    this.setState(prevState => ({heads: prevState.heads + 1}))
  }

  tailIncrement = () => {
    this.setState(prevState => ({tails: prevState.tails + 1}))
  }

  render() {
    const {total, heads, tails} = this.state
    const tossResultValue = Math.floor(Math.random() * 2)
    return (
      <div className="app-container">
        <div className="content-container">
          <h1 className="head">Coin Toss Game</h1>
          <p className="describe">Heads (or) Tails</p>
          {tossResultValue === 0 ? this.getHead() : this.getTail()}
          {tossResultValue === 0 ? this.headIncrement : this.tailIncrement}
          <button type="button" className="button" onClick={this.onChange}>
            Toss coin
          </button>
          <div className="result-container">
            <p className="para">Total: {total}</p>
            <p className="para">Heads: {heads}</p>
            <p className="para">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
