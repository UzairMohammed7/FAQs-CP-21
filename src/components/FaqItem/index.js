import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {
    isBtnClicked: false,
  }

  renderAnswer = () => {
    const {eachFaqDetails} = this.props
    const {answerText} = eachFaqDetails
    const {isBtnClicked} = this.state

    if (isBtnClicked) {
      return (
        <div>
          <hr className="break-line" />
          <p>{answerText}</p>
        </div>
      )
    }
    return null
  }

  onClickFaqButton = () => {
    this.setState(prevState => ({isBtnClicked: !prevState.isBtnClicked}))
  }

  render() {
    const {eachFaqDetails} = this.props
    const {questionText} = eachFaqDetails
    const {isBtnClicked} = this.state

    const imgUrl = isBtnClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altImg = isBtnClicked ? 'minus' : 'plus'

    return (
      <li className="faq-list">
        <div className="que-and-btn">
          <h1 className="faqs-questions">{questionText}</h1>
          <button type="button" className="btn" onClick={this.onClickFaqButton}>
            <img src={imgUrl} alt={altImg} className="plus-minus-icon" />
          </button>
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
