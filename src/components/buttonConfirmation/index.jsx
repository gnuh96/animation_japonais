import React from 'react'
import './index.css'

const ButtonConfirmation = ({text, disable = false, onClickButton}) => {
  return (
    <div className='submitButton'>
      <button
        onClick={onClickButton}
        style={{
          color: disable ? '#424D66' : '#fff',
          backgroundColor: disable ? '#ECECEC' : '#caa756',
        }}
        disabled={disable}>
        <span>{text}</span>
      </button>
    </div>
  )
}

export default ButtonConfirmation
