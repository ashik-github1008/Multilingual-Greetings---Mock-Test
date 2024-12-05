import './index.css'

const LanguageButton = props => {
  const {languageDetails, isActive, changeActiveLanguage} = props
  const {id, buttonText} = languageDetails

  const clickLanguageBtn = () => {
    changeActiveLanguage(id)
  }

  const activeBtnClassName = isActive
    ? 'active-btn language-btn'
    : 'language-btn'

  return (
    <li>
      <button
        type="button"
        onClick={clickLanguageBtn}
        className={activeBtnClassName}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default LanguageButton
