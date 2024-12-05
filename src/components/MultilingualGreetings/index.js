import {Component} from 'react'
import './index.css'

import LanguageButton from '../LanguageButton/index'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class MultilingualGreetings extends Component {
  state = {
    activeLanguageId: languageGreetingsList[0].id,
    activeLanguageObj: languageGreetingsList[0],
  }

  changeActiveLanguage = id => {
    const activeLanguage = languageGreetingsList.find(
      eachLanguage => eachLanguage.id === id,
    )
    this.setState({activeLanguageId: id, activeLanguageObj: activeLanguage})
  }

  render() {
    const {activeLanguageId, activeLanguageObj} = this.state
    return (
      <div className="app-container">
        <h1>Multilingual Greetings</h1>
        <ul className="language-btn-list-container">
          {languageGreetingsList.map(eachLanguage => (
            <LanguageButton
              key={eachLanguage.id}
              languageDetails={eachLanguage}
              changeActiveLanguage={this.changeActiveLanguage}
              isActive={activeLanguageId === eachLanguage.id}
            />
          ))}
        </ul>
        <img
          src={activeLanguageObj.imageUrl}
          alt={activeLanguageObj.imageAltText}
        />
      </div>
    )
  }
}

export default MultilingualGreetings
